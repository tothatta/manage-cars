<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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

        $this->user = User::factory()->create();
    }

    /**
     * @test
     *
     * @group users
     */
    public function test_admin_can_update_user_data()
    {
        $user = User::factory()->create([
            'profile' => 'admin'
        ]);

        Passport::actingAs($user);

        $newData = [
            'name'  => $this->user->name,
            'email' => $this->faker->safeEmail,
            'phone' => $this->user->phone,
            'status'=> 'active',
            'profile'=> 'admin'
        ];

        $response = $this->put('/api/users/' . $this->user->id, $newData);

        $response->assertOk();

        $this->assertDatabaseHas('users', $newData);
    }
}
