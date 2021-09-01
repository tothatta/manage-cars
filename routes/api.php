<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('registration', 'App\Http\Controllers\Api\RegistrationController@store');
Route::post('login', 'App\Http\Controllers\Api\LoginController@store')->name('login');

Route::middleware('auth:api')->group(function() {
    Route::get('logout', 'App\Http\Controllers\Api\LogoutController@index');

    Route::get('profile', 'App\Http\Controllers\Api\ProfileController@index');
    Route::post('profile', 'App\Http\Controllers\Api\ProfileController@store');

    Route::get('car-types', 'App\Http\Controllers\Api\CarTypeController@index');
    Route::get('users', 'App\Http\Controllers\Api\UserController@index');
    Route::get('users/{id}', 'App\Http\Controllers\Api\UserController@show');
    Route::put('users/{id}', 'App\Http\Controllers\Api\UserController@update');

    Route::get('cars', 'App\Http\Controllers\Api\CarController@index');
    Route::get('cars/{id}', 'App\Http\Controllers\Api\CarController@show');
    Route::post('cars', 'App\Http\Controllers\Api\CarController@store');
    Route::put('cars/{id}', 'App\Http\Controllers\Api\CarController@update');
});
