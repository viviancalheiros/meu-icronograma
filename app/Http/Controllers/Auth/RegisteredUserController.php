<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Cadastro');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $messages = [
            'password_confirmation.same' => 'As senhas devem ser iguais.',

            'name.required' => 'O campo nome é obrigatório.',
            'email.unique' => 'E-mail já cadastrado.',
            'email.required' => 'O campo e-mail é obrigatório.',
            'registration.required' => 'O campo matrícula é obrigatório.',
            'registration.unique' => 'Matrícula já cadastrada.',
            'password.min' => 'A senha deve ter no mínimo 8 caracteres.',
            'password.required' => 'O campo senha é obrigatório.',
        ];

        //nomes no front
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:usuarios,e-mail',
            'registration' => 'required|string|max:255|unique:usuarios,matricula',
            'password' => ['required', Rules\Password::defaults()],
            'password_confirmation' => ['required', 'same:password'],
        ], $messages);

        //nomes no banco
        $user = User::create([
            'nome' => $request->name,
            'e-mail' => $request->email,
            'matricula' => $request->registration,
            'senha' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('home', absolute: false));
    }
}
