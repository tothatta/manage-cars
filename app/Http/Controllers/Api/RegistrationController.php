<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), User::getValidationRules());

            if($validator->fails()) {
                return $this->__response('error', $validator->getMessageBag()->toArray(), [], 400);
            }

            DB::beginTransaction();

            User::saveNew($request->all());

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }
}
