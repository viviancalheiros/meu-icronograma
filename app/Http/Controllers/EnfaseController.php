<?php

namespace App\Http\Controllers;

use App\Models\Enfase;
use App\Models\Disciplina;
use App\Models\UsuarioDisciplina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnfaseController extends Controller{
    public function getUserEmphasesProgress(){
        
    $user = Auth::user();
    
    $enfases = Enfase::with('disciplinas')->get();
    
    $result = [];
    
    foreach ($enfases as $enfase) {
        $totalDisciplinas = $enfase->disciplinas->count();
        $disciplinasConcluidas = 0;
        $disciplinesData = [];
        
        foreach ($enfase->disciplinas as $disciplina) {
            $userDisciplina = UsuarioDisciplina::where('id_usuario', $user->id)
                ->where('id_disciplina', $disciplina->id)
                ->first();
            
            $concluida = $userDisciplina && $userDisciplina->concluida;
            $pago = $userDisciplina && $userDisciplina->periodo_pago;
            
            if ($concluida) {
                $disciplinasConcluidas++;
            }
            
            $disciplinesData[] = [
                'name' => $disciplina->nome,
                'status' => $concluida ? 'sim' : 'nao', 
                'type' => 'eletiva', 
                'pago' => (bool)$pago
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
    
    return response()->json($result);
}}