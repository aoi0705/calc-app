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
        return $this->view('email.text')
                ->to($_SESSION['email'])
                ->cc('info@wealthjourneynavi.com','株式会社wealth journey navigators')
                ->from('info@wealthjourneynavi.com','株式会社wealth journey navigators')
                ->subject('入力完了のご連絡');
    }
}