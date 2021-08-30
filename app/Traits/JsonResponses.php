<?php

namespace App\Traits;

trait JsonResponses
{
    /**
     * @param $status
     * @param array $messages
     * @param array $data
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function __response($status, array $messages, array $data = [], $statusCode = 200)
    {
        return response()
            ->json([
                'status'    => $status,
                'data'      => $data,
                'messages'  => $messages
            ],
                $statusCode);
    }

}
