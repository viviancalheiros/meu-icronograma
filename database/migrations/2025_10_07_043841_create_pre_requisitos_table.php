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
        Schema::create('pre_requisitos', function (Blueprint $table) {
            $table->foreignId('id_disciplina')->constrained('disciplinas','id')->cascadeOnDelete();
            $table->foreignId('id_pre_requisito')->constrained('disciplinas','id')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pre_requisitos');
    }
};
