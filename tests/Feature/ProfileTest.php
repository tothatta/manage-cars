<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Passport\Passport;
use Tests\TestCase;

class ProfileTest extends TestCase
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
     * @group profile
     */
    public function test_unauthenticated_user_can_not_get()
    {
        $response = $this->get('/api/profile');

        $response->assertStatus(302);
    }

    /**
     * @test
     *
     * @group profile
     */
    public function test_auth_user_can_get_profile_data()
    {
        Passport::actingAs($this->user);

        $response = $this->get('/api/profile');

        $response->assertOk();

        $response->assertJsonFragment([
            'email' => $this->user->email
        ]);
    }

    /**
     * @test
     *
     * @group profile
     */
    public function test_user_can_update_profile_without_password()
    {
        Passport::actingAs($this->user);

        $data = [
            'email' => $this->faker->email,
            'name'  => $this->faker->name,
            'phone' => $this->faker->phoneNumber
        ];

        $response = $this->post('/api/profile', $data);

        $response->assertOk();

        $this->assertDatabaseHas('users', $data);
    }

    /**
     * @test
     *
     * @group profile
     */
    public function test_user_can_update_profile_with_password()
    {
        Passport::actingAs($this->user);

        $newPassword = Str::random();

        $data = [
            'email'                 => $this->faker->email,
            'name'                  => $this->faker->name,
            'phone'                 => $this->faker->phoneNumber,
            'password'              => $newPassword,
            'password_confirmation' => $newPassword
        ];

        $response = $this->post('/api/profile', $data);

        $response->assertOk();

        $this->assertDatabaseHas('users', [
            'email' => $data['email'],
            'name'  => $data['name'],
            'phone' => $data['phone']
        ]);

        $this->assertTrue(Hash::check($newPassword, $this->user->fresh()->password));
    }

    /**
     * @group profile
     * @dataProvider requiredFieldProvider
     */
    public function test_required_validation_fields_on_profile($field)
    {
        Passport::actingAs($this->user);

        $this->app->setLocale('hu');

        $response = $this->post('/api/profile', [
            $field => ''
        ]);

        $response->assertStatus(400);
        $response->assertJson([
            'status' => 'error',
        ]);

        $fieldName = __('validation.attributes.' . $field);

        $response->assertJsonFragment([
            $field => [__('validation.required', [
                'attribute' => $fieldName
            ])]
        ]);
    }

    /**
     * @return array
     */
    public function requiredFieldProvider()
    {
        return [
            ['name'],
            ['email'],
            ['phone']
        ];
    }

    /**
     * @group profile
     * @dataProvider maxFieldProvider
     */
    public function test_max_validation_fields_on_profile($field, $fieldValue)
    {
        Passport::actingAs($this->user);

        $this->app->setLocale('hu');

        $response = $this->post('/api/profile', [
            $field => $fieldValue
        ]);

        $response->assertStatus(400);
        $response->assertJson([
            'status' => 'error',
        ]);

        $fieldName = __('validation.attributes.' . $field);

        $response->assertJsonFragment([
            $field => [__('validation.max.string', [
                'attribute' => $fieldName,
                'max' => 191])
            ]
        ]);
    }

    /**
     * @return array
     */
    public function maxFieldProvider()
    {
        return [
            ['name', Str::random(192)],
            ['phone', Str::random(192)]
        ];
    }
}
