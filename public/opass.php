<?php

session_start();

$opass = $_POST['opass'];
$email = $_POST['email'];

$_SESSION['opass'] = $opass;
$_SESSION['email'] = $email;


header("Location:/onetime_passmail");
