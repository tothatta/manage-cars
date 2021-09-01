<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     *
     */
    public function setUp(): void
    {
        parent::setUp();

        \Artisan::call('migrate:fresh --seed');
        \Artisan::call('passport:install');
    }

    /**
     * @test
     *
     * @group login
     */
    public function test_user_can_login()
    {
        $password = Str::random(10);

        $user = User::factory()->create([
            'password' => Hash::make($password)
        ]);

        $response = $this->post('/api/login', [
            'email'     => $user->email,
            'password'  => $password
        ]);

        $response->assertOk();
    }
}
