<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\ComplementaryActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    // protected $table = "usuario";

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    protected $table = 'usuarios';
    
    public function getAuthPassword() {
        return $this->password;
    }

    protected $fillable = [
        'nome',
        'e-mail',
        'matricula',
        'senha',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function complementaryActivities()
    {
        return $this->hasMany(ComplementaryActivity::class);
    }

    public function disciplinas()
    {
        return $this->belongsToMany(Disciplina::class, 'disciplina_usuario', 'id_usuario', 'id_disciplina')
                    ->withPivot(['cod_disciplina', 'professor', 'bloco', 'media', 'anotacao', 'concluida', 'equivalencia_aceita', 'periodo_pago'])
                    ->withTimestamps();
    }

    public function usuarioDisciplinas()
    {
        return $this->hasMany(UsuarioDisciplina::class, 'id_usuario');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function tests() {
        return $this->hasMany(Test::class, "user_id");
    }
}
