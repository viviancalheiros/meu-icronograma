<?php

namespace App\Http\Controllers;

use App\Models\Enfase;
use App\Models\Disciplina;
use App\Models\UsuarioDisciplina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EnfaseController extends Controller
{
    public function getUserEmphasesProgress(){
        
    $user = Auth::user();

    $userDisciplinas = UsuarioDisciplina::where('id_usuario', $user->id)
        ->pluck('concluida', 'id_disciplina')
        ->toArray();
    
    $enfases = Enfase::with('disciplinas')->get();
    
    $result = [];
    
    foreach ($enfases as $enfase) {
        $totalDisciplinas = $enfase->disciplinas->count();
        $disciplinasConcluidas = 0;
        $disciplinesData = [];
        
        foreach ($enfase->disciplinas as $disciplina) {
            $idDisciplina = $disciplina->id;
            $concluida = isset($userDisciplinas[$idDisciplina]) && $userDisciplinas[$idDisciplina] === 1;
            $pago = false;
            
            if ($concluida) {
                $disciplinasConcluidas++;
            }
            
            $disciplinesData[] = [
                'id' => $idDisciplina,
                'name' => $disciplina->nome,
                'status' => $concluida ? 'sim' : 'nao', 
                'type' => 'eletiva', 
                'pago' => $pago
            ];
        }
        
        $progress = $totalDisciplinas > 0 ? round(($disciplinasConcluidas / $totalDisciplinas) * 100) : 0;
        
        $result[] = [
            'id' => $enfase->id,
            'name' => $enfase->nome,
            'progress' => $progress,
            'disciplines' => $disciplinesData
        ];
    }
    
    return Inertia::render('EmphasisPage', [
        'emphases' => $result,
    ]);
}}