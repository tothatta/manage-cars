<?php

namespace App\Http\Controllers\Api;

use App\Models\Car;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CarController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        try {
            $cars = Car::select();

            if(! auth()->user()->isAdmin()) {
                $cars->where('user_id', auth()->id());
            }

            if($request->has('license') && !empty($request->license)) {
                $cars->where('license', 'LIKE', '%' . $request->license . '%');
            }

            if($request->has('type') && !empty($request->type)) {
                $cars->where('car_type_id', $request->type);
            }

            if($request->has('user') && !empty($request->user) && auth()->user()->isAdmin()) {
                $cars->where('user_id', $request->user);
            }

            $cars = $cars->paginate(10);

            return $this->__response('success', [], $cars->toArray(), 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $car = Car::findOrFail($id);

            if(! auth()->user()->isAdmin()) {
                if($car->user_id != auth()->id()) {
                    return $this->__response('success', ['Nem engedélyezett művelet.'], [], 403);
                }
            }

            return $this->__response('success', [], $car->toArray(), 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), Car::getValidationRules());

            if($validator->fails()) {
                return $this->__response('error', $validator->getMessageBag()->toArray(), [], 400);
            }

            DB::beginTransaction();

            $car = Car::saveNew($request->all());

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 500);
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
            $car = Car::findOrFail($id);

            if(! auth()->user()->isAdmin()) {
                if($car->user_id != auth()->id()) {
                    return $this->__response('success', ['Nem engedélyezett művelet.'], [], 403);
                }
            }

            $validator = Validator::make($request->all(), array_merge(Car::getValidationRules(), [
                'license' => [
                    'required',
                    'max:191',
                    Rule::unique('cars')->ignore($car->id)
                ]
            ]));

            if($validator->fails()) {
                return $this->__response('error', $validator->getMessageBag()->toArray(), [], 400);
            }

            DB::beginTransaction();

            $car->updateItem($request->all());

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 500);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $car = Car::findOrFail($id);

            if(! auth()->user()->isAdmin()) {
                if($car->user_id != auth()->id()) {
                    return $this->__response('success', ['Nem engedélyezett művelet.'], [], 403);
                }
            }

            DB::beginTransaction();

            $car->delete();

            DB::commit();

            return $this->__response('success', [], [], 200);
        } catch (\Exception $e) {
            $this->__log($e);

            return $this->__response([], ['message' => $e->getMessage()], [], 500);
        }
    }
}
