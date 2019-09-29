<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/28
 * Time: 11:47
 */

namespace Data;

require_once '../Data/Email.php';

class EmailHelper extends Email
{
    public static function SendMail($address,$subject,$body)
    {
        // Setting mailer
        $mail = Email::Mail();

        // Email Settings
        $mail->isHTML(true);
        $mail->setFrom(Email::sentFromAccount(),"PMS");
        $mail->addAddress($address);
        $mail->Subject = $subject;
        $mail->Body = $body;

        if($mail->send())
            $response = true;
        else
            $response = $mail->ErrorInfo;

        return $response;
    }
}
