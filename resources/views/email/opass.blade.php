<?php

// セッションの値を全て取得
$data = session()->all();
$data_len = count($data);

echo 'ワンタイムパスワード　'.$_SESSION['opass'].nl2br("\n");

echo nl2br("\n");

echo '未来家計簿の入力ありがとうございます。'.nl2br("\n");
echo 'ご本人様確認のため、上記のワンタイムパスワードを画面に入力ください。'.nl2br("\n");
echo 'ワンタイムパスワードの有効期限は10分です。'.nl2br("\n");

echo nl2br("\n");

echo '※本メールにはご返信いただけません。'.nl2br("\n");

echo nl2br("\n");

echo '株式会社Wealth Journey Navigators'.nl2br("\n");
echo '未来家計簿　運営事務局'.nl2br("\n");

echo 'https://wealthjourneynavigators.jp/'.nl2br("\n");