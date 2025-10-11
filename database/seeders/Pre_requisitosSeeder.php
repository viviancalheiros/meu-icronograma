<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Pre_requisitosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pre_requisitos = [
            //Obrigatorias
            [
                "id_disciplina" => 6,
                "id_pre_requisito" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 10,
                "id_pre_requisito" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 11,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 11,
                "id_pre_requisito" => 4,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 12,
                "id_pre_requisito" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 13,
                "id_pre_requisito" => 9,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 14,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 14,
                "id_pre_requisito" => 7,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 14,
                "id_pre_requisito" => 10,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 15,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 15,
                "id_pre_requisito" => 7,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 15,
                "id_pre_requisito" => 10,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 16,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 16,
                "id_pre_requisito" => 11,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 18,
                "id_pre_requisito" => 8,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 19,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 19,
                "id_pre_requisito" => 17,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 20,
                "id_pre_requisito" => 2,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 20,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 2,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 3,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 4,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 7,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 8,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 9,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 10,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 11,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 12,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 13,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 14,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 15,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 16,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 17,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 18,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 19,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 20,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 22,
                "id_pre_requisito" => 21,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            //Enfases
            [
                "id_disciplina" => 25,
                "id_pre_requisito" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 27,
                "id_pre_requisito" => 25,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 28,
                "id_pre_requisito" => 25,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 32,
                "id_pre_requisito" => 15,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 33,
                "id_pre_requisito" => 21,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 36,
                "id_pre_requisito" => 22,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 38,
                "id_pre_requisito" => 12,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_disciplina" => 40,
                "id_pre_requisito" => 10,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]
        ];
        DB::table("pre_requisitos")->insert($pre_requisitos);
    }
}
