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

Route::get('/home', function() {
    return Inertia::render('Home');
});

Route::get('/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/teste', function () {
    return Inertia::render('TestComponent');
});

Route::get('/cadastro', function () {
    return Inertia::render('Cadastro');
});

Route::get('/test-header', function () {
    return Inertia::render('Testheader');
});

Route::get('/duvidas', function () {
    return Inertia::render('Duvidas');
});

Route::get('/disciplines', function () {
    return Inertia::render('Disciplines');
});

require __DIR__.'/auth.php';
