<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuarios = 
        [
            [
                "nome" => 'teste',
                'e-mail' => 'teste@gmail.com',
                'matricula' => "0000",
                'senha' => Hash::make('12345678'),
                "updated_at" => Carbon::now(),
                "created_at" => Carbon::now()
            ]
        ]; 

        DB::table("usuarios")->insert($usuarios);
    }
}
