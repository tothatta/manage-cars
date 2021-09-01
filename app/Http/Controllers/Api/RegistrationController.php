<?php

namespace App\Http\Controllers\Api;

use App\Events\UserRegistered;
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

            $user = User::saveNew($request->all());

            // Passport Token
            $token = $user->createToken('PLOT customer token')->accessToken;

            DB::commit();

            UserRegistered::dispatch($user);

            return $this->__response('success', [], [
                'user' => $user,
                'token'  => $token
            ], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }
}
