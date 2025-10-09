<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Disciplinas_enfasesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $disciplinas_enfases = [
            [
                "id_enfase" => 1,
                "id_disciplina" => 25,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 1,
                "id_disciplina" => 27,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 1,
                "id_disciplina" => 30,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 1,
                "id_disciplina" => 33,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 1,
                "id_disciplina" => 37,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 2,
                "id_disciplina" => 25,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 2,
                "id_disciplina" => 27,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 2,
                "id_disciplina" => 30,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 2,
                "id_disciplina" => 34,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 2,
                "id_disciplina" => 38,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 3,
                "id_disciplina" => 25,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 3,
                "id_disciplina" => 28,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 3,
                "id_disciplina" => 31,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 3,
                "id_disciplina" => 35,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 3,
                "id_disciplina" => 39,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 4,
                "id_disciplina" => 26,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 4,
                "id_disciplina" => 29,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 4,
                "id_disciplina" => 29,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 4,
                "id_disciplina" => 32,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 4,
                "id_disciplina" => 36,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "id_enfase" => 4,
                "id_disciplina" => 40,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]
        ];
        DB::table("disciplinas_enfases")->insert($disciplinas_enfases);
    }
}
