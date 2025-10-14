<?php

namespace App\Http\Controllers;

use App\Models\Disciplina;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DisciplinaController extends Controller
{
    public function listarObrigatorias()
    {
        $disciplinasObrigatorias = Disciplina::query()
            ->where('tipo_diciplina', true)
            ->orderBy('periodo')
            ->get();

        $porPeriodo = $disciplinasObrigatorias->groupBy('periodo');

        return Inertia::render('Obrigatorias', [
            'disciplinas' => $porPeriodo,
        ]);
    }
}