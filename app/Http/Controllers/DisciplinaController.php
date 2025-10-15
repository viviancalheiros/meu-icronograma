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

    public function listarDisciplinasPagando()
    {
        // Buscar disciplinas marcadas como "pagando atualmente"
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

        // Calcular horas dinamicamente
        $horasCalculadas = $this->calcularHorasDinamicas();

        return Inertia::render('Home', [
            'disciplinasPagando' => $disciplinasPagando,
            'disciplinasConcluidas' => $disciplinasConcluidas,
            'horasCalculadas' => $horasCalculadas,
        ]);
    }

    private function calcularHorasDinamicas()
    {
        $usuarioId = Auth::id();
        
        // Buscar todas as disciplinas concluídas pelo usuário
        $disciplinasConcluidas = Disciplina::query()
            ->whereHas('usuarioDisciplinas', function($query) use ($usuarioId) {
                $query->where('id_usuario', $usuarioId)
                      ->where('concluida', true);
            })
            ->get();

        // Separar obrigatórias e eletivas
        $obrigatoriasConcluidas = $disciplinasConcluidas->where('tipo_disciplina', true);
        $eletivasConcluidas = $disciplinasConcluidas->where('tipo_disciplina', false);

        // Calcular horas totais
        $horasObrigatoriasConcluidas = $obrigatoriasConcluidas->sum('horas');
        $horasEletivasConcluidas = $eletivasConcluidas->sum('horas');
        $horasComplementaresConcluidas = 0; // TODO: Implementar quando houver horas complementares
        $horasTotalConcluidas = $horasObrigatoriasConcluidas + $horasEletivasConcluidas + $horasComplementaresConcluidas;

        // Horas totais do curso (valores fixos do currículo)
        $horasTotalCurso = 3747;
        $horasObrigatoriasCurso = 2571;
        $horasEletivasCurso = 936;
        $horasComplementaresCurso = 240;

        // Calcular percentuais
        $porcentagemObrigatorias = $horasObrigatoriasCurso > 0 ? round(($horasObrigatoriasConcluidas / $horasObrigatoriasCurso) * 100, 1) : 0;
        $porcentagemEletivas = $horasEletivasCurso > 0 ? round(($horasEletivasConcluidas / $horasEletivasCurso) * 100, 1) : 0;
        $porcentagemComplementares = $horasComplementaresCurso > 0 ? round(($horasComplementaresConcluidas / $horasComplementaresCurso) * 100, 1) : 0;
        $porcentagemTotal = $horasTotalCurso > 0 ? round(($horasTotalConcluidas / $horasTotalCurso) * 100, 1) : 0;

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