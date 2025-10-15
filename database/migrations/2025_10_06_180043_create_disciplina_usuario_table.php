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
        Schema::create('disciplina_usuario', function (Blueprint $table) {
            $table->id();
            $table->string('cod_disciplina');
            $table->foreignId('id_usuario')->constrained('usuarios','id')->cascadeOnDelete();
            $table->foreignId('id_disciplina')->constrained('disciplinas','id')->cascadeOnDelete();
            $table->string('professor')->nullable();
            $table->string('bloco')->nullable();
            $table->decimal('media')->nullable();
            $table->text('anotacao')->nullable();
            $table->boolean('concluida');
            $table->boolean('equivalencia_aceita')->nullable();
            $table->integer("periodo_pago")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disciplina_usuario');
    }
};
