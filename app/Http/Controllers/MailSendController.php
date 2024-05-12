<?php

namespace App\Http\Controllers;

use App\Mail\SendTestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\WelcomeEmail;

class MailSendController extends Controller
{
    public function send(){
        Mail::send(new SendTestMail());
        }
}