<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TopPagesController extends Controller
{
    //
    public static function index(){
        return view('top');
    }
}
