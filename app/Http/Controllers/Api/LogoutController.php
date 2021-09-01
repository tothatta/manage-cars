<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(){
        try {
            auth()->user()->token()->revoke();

            return $this->__response('success', [
                'logout' => 'Successful logout!',
            ], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 200);
        }
    }
}
