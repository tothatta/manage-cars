<?php

namespace Database\Seeders;

use App\Models\CarType;
use Illuminate\Database\Seeder;

class CarTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $carTypes = [
            'Opel',
            'Skoda',
            'Volvo'
        ];

        foreach ($carTypes as $carType) {
            CarType::create([
                'name' => $carType
            ]);
        }
    }
}
