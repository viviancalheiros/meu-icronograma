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
        'tipo_diciplina',
        'periodo',
    ];

    protected $casts = [
        'tipo_diciplina' => 'boolean',
    ];

    protected function tipo(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->attributes['tipo_diciplina'],
            set: fn ($value) => [
                'tipo_diciplina' => $value,
            ],
        );
    }
}
