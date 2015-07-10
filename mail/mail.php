<?php
require 'class.phpmailer.php';

// Check for empty fields
if(empty($_POST['name'])  		  ||
   empty($_POST['email']) 		  ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email = $_POST['email'];

// Send mail using PHPMailer Class
$mail = new PHPMailer();
$mail->isSendmail();
$mail->setFrom("sender@server.com", "Sender");
$mail->addReplyTo("$email", "$name");
$mail->addAddress("me@server.com", "Receiver");
$mail->Subject = "Php Sample Test";
$mail->Body = "NAME: $name\n\nEMAIL: $email";
$mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
return $mail->send();

?>
