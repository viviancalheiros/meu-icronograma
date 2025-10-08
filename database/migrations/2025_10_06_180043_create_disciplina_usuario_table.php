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

            $table->string("cod_diciplina");
            $table->foreignId('id_usuario')->constrained('usuarios','id')->cascadeOnDelete();
            $table->foreignId('id_diciplina')->constrained('disciplians','id')->cascadeOnDelete();
            $table->string("professor");
            $table->string("bloco");
            $table->decimal("media");
            $table->text("anotacao");
            $table->boolean("concluida");
            $table->integer("periodo");
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
