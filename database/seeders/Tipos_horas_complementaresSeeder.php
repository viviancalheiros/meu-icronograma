<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Tipos_horas_complementaresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tipos_horas_complementares = [
            [
                "codigo_diciplina" => "FLX01_1",
                "minutos" => 9000,
                "descricao" => "Monitoria em disciplinas de graduação",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX01_2",
                "minutos" => 4800,
                "descricao" => "Desenvolvimento ou participação no desenvolvimento de material informacional (divulgação científica) ou didático (livros, CD-ROM. Vídeos, exposições)",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX02_1",
                "minutos" => 10800,
                "descricao" => "Disciplina eletiva, cursada e com aprovação, na UFAL",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX02_1",
                "minutos" => 10800,
                "descricao" => "Disciplina eletiva, cursada e com aprovação, na UFAL",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX02_2",
                "minutos" => 1000000,
                "descricao" => "Participação em Jornadas, Simpósios, Congressos, Seminários, Encontros, Palestras, Conferências, Debates, Mesas Redondas e outros.",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX02_3",
                "minutos" => 1000000,
                "descricao" => "Outras Atividades de Extensão",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX02_4",
                "minutos" => 3600,
                "descricao" => "Participação como ouvinte, em minicursos, cursos de extensão, oficinas, seminários, entre outros",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_1",
                "minutos" => 10800,
                "descricao" => "Atividades de pesquisa com bolsa ou sem bolsa (Instituições fomentadoras de pesquisa científica).",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_2",
                "minutos" => 10800,
                "descricao" => "Atividades de pesquisa com bolsa ou sem bolsa emum grupo de pesquisa do IC",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_3",
                "minutos" => 4800,
                "descricao" => "Apresentação de comunicações ou posters em eventos científicos",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_4",
                "minutos" => 2400,
                "descricao" => "Publicação de trabalhos completos em anais de eventos científicos",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_5",
                "minutos" => 1200,
                "descricao" => "Publicação de resumos em anais de eventos científicos.",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_6",
                "minutos" => 3600,
                "descricao" => "Publicação de artigos em periódicos de divulgação científica ou de caráter não científico",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_7",
                "minutos" => 3600,
                "descricao" => "Publicação de artigos em periódicos de divulgação científica com ISSN e Conselho Editorial",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_8",
                "minutos" => 4800,
                "descricao" => "Desenvolvimento ou participação na elaboração de instrumentos de pesquisa, guias ou catálogos de acervo de memória e/ou exposições",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX03_9",
                "minutos" => 2400,
                "descricao" => "Organização ou participação na organização de eventos científicos.",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ],
            [
                "codigo_diciplina" => "FLX04_1",
                "minutos" => 7200,
                "descricao" => "Representação estudantilColegiado da Graduação,CA, DCE e UNE.",
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]   
        ];
   
        DB::table("tipos_horas_complemetares")->insert($tipos_horas_complementares);
    }
}
