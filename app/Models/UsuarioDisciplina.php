<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disciplina extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'cod_disciplina',
        'professor',
        'bloco',
        'media',
        'anotacao',
        'concluida',
        'equivalencia_aceita',
        'periodo_pago',
    ];

    protected $casts = [
        'concluida' => 'boolean',
        'equivalencia_aceita' => 'boolean',
    ];
}
