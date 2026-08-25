<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return inertia('welcome', [
        'frameworks' => [
            'Laravel',
            'Vue',
            'React',
            'Svelte',
        ],
    ]);
});

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/users', function () {
        // sleep(2);

        return inertia('users', [
            'time' => now()->toTimeString(),
            'search' => request('search'),
            // Did this to send only 
            'users' => User::query()
                ->when(request('search'), function ($query) {
                    $query->where('name', 'like', '%' . request('search') . '%');
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($user) => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ]),
            'can' => [
                'createUser' => Auth::user()->can('create', User::class),
            ],
            // 'users' => User::all()->map(fn($user) => [
            //     'id' => $user->id,
            //     'name' => $user->name,
            //     'email' => $user->email,
            // ])
        ]);
    });

    Route::get('/settings', function () {
        return inertia('settings');
    });

    Route::post('/logout', [LoginController::class, 'destroy']);

    Route::get('users/create', function () {
        return inertia('create');
    })->middleware('can:create,App\Models\User');

    Route::post('users', function (Request $request) {

        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        User::create($request->only('name', 'email', 'password'));

        return redirect('/users');

    });
});
