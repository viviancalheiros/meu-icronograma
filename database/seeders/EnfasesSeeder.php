<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnfasesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $enfases = [
            [
                "nome" => "Computação Visual",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Sistemas Inteligentes",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]
            ,
            [
                "nome" => "Sistemas de Computadores",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]
            ,
            [
                "nome" => "Sistemas de Informação",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]
        ];
        DB::table("enfases")->insert($enfases);
    }
}
