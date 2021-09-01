<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * @return bool
     */
    public function index()
    {
        return auth()->user()->profile === 'admin';
    }

    /**
     * @return bool
     */
    public function show()
    {
        return auth()->user()->profile === 'admin';
    }

    /**
     * @return bool
     */
    public function update()
    {
        return auth()->user()->profile === 'admin';
    }
}
