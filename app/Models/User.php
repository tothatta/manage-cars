<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @var array
     */
    protected static $_validationRules = [
        'name'      => 'required|max:191',
        'email'     => 'required|email|max:191|unique:users',
        'phone'     => 'required|max:191',
        'password'  => 'required|min:8|max:191|confirmed'
    ];

    /**
     * @param $data
     * @return self
     */
    public static function saveNew($data)
    {
        return self::create([
            'email'     => $data['email'],
            'name'      => $data['name'],
            'phone'     => $data['phone'],
            'password'  => Hash::make($data['password'])
        ]);
    }

    /**
     * @return array
     */
    public static function getValidationRules()
    {
        return self::$_validationRules;
    }
}
