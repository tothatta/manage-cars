<?php

namespace Tests\Feature\Car;

use App\Models\Car;
use App\Models\User;
use App\Models\CarType;
use Database\Seeders\CarTypeTableSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Passport\Passport;
use Tests\TestCase;

class StoreTest extends TestCase
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
    public function test_user_without_admin_can_store_car()
    {
        Passport::actingAs($this->user);

        $carType = CarType::first();

        $data = Car::factory()->make([
            'car_type_id'   => $carType->id
        ]);

        $postData = [
            'car_type_id' => $data->car_type_id,
            'vintage'     => $data->vintage,
            'km'          => $data->km,
            'status'      => $data->status,
            'license'     => $data->license
        ];

        $response = $this->post('/api/cars', array_merge($data->toArray(), ['user_id' => null]));

        $response->assertOk();

        $this->assertDatabaseHas('cars', array_merge($postData, [
            'user_id' => $this->user->id
        ]));
    }

    /**
     * @test
     *
     * @group cars
     */
    public function test_user_with_admin_can_store_car()
    {
        $user = User::factory()->create([
            'profile' => 'admin'
        ]);
        Passport::actingAs($user);

        $carType = CarType::first();

        $data = Car::factory()->make([
            'car_type_id'   => $carType->id,
            'user_id'       => $this->user->id
        ]);

        $postData = [
            'car_type_id' => $data->car_type_id,
            'user_id'     => $data->user_id,
            'vintage'     => $data->vintage,
            'km'          => $data->km,
            'status'      => $data->status,
            'license'     => $data->license
        ];

        $response = $this->post('/api/cars', $data->toArray());

        $response->assertOk();

        $this->assertDatabaseHas('cars', $postData);

        $car = Car::whereLicense($data->license)->first();

        $this->assertNotEmpty($car);
        $this->assertEquals($car->user_id, $this->user->id);
    }
}
