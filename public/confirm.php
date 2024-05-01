<?php
    require './vendor/autoload.php';

    // PHPMailerクラスを使用
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $phpmailer = new PHPMailer(true);               // PHPMailerのインスタンスを作成。trueを渡すことでexceptionsが有効になります。
    $phpmailer->isSMTP();                           // SMTPを使用してメールを送信する設定にします。
    // $phpmailer->SMTPDebug = SMTP::DEBUG_LOWLEVEL;   // SMTPのデバッグ情報を出力するための設定。デバッグレベルは低いものに設定。
    $phpmailer->SMTPAuth   = true;                  // SMTP認証を有効にします。
    $phpmailer->Host       = 'xxx.example.com';     // SMTPサーバーのホスト名やIPアドレスを設定。
    $phpmailer->SMTPSecure = 'tls';                 // セキュリティのためのプロトコルを設定（'tls'または'ssl'）。
    $phpmailer->Port       = '587';                 // SMTPサーバーのポート番号を設定。通常は587（TLSの場合）や465（SSLの場合）。
    $phpmailer->Username = 'your_email@example.com';// SMTP認証のためのユーザー名（通常はメールアドレス）を設定。
    $phpmailer->Password = 'your_password';         // SMTP認証のためのパスワードを設定。

    $phpmailer->CharSet = 'UTF-8';                  // メールの文字エンコーディングを'UTF-8'に設定します。
    $phpmailer->setFrom('sender@example.com', '送信者の名前');      // 送信者のメールアドレスと名前を設定します。
    $phpmailer->addAddress('receiver@example.com', '受信者の名前'); // 受信者のメールアドレスと名前を設定します。
    $phpmailer->Subject = '件名';                   // メールの件名を設定します。
    $phpmailer->Body    = '本文内容';               // メールの本文を設定します。

    $phpmailer->send();
?>