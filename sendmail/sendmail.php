<?php

header("Access-Control-Allow-Origin: *");
// Allow the POST method
header("Access-Control-Allow-Methods: POST");
// Set the Content-Type header to allow JSON responses
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
// $mail->CharSet = "UTF-8"
// $mail->setLanguage('en','phpmailer/language/')
$mail->isHTML(true) ;
$mail->isSMTP() ;
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;

$mail->Username = 'kamdem.yarielle@gmail.com';
$mail->Password = 'hszhwziqmozxzdnm';
$mail->SMTPSecure ='ssl';
$mail->Port = 465;

 //Recipients
 $mail->setFrom('kamdem.yarielle@gmail.com','Portfolio mail');
 $mail->addAddress('kamdem.yarielle@gmail.com');

 $mail->Subject = 'E-mail greetings from portfolio';

 $body = '';

 if (trim(!empty($_POST['email']))) {
    $body .= "<p>E-mail : <strong>".$_POST['email']."</strong></p>"; 
 }
 if (trim(!empty($_POST['name']))) {
   $body .= "<p>Name : <strong>".$_POST['name']."</strong></p>"; 
}

 if (trim(!empty($_POST['message']))) {
    $body .= "<p>Message : <strong>".$_POST['message']."</strong></p>";
 }

 $mail->Body = $body;

 $mail->send();

 $mail->smtpClose();



/

?>