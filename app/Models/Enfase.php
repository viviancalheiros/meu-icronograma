<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfase extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome'
    ];

    public function disciplinas(){
        return $this->belongsToMany(Disciplina::class,
         'disciplinas_enfases',
         'id_enfase',
         'id_disciplina')
        ->withTimestamps();
    }
}