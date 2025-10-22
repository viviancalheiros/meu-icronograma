<?php

namespace App\Http\Controllers;

use App\Models\Enfase;
use App\Models\UsuarioDisciplina;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EnfaseController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        $enfases = Enfase::with(['disciplinas.usuarioDisciplinas' => function($query) use ($user) {
            $query->where('id_usuario', $user->id);
        }])->get();

        $enfasesData = [];
        
        foreach ($enfases as $enfase) {
            $totalDisciplinas = $enfase->disciplinas->count();
            $disciplinasConcluidas = 0;
            $disciplinasData = [];

            foreach ($enfase->disciplinas as $disciplina) {
                $userDisciplina = $disciplina->usuarioDisciplinas->first();
                $concluida = $userDisciplina && $userDisciplina->concluida;
                
                if ($concluida) {
                    $disciplinasConcluidas++;
                }

                $tipo = $disciplina->tipo_disciplina ? 'obrigatoria' : 'eletiva';

                $pago = $concluida;

                $disciplinasData[] = [
                    'id' => $disciplina->id,
                    'nome' => $disciplina->nome,
                    'status' => $concluida ? 'sim' : 'nao',
                    'type' => $tipo,
                    'pago' => $pago,
                    'disciplina' => [
                        'id' => $disciplina->id,
                        'nome' => $disciplina->nome,
                        'tipo_disciplina' => $disciplina->tipo_disciplina,
                        'pre_requisitos' => $disciplina->preRequisitos ? $disciplina->preRequisitos->toArray() : []
                    ],
                    'usuarioDisciplina' => $userDisciplina ? [
                        'id' => $userDisciplina->id,
                        'concluida' => $userDisciplina->concluida,
                        'periodo_pago' => $userDisciplina->periodo_pago,
                        'media' => $userDisciplina->media,
                        'professor' => $userDisciplina->professor,
                        'bloco' => $userDisciplina->bloco,
                        'anotacao' => $userDisciplina->anotacao
                    ] : null
                ];
            }

            $progress = $totalDisciplinas > 0 ? round(($disciplinasConcluidas / $totalDisciplinas) * 100) : 0;

            $enfasesData[] = [
                'id' => $enfase->id,
                'nome' => $enfase->nome,
                'progress' => $progress,
                'disciplinas' => $disciplinasData,
            ];
        }

        $disciplinasConcluidas = UsuarioDisciplina::where('id_usuario', $user->id)
            ->where('concluida', true)
            ->pluck('id_disciplina')
            ->toArray();

        return Inertia::render('Enfases', [
            'enfases' => $enfasesData,
            'disciplinasConcluidas' => $disciplinasConcluidas,
        ]);
    }
}