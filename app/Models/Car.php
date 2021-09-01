<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'car_type_id',
        'status',
        'km',
        'vintage',
        'license',
        'user_id'
    ];

    /**
     * @var array
     */
    protected $appends = [
        'carTypeName',
        'userName'
    ];

    /**
     * @var array
     */
    protected static $_validationRules = [
        'car_type_id' => 'required|exists:car_types,id',
        'status'      => 'required|in:active,inactive',
        'km'          => 'required|integer',
        'license'     => 'required|max:191|unique:cars,license',
        'vintage'     => 'required|integer|min:1900|max:2030'
    ];

    /**
     * @var array
     */
    protected static $_adminValidationRules = [
        'car_type_id' => 'required|exists:car_types,id',
        'status'      => 'required|in:active,inactive',
        'km'          => 'required|integer',
        'license'     => 'required|max:191|unique:cars,license',
        'vintage'     => 'required|integer|min:1900|max:2030',
        'user_id'     => 'required|exists:users,id'
    ];

    public function updateItem($data)
    {
        $this->update([
            'car_type_id'   => $data['car_type_id'],
            'status'        => $data['status'],
            'km'            => $data['km'],
            'vintage'       => $data['vintage'],
            'license'       => $data['license'],
            'user_id'       => isset($data['user_id']) ? $data['user_id'] : $this->user_id
        ]);
    }

    /**
     * @return string
     */
    public function getCarTypeNameAttribute()
    {
        if(!empty($this->carType)) {
            return $this->carType->name;
        }

        return '-';
    }

    /**
     * @return string
     */
    public function getUserNameAttribute()
    {
        if(!empty($this->user)) {
            return $this->user->name;
        }

        return '-';
    }

    /**
     * @param $data
     * @return mixed
     */
    public static function saveNew($data)
    {
        return self::create([
            'car_type_id'   => $data['car_type_id'],
            'status'        => $data['status'],
            'km'            => $data['km'],
            'vintage'       => $data['vintage'],
            'license'       => $data['license'],
            'user_id'       => isset($data['user_id']) ? $data['user_id'] : auth()->id()
        ]);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function carType()
    {
        return $this->belongsTo(CarType::class);
    }

    /**
     * @return array
     */
    public static function getValidationRules()
    {
        if(auth()->user()->profile === 'admin') {
            return self::$_adminValidationRules;
        } else {
            return self::$_validationRules;
        }
    }
}
