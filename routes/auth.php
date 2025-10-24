<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\DisciplinaController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EnfaseController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store'])
        ->name('login.store');

    Route::get('/cadastro', [RegisteredUserController::class, 'create'])
        ->name('cadastro');

    Route::post('/cadastro', [RegisteredUserController::class, 'store'])
        ->name('cadastro.store');

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    Route::get('/home', [DisciplinaController::class, 'listarDisciplinasPagando'])
        ->name('home');

    Route::get('/duvidas', function () {
        return Inertia::render('Duvidas');
    });

    Route::get('/obrigatorias', [DisciplinaController::class, 'listarObrigatorias']
    )->name('obrigatorias');

    Route::post('/disciplina-usuario/salvar', [DisciplinaController::class, 'salvarDisciplinaUsuario'])
        ->name('disciplina-usuario.salvar');

    Route::get('/disciplina-usuario/{disciplinaId}', [DisciplinaController::class, 'obterDadosDisciplinaUsuario'])
        ->name('disciplina-usuario.obter');

    Route::get('/eletivas', [DisciplinaController::class, 'listarEletivas'])
        ->name('eletivas');

    Route::get('/enfases', [EnfaseController::class, 'index'])->name('enfases');
    Route::get('/user/emphases-progress', [EnfaseController::class, 'getUserEmphasesProgress']);
    
    Route::get('/perfil', [ProfileController::class, 'edit'])
        ->name('profile.edit');
        Route::patch('/perfil', [ProfileController::class, 'update'])->name('profile.update');

});