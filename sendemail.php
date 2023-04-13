<?php
if(isset($_POST['email'])) {

    // EDIT THE FOLLOWING LINES BELOW TO YOUR OWN EMAIL ADDRESS AND SMTP SETTINGS
    $email_to = "fitup.soporte@gmail.com";
    $email_subject = "Contacto Fit Up";
    $smtp_host = 'smtp.gmail.com';
    $smtp_port = 587;
    $smtp_user = 'youremail@gmail.com';
    $smtp_password = 'yourpassword';

    function died($error) {
        // your error code can go here
        echo "Lo sentimos mucho, pero se encontraron errores con el formulario que envió. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('Lo sentimos pero parece que hubo un error.');       
    }

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/';
    if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }
    $string_exp = "/^[A-Za-z .'-]+$/";
    if(!preg_match($string_exp,$name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br />';
    }
    if(strlen($message) < 2) {
        $error_message .= 'The message you entered do not appear to be valid.<br />';
    }
    if(strlen($error_message) > 0) {
        died($error_message);
    }
    $email_message = "Form details below.\n\n";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".
