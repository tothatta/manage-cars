<?php

namespace Tests\Feature\Car;

use App\Models\CarType;
use App\Models\User;
use App\Models\Car;
use Database\Seeders\CarTypeTableSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Passport\Passport;
use Tests\TestCase;

class IndexTest extends TestCase
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
    public function test_auth_user_can_get_own_cars()
    {
        $otherUser = User::factory()->create();

        $carType = CarType::first();
        Car::factory()->count(10)->create([
            'car_type_id' => $carType->id,
            'user_id'   => $otherUser->id
        ]);

        $user = User::factory()->create();
        $ownCar = Car::factory()->create([
            'user_id'   => $user->id,
            'car_type_id' => $carType->id
        ]);

        Passport::actingAs($user);

        $response = $this->get('/api/cars');

        $response->assertOk();

        $response->assertJsonCount(1, 'data.data');
    }

    /**
     * @test
     *
     * @group cars
     */
    public function test_auth_user_can_show_own_car()
    {
        $carType = CarType::first();

        $ownCar = Car::factory()->create([
            'user_id'   => $this->user->id,
            'car_type_id' => $carType->id
        ]);

        Passport::actingAs($this->user);

        $response = $this->get('/api/cars/' . $ownCar->id);

        $response->assertOk();
    }

    /**
     * @test
     *
     * @group cars
     */
    public function test_auth_admin_can_show_other_user_car()
    {
        $user = User::factory()->create([
            'profile'   => 'admin'
        ]);
        $carType = CarType::first();

        $otherCar = Car::factory()->create([
            'user_id'   => $this->user->id,
            'car_type_id' => $carType->id
        ]);

        Passport::actingAs($user);

        $response = $this->get('/api/cars/' . $otherCar->id);
        $response->assertOk();
    }

    /**
     * @test
     *
     * @group cars
     */
    public function test_auth_user_can_not_show_other_car()
    {
        $user = User::factory()->create();
        $carType = CarType::first();

        $otherCar = Car::factory()->create([
            'user_id'   => $user->id,
            'car_type_id' => $carType->id
        ]);

        $otherUser = User::factory()->create();

        Passport::actingAs($otherUser);

        $response = $this->get('/api/cars/' . $otherCar->id);

        $response->assertStatus(403);
    }
}
