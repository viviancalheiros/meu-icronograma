<?php

namespace App\Http\Controllers;

use App\Models\Disciplina;
use App\Models\UsuarioDisciplina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DisciplinaController extends Controller
{
    public function listarEletivas()
    {
        $eletivas = Disciplina::query()
            ->where('tipo_disciplina', false)
            ->with(['preRequisitos', 'usuarioDisciplinas' => function($query) {
                $query->where('id_usuario', Auth::id());
            }])
            ->orderBy('nome')
            ->get();

        $disciplinasConcluidas = UsuarioDisciplina::where('id_usuario', Auth::id())
            ->where('concluida', true)
            ->pluck('id_disciplina')
            ->toArray();

        return Inertia::render('Eletivas', [
            'eletivas' => $eletivas,
            'disciplinasConcluidas' => $disciplinasConcluidas,
        ]);
    }

    public function listarDisciplinasPagando(Request $request)
    {
        $user = $request->user();
        $disciplinasPagando = Disciplina::query()
            ->whereHas('usuarioDisciplinas', function($query) {
                $query->where('id_usuario', Auth::id())
                      ->where('pagando_atualmente', true);
            })
            ->with(['preRequisitos', 'usuarioDisciplinas' => function($query) {
                $query->where('id_usuario', Auth::id());
            }])
            ->orderBy('nome')
            ->get();

        $disciplinasConcluidas = UsuarioDisciplina::where('id_usuario', Auth::id())
            ->where('concluida', true)
            ->pluck('id_disciplina')
            ->toArray();
        $horasCalculadas = $this->calcularHorasDinamicas();

        $userName = $user ? $user->nome : null;

        return Inertia::render('Home', [
            'usuario' => [
                'nome' => $userName,
            ],
            'status' => session('status'),
            'disciplinasPagando' => $disciplinasPagando,
            'disciplinasConcluidas' => $disciplinasConcluidas,
            'horasCalculadas' => $horasCalculadas,
        ]);
    }

    private function calcularHorasDinamicas()
    {
        $usuarioId = Auth::id();
        $user = Auth::user(); 
        $disciplinasConcluidas = Disciplina::query()
            ->whereHas('usuarioDisciplinas', function($query) use ($usuarioId) {
                $query->where('id_usuario', $usuarioId)
                      ->where('concluida', true);
            })
            ->get();
        $obrigatoriasConcluidas = $disciplinasConcluidas->where('tipo_disciplina', true);
        $eletivasConcluidas = $disciplinasConcluidas->where('tipo_disciplina', false);
        $horasObrigatoriasConcluidas = $obrigatoriasConcluidas->sum('horas');
        $horasEletivasConcluidas = $eletivasConcluidas->sum('horas');

        $limitesEspecificos = [
            'FLX01_1' => 150,
            'FLX01_2' => 80,
            'FLX02_1' => 180,
            'FLX02_2' => 180,
            'FLX02_3' => 180,
            'FLX03_1' => 180,
            'FLX03_2' => 180,
            'FLX03_3' => 180,
            'FLX03_4' => 80,
            'FLX03_5' => 20,
            'FLX03_6' => 60,
            'FLX03_7' => 60,
            'FLX03_8' => 80,
            'FLX03_9' => 40,
            'FLX04_1' => 120,
        ];
        
        $horasComplementaresConcluidas = 0;
        $horasComplementaresParaCalculo = 0;

        if($user) {
            $atividades = $user->complementaryActivities;
            $horasComplementaresConcluidas = $atividades->sum('hours');
            $horasPorTipo = $atividades->groupBy('type_code')->map(function ($group) {
                return $group->sum('hours');
            });
            $totalCap = 0;
            foreach ($horasPorTipo as $typeCode => $horas) {
                if(isset($limitesEspecificos[$typeCode])) {
                    $horasCapadasTipo = min($horas, $limitesEspecificos[$typeCode]);                   
                    $totalCap += $horasCapadasTipo;
                }
            }
            
            $horasComplementaresParaCalculo = $totalCap;
        }
        $horasTotalConcluidas = $horasObrigatoriasConcluidas + $horasEletivasConcluidas + $horasComplementaresConcluidas;
        $horasTotalCurso = 3747;
        $horasObrigatoriasCurso = 2571;
        $horasEletivasCurso = 936;
        $horasComplementaresCurso = 240;
        $porcentagemObrigatorias = $horasObrigatoriasCurso > 0 ? round(($horasObrigatoriasConcluidas / $horasObrigatoriasCurso) * 100, 1) : 0;
        $porcentagemEletivas = $horasEletivasCurso > 0 ? round(($horasEletivasConcluidas / $horasEletivasCurso) * 100, 1) : 0;
        $horasParaPorcentagemComplementar = min($horasComplementaresParaCalculo, $horasComplementaresCurso);
        $porcentagemComplementares = $horasComplementaresCurso > 0 ? round(($horasParaPorcentagemComplementar / $horasComplementaresCurso) * 100, 1) : 0;
        $horasTotalConcluidasParaCalculo = $horasObrigatoriasConcluidas + $horasEletivasConcluidas + $horasParaPorcentagemComplementar;
        $porcentagemTotal = $horasTotalCurso > 0 ? round(($horasTotalConcluidasParaCalculo / $horasTotalCurso) * 100, 1) : 0;

        return [
            'total' => [
                'concluidas' => $horasTotalConcluidas,
                'curso' => $horasTotalCurso,
                'porcentagem' => $porcentagemTotal
            ],
            'obrigatorias' => [
                'concluidas' => $horasObrigatoriasConcluidas,
                'curso' => $horasObrigatoriasCurso,
                'porcentagem' => $porcentagemObrigatorias
            ],
            'eletivas' => [
                'concluidas' => $horasEletivasConcluidas,
                'curso' => $horasEletivasCurso,
                'porcentagem' => $porcentagemEletivas
            ],
            'complementares' => [
                'concluidas' => $horasComplementaresConcluidas,
                'curso' => $horasComplementaresCurso,
                'porcentagem' => $porcentagemComplementares
            ]
        ];
    }

    public function listarObrigatorias()
    {
        $disciplinasObrigatorias = Disciplina::query()
            ->where('tipo_disciplina', true)
            ->with(['preRequisitos', 'usuarioDisciplinas' => function($query) {
                $query->where('id_usuario', Auth::id());
            }])
            ->orderBy('periodo')
            ->get();

        $disciplinasConcluidas = UsuarioDisciplina::where('id_usuario', Auth::id())
            ->where('concluida', true)
            ->pluck('id_disciplina')
            ->toArray();

        $porPeriodo = $disciplinasObrigatorias->groupBy('periodo');

        return Inertia::render('Obrigatorias', [
            'disciplinas' => $porPeriodo,
            'disciplinasConcluidas' => $disciplinasConcluidas,
        ]);
    }

    public function salvarDisciplinaUsuario(Request $request)
    {
        try {
            $request->validate([
                'id_disciplina' => 'required|exists:disciplinas,id',
                'cod_disciplina' => 'nullable|string|max:255',
                'professor' => 'nullable|string|max:255',
                'bloco' => 'nullable|string|max:255',
                'media' => 'nullable|numeric|min:0|max:10',
                'anotacao' => 'nullable|string',
                'concluida' => 'nullable|boolean',
                'pagando_atualmente' => 'nullable|boolean',
                'equivalencia_aceita' => 'nullable|boolean',
                'periodo_pago' => 'nullable|string|max:255',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Erro de validação ao salvar disciplina:', [
                'errors' => $e->errors(),
                'request_data' => $request->all()
            ]);
            throw $e;
        }

        try {
            $usuarioDisciplina = UsuarioDisciplina::updateOrCreate(
                [
                    'id_usuario' => Auth::id(),
                    'id_disciplina' => $request->id_disciplina,
                ],
                [
                    'cod_disciplina' => $request->cod_disciplina,
                    'professor' => $request->professor,
                    'bloco' => $request->bloco,
                    'media' => $request->media,
                    'anotacao' => $request->anotacao,
                    'concluida' => $request->concluida,
                    'pagando_atualmente' => $request->pagando_atualmente ?? false,
                    'equivalencia_aceita' => $request->equivalencia_aceita ?? false,
                    'periodo_pago' => $request->periodo_pago,
                ]
            );

            return response()->json([
                'success' => true,
                'message' => 'Dados da disciplina salvos com sucesso!',
                'data' => $usuarioDisciplina
            ]);
        } catch (\Exception $e) {
            \Log::error('Erro ao salvar disciplina:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'request_data' => $request->all()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Erro interno do servidor. Tente novamente.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function obterDadosDisciplinaUsuario(Request $request, $disciplinaId)
    {
        $usuarioDisciplina = UsuarioDisciplina::where('id_usuario', Auth::id())
            ->where('id_disciplina', $disciplinaId)
            ->first();

        return response()->json([
            'success' => true,
            'data' => $usuarioDisciplina
        ]);
    }
}