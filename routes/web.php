<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//página inicial -> login
Route::get('/', function () {
   return redirect()->route('login');
});

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


require __DIR__.'/auth.php';
