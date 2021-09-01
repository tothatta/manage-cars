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
        return auth()->user()->isAdmin();
    }

    /**
     * @return bool
     */
    public function show()
    {
        return auth()->user()->isAdmin();
    }

    /**
     * @return bool
     */
    public function update()
    {
        return auth()->user()->isAdmin();
    }

    /**
     * @return mixed
     */
    public function destroy()
    {
        return auth()->user()->isAdmin();
    }
}
