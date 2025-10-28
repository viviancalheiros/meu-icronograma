<?php

namespace App\Http\Controllers;

use App\Models\ComplementaryActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ComplementaryActivityController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if(!$user) return redirect()->route('login');

        $activities = $user->complementaryActivities()->orderBy('created_at', 'desc')->get();
        $limitesEspecificos = [
            'FLX01_1' => 150,
            'FLX01_2' => 80,
            'FLX02_1' => 180,
            'FLX02_2' => 180,
            'FLX02_3' => 180,
            'FLX03_1' => 180,
            'FLX03_2' => 180,
            'FLX03_3' => 180,
            'FLX03_4' => 80,
            'FLX03_5' => 20,
            'FLX03_6' => 60,
            'FLX03_7' => 60,
            'FLX03_8' => 80,
            'FLX03_9' => 40,
            'FLX04_1' => 120,
        ];

        $horasPorTipo = $activities->groupBy('type_code')->map(function ($group) {
            return $group->sum('hours');
        });

        $totalCap = 0;
        foreach ($horasPorTipo as $typeCode => $horas) {
            if(isset($limitesEspecificos[$typeCode])) {
                $horasCapadasTipo = min($horas, $limitesEspecificos[$typeCode]);                
                $totalCap += $horasCapadasTipo;
            }
        }
        $totalHours = min($totalCap, 240);

        return Inertia::render('ComplementaryHours/Index', [
            'activities' => $activities,
            'totalHours' => $totalHours,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'hours'       => 'required|integer|min:1',
            'type_code'   => 'required|string|max:50',
            'advisor'     => 'nullable|string|max:255',
            'institution' => 'nullable|string|max:255',
            'notes'       => 'nullable|string',
        ]);

        $request->user()->complementaryActivities()->create($validated);
        return redirect()->route('complementary-activities.index')->with('status', 'Atividade adicionada com sucesso!');
    }

    public function update(Request $request, $id)
    {
        $activity = ComplementaryActivity::findOrFail($id);

        if ($activity->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'hours'       => 'required|integer|min:1',
            'type_code'   => 'required|string|max:50',
            'advisor'     => 'nullable|string|max:255',
            'institution' => 'nullable|string|max:255',
            'notes'       => 'nullable|string',
        ]);

        $activity->update($validated);
        
        return redirect()->route('complementary-activities.index');
    }

    public function destroy($id)
    {
        $activity = ComplementaryActivity::findOrFail($id);

        if ($activity->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }
        
        $activity->delete();
        
        return redirect()->route('complementary-activities.index');
    }
}