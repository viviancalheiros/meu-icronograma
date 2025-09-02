<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ComplementaryActivityController;

//página inicial -> login
Route::get('/', function () {
   return redirect()->route('login');
});

//página recuperar senha
Route::get('/recuperar-senha', function () {
    return Inertia::render('Auth/ForgotPassword');
})->name('password.request');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//página horas complementares
Route::get('/horas-complementares', [ComplementaryActivityController::class, 'index'])
    ->name('complementary-hours.index');

Route::post('/horas-complementares', [ComplementaryActivityController::class, 'store'])
    ->name('complementary-hours.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
