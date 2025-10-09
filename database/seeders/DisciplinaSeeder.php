<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DisciplinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $disciplinas = [
            //Obrigatorias
            [
                "nome" => "Programação 1",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Lógica para Computação",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Computação, Sociedade e Ética",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Matemática Discreta",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Cálculo Diferencial e Integral",
                "horas" => 144,
                "tipo_diciplina" => true,
                "periodo" => 1,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Estrutura de Dados",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 2,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Banco de Dados",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 2,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Organização e Arquitetura de Computadores",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 2,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Geometria Analítica",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 2,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Redes de Computadores",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 3,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Teoria dos Grafos",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 3,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Probabilidade e Estatística",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 3,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Álgebra Linear",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 3,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Programação 2",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 4,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Programação 3",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 4,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Projeto e Análise de Algoritmos",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 4,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Teoria da Computação",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 4,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Sistemas Operacionais",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Compiladores",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Inteligência Artificial",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Computação Gráfica",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 5,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Projeto e Desenvolvimento de Sistemas",
                "horas" => 288,
                "tipo_diciplina" => true,
                "periodo" => 6,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Metodologia de Pesquisa e Trabalho Individual",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 7,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Noções de Direito",
                "horas" => 72,
                "tipo_diciplina" => true,
                "periodo" => 7,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            // Enfases:
            [
                "nome" => "Cálculo 3",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Conceitos de Linguagem de Programação",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Aprendizagem de Máquina",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Sistemas Digitais",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Sistemas Distribuídos",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Redes Neurais e Aprendizado Profundo",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "FPGA",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Interação Homem-Máquina",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Processamento Digital de Imagens",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Computação Evolucionária",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Sistemas Embarcados",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Gerência de Projeto",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Visão Computacional",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Ciência de Dados",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "nome" => "Microcontroladores e Aplicações",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ] ,
            [
                "nome" => "Segurança de Sistemas Computacionais",
                "horas" => 72,
                "tipo_diciplina" => false,
                "periodo" => null,
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]  
        
        ];

        DB::table("disciplinas")->insert($disciplinas);
    }
}
