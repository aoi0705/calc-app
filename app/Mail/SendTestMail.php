<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendTestMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        header('Location:/result_screen');

        return $this->view('email.text')
                ->to('kuwaaoi0@gmail.com','桑村蒼生')
                ->from('kuwaaoi0@gmail.com','株式会社wealth journey navigators')
                ->subject('テストメールです。');
    }
}