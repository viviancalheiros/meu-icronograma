<?php

namespace App\Http\Controllers;

use App\Models\ComplementaryActivity;
use App\Models\User;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ComplementaryActivityController extends Controller
{
    public function index()
    {
        $user = User::find(1); 
        if (!$user) {
            abort(404, 'Usuário de teste não encontrado. Rode o `php artisan tinker` para criá-lo.');
        }

        $activities = $user->complementaryActivities()->orderBy('created_at', 'desc')->get();

        return Inertia::render('ComplementaryHours/Index', [
            'activities' => $activities,
            'auth' => ['user' => $user], 
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'hours' => 'required|integer|min:1',
            'type_code' => 'nullable|string|max:50',
            'advisor' => 'nullable|string|max:255',
            'institution' => 'nullable|string|max:255',
            'notes' => 'nullable|string',
        ]);


        $user = User::find(1);
        $user->complementaryActivities()->create($validated);

        return redirect()->route('complementary-hours.index')->with('success', 'Atividade cadastrada com sucesso!');
    }
}