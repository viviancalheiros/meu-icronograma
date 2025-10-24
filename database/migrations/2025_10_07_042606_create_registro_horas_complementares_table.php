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
        Schema::create('registro_horas_complementares', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_usuario')->constrained('usuarios','id')->cascadeOnDelete();
            $table->foreignId('id_tipo_hora')->constrained('tipos_horas_complementares','id')->cascadeOnDelete();
            $table->string('nome');
            $table->integer('horas');
            $table->string('orientador')->nullable();
            $table->string('instituicao')->nullable();
            $table->text('anotacoes')->nullabe();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registro_horas_complementares');
    }
};
