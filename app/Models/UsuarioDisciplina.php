<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioDisciplina extends Model
{
    use HasFactory;

    protected $table = 'disciplina_usuario';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'cod_disciplina',
        'id_usuario',
        'id_disciplina',
        'professor',
        'bloco',
        'media',
        'anotacao',
        'concluida',
        'pagando_atualmente',
        'equivalencia_aceita',
        'periodo_pago',
    ];

    protected $casts = [
        'concluida' => 'boolean',
        'pagando_atualmente' => 'boolean',
        'equivalencia_aceita' => 'boolean',
    ];

    public function disciplina()
    {
        return $this->belongsTo(Disciplina::class, 'id_disciplina');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario');
    }
}
