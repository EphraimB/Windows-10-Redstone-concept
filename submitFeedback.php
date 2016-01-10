<?php
if($_POST["submitFeedback"])
{
    $recipient = "emb16@outlook.com";
    $subject = "Windows 10 Redstone concept feedback";
    $senderEmail = $_POST["senderEmail"];
    $feedbackTitle = $_POST["feedbackTitle"];
    $feedbackBody = $_POST["feedbackBody"];

    $mailBody = "Email: $senderEmail\n\n\n$feedbackTitle\n$feedbackBody";

    mail($recipient, $subject, $mailBody, "From: <$senderEmail>");

    $thankYou = "<p>Thank you for your feedback!</p>";
}
?>