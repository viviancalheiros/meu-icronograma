<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\ComplementaryActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;
use App\Notifications\ResetPasswordNotification;

class User extends Authenticatable implements CanResetPassword
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    // protected $table = "usuario";

    /**
     * Envia a notificação de redefinição de senha.
     * * @param string $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    protected $table = 'usuarios';
    
    public function getAuthPassword() {
        return $this->senha;
    }

    public function getAuthPasswordName() {
        return 'senha';
    }

    protected $fillable = [
        'nome',
        'email',
        'matricula',
        'senha',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'senha',
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
            'senha' => 'hashed',
        ];
    }

    public function tests() {
        return $this->hasMany(Test::class, "user_id");
    }
}
