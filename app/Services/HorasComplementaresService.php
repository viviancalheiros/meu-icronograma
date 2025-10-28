<?php

namespace App\Services;

use App\Models\User; 

class HorasComplementaresService
{
    private const LIMITES_ESPECIFICOS = [
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

    private const LIMITE_GERAL_CURSO = 240;

    public function getLimiteGeral(): int
    {
        return self::LIMITE_GERAL_CURSO;
    }

    /**
     * Calcula os totais de horas complementares para um usuário.
     *
     * @param User $user O usuário autenticado
     * @return array [
     * 'raw'          => (float) Total de horas brutas (sem limites),
     * 'type_capped'  => (float) Total com limites por tipo (mas sem o limite geral),
     * 'final_capped' => (float) Total final, com todos os limites aplicados
     * ]
     */
    public function calcularHoras(User $user): array
    {
        //pega as atividades do usuário
        $atividades = $user->complementaryActivities;

        //total bruto
        $totalRaw = $atividades->sum('hours'); //

        //total por tipo
        $horasPorTipo = $atividades->groupBy('type_code')->map(function ($group) {
            return $group->sum('hours');
        });

        $totalPorTipo = 0;
        foreach ($horasPorTipo as $typeCode => $horas) {
            if (isset(self::LIMITES_ESPECIFICOS[$typeCode])) {
                $horasTipo = min($horas, self::LIMITES_ESPECIFICOS[$typeCode]); //
                $totalPorTipo += $horasTipo; //
            }
        }

        $totalFinal = min($totalPorTipo, self::LIMITE_GERAL_CURSO); //

        return [
            'raw'          => $totalRaw,
            'type'  => $totalPorTipo,
            'final' => $totalFinal,
        ];
    }
}