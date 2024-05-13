<?php

// セッションの値を全て取得
$data = session()->all();
$data_len = count($data);

if(session()->get('email') != null){
    $email = session()->get('email');
    echo "【".$email."】";
}