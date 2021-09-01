<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'     => 'required',
                'password'  => 'required'
            ]);

            if ($validator->fails()) {
                return $this->__response('error', $validator->getMessageBag()->toArray(), [], 400);
            }

            $user = User::whereEmail($request->email)->first();

            if (empty($user)) {
                return $this->__response('error', [
                    'email' => __('auth.failed'),
                ], [], 400);
            }

            if (!Hash::check($request->password, $user->password)) {
                return $this->__response('error', [
                    'email' => __('auth.failed'),
                ], [], 400);
            }

            $token = $user->createToken('PLOT admin token')->accessToken;

            return $this->__response('success', [], [
                'token' => $token,
                'user' => $user
            ], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }
}
