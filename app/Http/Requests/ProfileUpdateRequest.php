<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class ProfileUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'registration' => [
                'required',
                'string',
                'max:255',
                Rule::unique('usuarios', 'matricula')->ignore($this->user()->id),
            ],
            'current_password' => ['required', 'string'], // obrigatorio p atualizar
            'new_password' => ['nullable', 'string', 'min:8', 'confirmed'], // Opcional
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'Nome',
            'registration' => 'Matrícula',
            'current_password' => 'Senha atual',
            'new_password' => 'Nova senha',
        ];
    }

    public function messages(): array
    {
        return [
            'current_password.required' => 'A senha atual é obrigatória para salvar as alterações.',
            'new_password.confirmed' => 'A confirmação da nova senha não corresponde.',
        ];
    }
}