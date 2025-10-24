<?php

namespace App\Http\Controllers;

use App\Models\ComplementaryActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ComplementaryActivityController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if (!$user) return redirect()->route('login');

        $activities = $user->complementaryActivities()->orderBy('created_at', 'desc')->get();
        $totalHours = $activities->sum('hours');

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

        return redirect()->route('complementary-activities.index');
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