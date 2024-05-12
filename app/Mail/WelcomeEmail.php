<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
				return $this->to('kuwaaoi0@gmail.com')             // 宛先
                    ->cc('x.eigyou0705@gmail.com')             // CC
                    ->bcc('kuwaaoi0@gmail.com')            // BCC
                    ->subject('会員登録が完了しました')     // 件名
                    ->view('mail.WelcomeEmail')         // 本文（HTMLメール）
                    ->text('mail.WelcomeEmail_text');   // 本文（プレーンテキストメール）
    }

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Welcome Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
