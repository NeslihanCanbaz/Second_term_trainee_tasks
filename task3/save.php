<?php
// Get the data sent from the form
$firstName = trim($_POST['firstName']);
$lastName = trim($_POST['lastName']);
$message = trim($_POST['message']);

// Clean the data to prevent HTML/script injection
$firstName = htmlspecialchars($firstName);
$lastName = htmlspecialchars($lastName);
$message = htmlspecialchars($message);

// Build the line to save
$newLine = $firstName . " " . $lastName . ": " . $message . "\n";

// Append the line to messages.txt
file_put_contents('messages.txt', $newLine, FILE_APPEND);

// Let the user know it worked
echo "Thank you! Your message has been saved.";
echo '<meta http-equiv="refresh" content="2;url=form.html">';
?>