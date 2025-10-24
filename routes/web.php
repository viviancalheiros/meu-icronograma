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

Route::inertia('/login', 'Auth/Login')->name('login');

Route::get('/teste', function () {
    return Inertia::render('TestComponent');
});

Route::get('/test-header', function () {
    return Inertia::render('Testheader');
});

require __DIR__.'/auth.php';
