<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class RegistrationTest extends TestCase
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
     * @group auth
     */
    public function test_user_can_register_with_data()
    {
        $data = User::factory()->make();
        $randomPassword = Str::random(10);

        $response = $this->post('/api/registration', array_merge($data->toArray(), [
            'password'              => $randomPassword,
            'password_confirmation' => $randomPassword,
            'aszf'                  => 'on'
        ]));

        $response->assertOk();

        $user = User::whereEmail($data->email)->first();
        $this->assertNotEmpty($user);

        $this->assertDatabaseHas('users', [
            'email' => $data->email,
            'name'  => $data->name,
            'phone' => $data->phone
        ]);
    }

    /**
     * @group auth
     * @dataProvider requiredFieldProvider
     */
    public function test_required_validation_fields_on_registration($field)
    {
        $this->app->setLocale('hu');

        $response = $this->post('/api/registration', [
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
            ['phone'],
            ['password'],
            ['aszf']
        ];
    }

    /**
     * @group auth
     * @dataProvider maxFieldProvider
     */
    public function test_max_validation_fields_on_registration($field, $fieldValue)
    {
        $this->app->setLocale('hu');

        $response = $this->post('/api/registration', [
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

    /**
     * @group auth
     */
    public function test_email_field_validation_on_registration()
    {
        $this->app->setLocale('hu');

        // email format validation
        $response = $this->post('/api/registration', [
            'email' => Str::random(50)
        ]);

        $response->assertStatus(400);
        $response->assertJson([
            'status' => 'error',
        ]);

        $fieldName = __('validation.attributes.email');

        $response->assertJsonFragment([
            'email' => [__('validation.email', [
                'attribute' => $fieldName])
            ]
        ]);

        // email unique validation
        $otherUser = User::factory()->create();

        $response = $this->post('/api/registration', [
            'email' => $otherUser->email
        ]);

        $response->assertStatus(400);
        $response->assertJson([
            'status' => 'error',
        ]);

        $fieldName = __('validation.attributes.email');

        $response->assertJsonFragment([
            'email' => [__('validation.unique', [
                'attribute' => $fieldName])
            ]
        ]);
    }
}
