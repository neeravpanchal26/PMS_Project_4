<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/28
 * Time: 11:40
 */

namespace Data;

use PHPMailer\PHPMailer\PHPMailer;

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";


class Email
{
    // Email credentials
    private static $userName = "vehicleadsystem@gmail.com";
    private static $passWord = 'projectvas123';


    protected static function Mail()
    {
        // Setting mailer
        $mail = new PHPMailer();

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = self::$userName;
        $mail->Password = self::$passWord;
        $mail->Port = 465; //587
        $mail->SMTPSecure = "ssl";

        return $mail;
    }

    protected static function sentFromAccount()
    {
        return self::$userName;
    }
}
