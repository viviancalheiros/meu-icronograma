<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('Perfil', [
            'user' => [
                'name' => $request->user()->nome,
                'registration' => $request->user()->matricula,
            ],
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();

        // Verificacao da senha pra ver se ta certa
        if (!empty($request->current_password)) {
            if (!Hash::check($request->current_password, $user->senha)) {
                return Redirect::back()->withErrors([
                    'current_password' => 'A senha atual está incorreta.'
                ]);
            }
        }

        $validatedData = $request->validated();

        $updateData = [
            'nome' => $validatedData['name'],
            'matricula' => $validatedData['registration'],
        ];

        // att nome e matricula
        $user->fill($updateData);

        // caso tenha uma nova senha, atualizar no sistema
        if (!empty($validatedData['new_password'])) {
            $user->senha = Hash::make($validatedData['new_password']);
        }

        $user->save();

        return Redirect::route('profile.edit')->with('status', 'Perfil atualizado com sucesso!');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'], 
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return Redirect::to('/');
    }
}