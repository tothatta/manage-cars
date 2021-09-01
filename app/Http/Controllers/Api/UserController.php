<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        try {
            $this->authorize(__FUNCTION__, User::class);

            $users = User::select();

            if($request->has('email') && !empty($request->email)) {
                $users = $users->where('email', 'LIKE', '%' . $request->email . '%');
            }

            if($request->has('name') && !empty($request->name)) {
                $users = $users->where('name', 'LIKE', '%' . $request->name . '%');
            }

            if($request->has('pagination') && $request->pagination == 1) {
                $users = $users->paginate(10);
            } else {
                $users = $users->get();
            }

            return $this->__response('success', [], $users->toArray(), 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $this->authorize(__FUNCTION__, User::class);

            $user = User::with('cars')->findOrFail($id);

            return $this->__response('success', [], $user->toArray(), 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $this->authorize(__FUNCTION__, User::class);

            /** @var User $user */
            $user = User::findOrFail($id);

            $validator = Validator::make($request->all(), array_merge(User::getUpdateValidationRules(), [
                'email' => [
                    'required',
                    'email',
                    'max:191',
                    Rule::unique('users')->ignore($user->id)
                ],
                'profile' => [
                    'in:user,admin',
                ],
                'status' => [
                    'in:active,inactive',
                ],
            ]));

            if($validator->fails()) {
                return $this->__response('error', $validator->getMessageBag()->toArray(), [], 200);
            }

            DB::beginTransaction();

            $user->updateItem($request->all());

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response('', ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $id)
    {
        try {
            $this->authorize(__FUNCTION__, User::class);

            $user = User::findOrFail($id);

            DB::beginTransaction();

            $user->cars()->delete();

            $user->delete();

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 500);
        }
    }
}
