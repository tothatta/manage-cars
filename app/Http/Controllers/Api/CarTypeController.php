<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CarType;

class CarTypeController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            return $this->__response('success', [], CarType::all()->toArray(), 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }
}
