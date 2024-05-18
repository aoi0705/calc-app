<?php

use App\Http\Controllers\TopPagesController;
use App\Http\Controllers\ModalController;
use App\Http\Controllers\MailableController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailSendController;

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', function () {
    return view('top');
});

Route::get('/WhoWeAre', function () {
    return view('WhoWeAre');
});

Route::get('/Profile', function () {
    return view('Profile');
});

Route::get('/future_calculation', function () {
    return view('future_calculation');
});

Route::get('/future_calculation2', function () {
    return view('future_calculation2');
});

Route::get('/future_calculation3', function () {
    return view('future_calculation3');
});


Route::get('/privacy_policy', function () {
    return view('privacy_policy');
});

Route::get('/mail', [MailSendController::class, 'send']);

Route::get('/result_screen', function () {
    return view('result_screen');
});


Route::get('/onetime_passmail', [MailSendController::class, 'opass_send']);

Route::get('/onetime_pass_flash',[MailSendController::class, 'opass_flash']);

//Route::get('/privacy_policy', [ModalController::class, 'privacy_policy']);
Route::get('/modal', [ModalController::class, 'modal']);


//Route::get('/', 'TopPageController@show');
//Route::resource('/', TopPagesController::index());
