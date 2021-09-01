<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Admin user
        User::create([
            'name'              => 'Teszt Admin',
            'email'             => 'teszt@admin.hu',
            'phone'             => '+36301111222',
            'status'            => 'active',
            'profile'           => 'admin',
            'password'          => Hash::make('W6sPUyyVrp'),
            'email_verified_at' => now()
        ]);

        // Simple user
        User::create([
            'name'              => 'Teszt Munkatárs',
            'email'             => 'teszt@munkatars.hu',
            'phone'             => '+36302222333',
            'status'            => 'active',
            'profile'           => 'user',
            'password'          => Hash::make('keTe9N3S6Y'),
            'email_verified_at' => now()
        ]);
    }
}
