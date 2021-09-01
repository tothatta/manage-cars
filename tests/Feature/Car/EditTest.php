<?php

namespace Tests\Feature\Car;

use App\Models\Car;
use App\Models\CarType;
use App\Models\User;
use Database\Seeders\CarTypeTableSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Laravel\Passport\Passport;
use Tests\TestCase;

class EditTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @var
     */
    private $user;

    /**
     *
     */
    public function setUp(): void
    {
        parent::setUp();

        \Artisan::call('migrate:fresh --seed');
        \Artisan::call('passport:install');
        $this->seed(CarTypeTableSeeder::class);

        $this->user = User::factory()->create([
            'profile' => 'user'
        ]);
    }

    /**
     * @test
     *
     * @group cars
     */
    public function test_user_can_edit_car()
    {
        $carType = CarType::first();

        $car = Car::factory()->create([
            'car_type_id' => $carType->id,
            'user_id'     => $this->user->id
        ]);

        $data = [
            'car_type_id'   => $car->carType->id,
            'license'       => Str::random(12),
            'km'            => $car->km,
            'vintage'       => 2021,
            'status'        => 'active',
        ];

        Passport::actingAs($this->user);

        $response = $this->put('/api/cars/' . $car->id, $data);

        $response->assertOk();

        $this->assertDatabaseHas('cars', $data);
    }
}
