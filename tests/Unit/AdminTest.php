<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function test_is_admin_returns_true_if_user_profile_is_admin()
    {
        $user = User::factory()->create([
            'profile' => 'admin'
        ]);

        $this->assertTrue($user->isAdmin());
    }
}
