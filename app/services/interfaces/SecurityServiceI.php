<?php


interface SecurityServiceI{
    public function login(AppUser $user);
    public function register(AppUser $user);

    public function checkForRole($userId);
}


?>