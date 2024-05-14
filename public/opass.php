<?php

session_start();

$opass = $_POST['opass'];

$_SESSION['opass'] = $opass;

header("Location:/onetime_passmail");