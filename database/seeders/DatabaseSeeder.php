<?php

namespace Database\Seeders;

use App\Models\Test;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(DisciplinaSeeder::class);
        $this->call(UsuariosSeeder::class);
        $this->call(EnfasesSeeder::class);
        $this->call(Tipos_horas_complementaresSeeder::class);
        $this->call(Pre_requisitosSeeder::class);
        $this->call(Disciplinas_enfasesSeeder::class);
    }
}
