<?php

namespace App\Http\Controllers;

use App\Mail\SendTestMail;
use App\Mail\SendOnepass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\WelcomeEmail;

class MailSendController extends Controller
{
    public function send(){
        session_start();
        Mail::send(new SendTestMail());
    }

    public function opass_send(){
        session_start();
        Mail::send(new SendOnepass());
    }
}