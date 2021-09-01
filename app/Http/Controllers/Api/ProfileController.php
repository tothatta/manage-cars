<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            return $this->__response('success', [], auth()->user()->toArray(), 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), array_merge(User::getUpdateValidationRules(), [
                'email' => [
                    'required',
                    'email',
                    'max:191',
                    Rule::unique('users')->ignore(auth()->id())
                ]
            ]));

            if($validator->fails()) {
                return $this->__response('error', $validator->getMessageBag()->toArray(), [], 400);
            }

            DB::beginTransaction();

            auth()->user()->updateItem($request->all());

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }
}