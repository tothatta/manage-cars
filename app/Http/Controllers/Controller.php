<?php

namespace App\Http\Controllers;

use App\Traits\JsonResponses;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, JsonResponses;

    public function __log(\Exception $e)
    {
        Log::error($e->getMessage() . " " . $e->getFile() . " " . $e->getLine());
    }
}
