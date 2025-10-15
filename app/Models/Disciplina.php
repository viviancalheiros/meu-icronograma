<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Disciplina extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nome',
        'horas',
        'tipo_disciplina',
        'periodo',
    ];

    protected $casts = [
        'tipo_disciplina' => 'boolean',
    ];

    public function preRequisitos()
    {
        return $this->belongsToMany(Disciplina::class, 'pre_requisitos', 'id_disciplina', 'id_pre_requisito');
    }

    public function disciplinasQueTemComoPreRequisito()
    {
        return $this->belongsToMany(Disciplina::class, 'pre_requisitos', 'id_pre_requisito', 'id_disciplina');
    }

    public function usuarios()
    {
        return $this->belongsToMany(User::class, 'disciplina_usuario', 'id_disciplina', 'id_usuario')
                    ->withPivot(['cod_disciplina', 'professor', 'bloco', 'media', 'anotacao', 'concluida', 'equivalencia_aceita', 'periodo_pago'])
                    ->withTimestamps();
    }

    public function usuarioDisciplinas()
    {
        return $this->hasMany(UsuarioDisciplina::class, 'id_disciplina');
    }
}
