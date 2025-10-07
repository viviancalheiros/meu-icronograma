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
        Schema::create('disciplinas_enfases', function (Blueprint $table) {
            $table->foreignId('id_disciplina')->constrained('disciplinas','id')->cascadeOnDelete();
            $table->foreignId('id_enfase')->constrained('enfases','id')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disciplinas_enfases');
    }
};
