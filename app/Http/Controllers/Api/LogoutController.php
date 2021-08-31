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
            //Revoking the token, for logging out the user
            auth()->user()->token()->revoke();

            //Successful logout response
            return $this->__response('success', [
                'logout' => 'Successful logout!',
            ], [], 200);
        } catch (\Exception $e) {
            //Error, when logging out fails
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 200);
        }
    }
}
