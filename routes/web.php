<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ComplementaryActivityController;
use App\Http\Controllers\Auth\RegisteredUserController;

//página inicial -> login
Route::get('/', function () {
   return redirect()->route('login');
});

//página recuperar senha
Route::get('/recuperar-senha', function () {
    return Inertia::render('Auth/ForgotPassword');
})->name('password.request');

//página horas complementares
// Route::get('/horas-complementares', [ComplementaryActivityController::class, 'index'])
//     ->name('complementary-hours.index');

// Route::post('/horas-complementares', [ComplementaryActivityController::class, 'store'])
//     ->name('complementary-hours.store');

Route::middleware('auth')->group(function () {
    Route::resource('horas-complementares', ComplementaryActivityController::class)
            ->names('complementary-activities');
});

Route::get('/teste', function () {
    return Inertia::render('TestComponent');
});

Route::get('/test-header', function () {
    return Inertia::render('Testheader');
});

require __DIR__.'/auth.php';
