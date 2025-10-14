<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{

    public function authorize():bool{
        return true; //somente usuarios com autenticacao podem att o perfil
    }


    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],

            //validacao p matricula
            'registration' => [
                'required',
                'string',
                'max:255',
                Rule::unique('usuarios', 'matricula')->ignore($this->user()->id),
            ],

            //p validar senha (opcional)
            'password' => ['nullable', 'string', 'min:8'],
        ];
    }

    public function attributes(): array{
        return [
            'name' => 'Nome',
            'registration' => 'Matrícula',
            'password' => 'Senha',
        ];
    }
}
