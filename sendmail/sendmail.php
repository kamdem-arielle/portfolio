<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
// $mail->CharSet = "UTF-8"
// $mail->setLanguage('en','phpmailer/language/')
$mail->isHTML(true)
echo "
<script>alert('dfhdjsf')</script>
"
echo "
console.log('sdfvkdshgfjdfds')
"
$mail->isSMTP()
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;

$mail->Username = 'kamdem.yarielle@gmail.com';
$mail->Password = 'hszhwziqmozxzdnm';
$mail->SMTPSecure ='ssl'; //Microsoft
$mail->Port = 465;

 //Recipients
 $mail->setFrom('kamdem.yarielle@gmail.com','$_POST');
 $mail->addAddress($_POST['email']);

 $mail->Subject = 'E-mail greetings from portfolio';

 $body = ''

 if (trim(!empty($_POST['email']))) {
    $body = "<p>E-mail : <strong>".$_POST['mail']."</strong></p>"
 }

 if (trim(!empty($_POST['message']))) {
    $body = "<p>Message : <strong>".$_POST['message']."</strong></p>"
 }


 $mail->Body = $body;
    echo "
    <script>alert('dfhdjsf')</script>
    "
 $mail->send();

 //$mail->smtpClose();


// //Microsoft
// $host = "smtp.office365.com";
// $port = "587";
// $account = "noreply@pether.io";
// $password = "Naw54116";

// $from = "noreply@pether.io";
// $fromName = "PetherInsure";
// $to    = $_POST['to'];
// $toName  = $_POST['toName'];
// $subject  = $_POST['subject'];
// $msg  = $_POST['msg'];

// //Instantiation and passing `true` enables exceptions
// $mail = new PHPMailer(true);

// try {
//     // Server settings
//     // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
//     $mail->IsSMTP();
//     $mail->Host = $host;
//     $mail->SMTPAuth = true;
//     $mail->Port = $port;
//     $mail->Username = $account;
//     $mail->Password = $password;
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; //Microsoft
//     // $mail->SMTPSecure = "ssl"; //Google

//     //Recipients
//     $mail->setFrom($from, $fromName);
//     $mail->addAddress($to, $toName);

//     //Content
//     $mail->isHTML(true);
//     $mail->Subject = $subject;
//     $mail->Body = $msg;

//     $mail->send();
//     echo json_encode('Message has been sent');
// } catch (Exception $e) {
//     echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
// }

?>