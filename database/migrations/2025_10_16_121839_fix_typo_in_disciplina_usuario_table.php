<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('disciplina_usuario', function (Blueprint $table) {
            $table->renameColumn('id_diciplina', 'id_disciplina');
            $table->renameColumn('cod_diciplina', 'cod_disciplina');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('disciplina_usuario', function (Blueprint $table) {
            $table->renameColumn('id_disciplina', 'id_diciplina');
            $table->renameColumn('cod_disciplina', 'cod_diciplina');
        });
    }
};