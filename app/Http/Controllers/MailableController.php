<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;                   //追記
use App\Mail\ContactReply; //追記

class MailableController extends Controller
{
    //以下追記
    public function index() //コンタクトフォームの表示
    {
        return view('result_screen');
    }

    public function send(Request $request)  //メールの自動送信設定
    {
        Mail::to('x.eigyou0705@gmail.com')
              ->send(new ContactReply());

        return view('result_screen');
    }
}