<?php

$myhomebuy = $_POST['myhome-buy'];
$estate = $_POST['estate'];
$firstestate = $_POST['first-estate'];
$firstrentalincome = $_POST['first-rental-income'];
$secondestate = $_POST['second-estate'];
$secondrentalincome = $_POST['second-rental-income'];
$savingsbalance = $_POST['savings-balance'];
$lastEducationalinsurance = $_POST['last-Educational-insurance'];
$trip = $_POST['trip'];
$otherexpense = $_POST['other-expense'];
$startwork = $_POST['start-work'];
$Startingsalary = $_POST['Starting-salary'];

$Estimatedannualincome = $_POST['Estimated-annual-income'];
$Severancepay = $_POST['Severance-pay'];
$spousestartwork = $_POST['spouse-start-work'];
$spouseStartingsalary = $_POST['spouse-Starting-salary'];

$spouseEstimatedannualincome = $_POST['spouse-Estimated-annual-income'];
$spouseSeverancepay = $_POST['spouse-Severance-pay'];
$firstprimaryschool = $_POST['first-primary-school'];
$firstjuniorhighschool = $_POST['first-junior-high-school'];
$firsthighschool = $_POST['first-high-school'];
$firstuniversity = $_POST['first-university'];

$secondprimaryschool = $_POST['second-primary-school'];
$secondjuniorhighschool = $_POST['second-junior-high-school'];
$secondhighschool = $_POST['second-high-school'];
$seconduniversity = $_POST['second-university'];

$thirdprimaryschool = $_POST['third-primary-school'];
$thirdjuniorhighschool = $_POST['third-junior-high-school'];
$thirdhighschool = $_POST['third-high-school'];
$thirduniversity = $_POST['third-university'];


$_SESSION['myhomebuy'] = $myhomebuy;
$_SESSION['estate'] = $estate;
$_SESSION['firstestate'] = $firstestate;
$_SESSION['firstrentalincome'] = $firstrentalincome;
$_SESSION['secondestate'] = $secondestate;
$_SESSION['secondrentalincome'] = $secondrentalincome;
$_SESSION['savingsbalance'] = $savingsbalance;
$_SESSION['lastEducationalinsurance'] = $lastEducationalinsurance;
$_SESSION['trip'] = $trip;
$_SESSION['otherexpense'] = $otherexpense;
$_SESSION['startwork'] = $startwork;
$_SESSION['Startingsalary'] = $Startingsalary;
$_SESSION['Estimatedannualincome'] = $Estimatedannualincome;
$_SESSION['Severancepay'] = $Severancepay;
$_SESSION['spousestartwork'] = $spousestartwork;
$_SESSION['spouseStartingsalary'] = $spouseStartingsalary;

$_SESSION['spouseEstimatedannualincome'] = $spouseEstimatedannualincome;
$_SESSION['spouseSeverancepay'] = $spouseSeverancepay;
$_SESSION['firstprimaryschool'] = $firstprimaryschool;
$_SESSION['firstjuniorhighschool'] = $firstjuniorhighschool;
$_SESSION['firsthighschool'] = $firsthighschool;
$_SESSION['firstuniversity'] = $firstuniversity;

$_SESSION['secondprimaryschool'] = $secondprimaryschool;
$_SESSION['secondjuniorhighschool'] = $secondjuniorhighschool;
$_SESSION['secondhighschool'] = $secondhighschool;
$_SESSION['seconduniversity'] = $seconduniversity;

$_SESSION['thirdprimaryschool'] = $firstprimaryschool;
$_SESSION['thirdjuniorhighschool'] = $firstjuniorhighschool;
$_SESSION['thirdhighschool'] = $firsthighschool;
$_SESSION['thirduniversity'] = $firstuniversity;

header('Location:/result_screen');