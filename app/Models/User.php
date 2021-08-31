<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

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
        'profile'
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
        'password'  => 'required|min:8|max:191|confirmed',
        'aszf'      => 'required'
    ];

    /**
     * @var array
     */
    protected static $_updateValidationRules = [
        'name'      => 'required|max:191',
        'phone'     => 'required|max:191',
        'password'  => 'sometimes|min:8|max:191|confirmed',
    ];

    /**
     * @param $data
     */
    public function updateItem($data)
    {
        $this->update([
            'email'             => $data['email'],
            'name'              => $data['name'],
            'phone'             => $data['phone'],
            'profile'           => isset($data['profile']) ? $data['profile'] : $this->profile,
            'password'          => isset($data['password']) ? Hash::make($data['password']) : $this->password
        ]);
    }

    /**
     * @param $data
     * @return self
     */
    public static function saveNew($data)
    {
        return self::create([
            'email'             => $data['email'],
            'name'              => $data['name'],
            'phone'             => $data['phone'],
            'password'          => Hash::make($data['password']),
            'email_verified_at' => now(),
            'profile'           => isset($data['profile']) ? $data['profile'] : 'user'
        ]);
    }

    /**
     * @return array
     */
    public static function getValidationRules()
    {
        return self::$_validationRules;
    }

    /**
     * @return array
     */
    public static function getUpdateValidationRules()
    {
        return self::$_updateValidationRules;
    }
}
