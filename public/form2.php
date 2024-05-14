<?php

session_start();

$annualincome = $_POST['annualincome'];
$bonus = $_POST['bonus'];
$spouseannualincome = $_POST['spouseannualincome'];
$spousebonus = $_POST['spousebonus'];
$foodexpenses = $_POST['foodexpenses'];
$livingcost = $_POST['livingcost'];
$beautybill = $_POST['beautybill'];
$houseclass = $_POST['houseclass'];
$housecost = $_POST['housecost'];
$managecost = $_POST['managecost'];
$bill = $_POST['bill'];
$pcbill = $_POST['pcbill'];
$phonebill = $_POST['phonebill'];
$lone = $_POST['lone'];
$Insurancebill = $_POST['Insurancebill'];
$Educationalinsurance = $_POST['Educationalinsurance'];
$medicalinsurance = $_POST['medicalinsurance'];
$educationexpenses = $_POST['educationexpenses'];
$lifeinsurance = $_POST['lifeinsurance'];
$EstateInvestment = $_POST['EstateInvestment'];
$assetmanagement = $_POST['assetmanagement'];
$savings = $_POST['savings'];


$_SESSION['annualincome'] = $annualincome;
$_SESSION['bonus'] = $bonus;
$_SESSION['spouseannualincome'] = $spouseannualincome;
$_SESSION['spousebonus'] = $spousebonus;
$_SESSION['foodexpenses'] = $foodexpenses;
$_SESSION['livingcost'] = $livingcost;
$_SESSION['beautybill'] = $beautybill;
$_SESSION['houseclass'] = $houseclass;
$_SESSION['housecost'] = $housecost;
$_SESSION['managecost'] = $managecost;
$_SESSION['bill'] = $bill;
$_SESSION['pcbill'] = $pcbill;
$_SESSION['phonebill'] = $phonebill;
$_SESSION['lone'] = $lone;
$_SESSION['Insurancebill'] = $Insurancebill;
$_SESSION['Educationalinsurance'] = $Educationalinsurance;

$_SESSION['educationexpenses'] = $educationexpenses;
$_SESSION['medicalinsurance'] = $medicalinsurance;
$_SESSION['lifeinsurance'] = $lifeinsurance;
$_SESSION['EstateInvestment'] = $EstateInvestment;
$_SESSION['assetmanagement'] = $assetmanagement;
$_SESSION['savings'] = $savings;

header('Location:/future_calculation3');