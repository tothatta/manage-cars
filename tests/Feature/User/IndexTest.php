<?php

namespace Tests\Feature\User;

use App\Models\User;
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

        $this->user = User::factory()->create();
    }

    /**
     * @test
     *
     * @group users
     */
    public function test_unauthenticated_user_can_not_get_users()
    {
        $response = $this->get('/api/users');

        $response->assertStatus(302);
    }

    /**
     * @test
     *
     * @group users
     */
    public function test_authenticated_not_admin_can_not_get_users()
    {
        $user = User::factory()->create([
            'profile' => 'user'
        ]);

        Passport::actingAs($user);

        $response = $this->get('/api/users');

        $response->assertStatus(500);
    }

    /**
     * @test
     *
     * @group users
     */
    public function test_authenticated_admin_can_get_users()
    {
        $user = User::factory()->create([
            'profile' => 'admin'
        ]);

        Passport::actingAs($user);

        $response = $this->get('/api/users');

        $response->assertStatus(200);
    }
}
