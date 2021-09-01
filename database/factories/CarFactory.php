<?php

namespace Database\Factories;

use App\Models\Car;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Car::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'status' => 'active',
            'km'     => $this->faker->randomNumber(),
            'vintage'=> 2020,
            'license'=> Str::random(10),
            'user_id'=> User::factory()->create()->id
        ];
    }
}
