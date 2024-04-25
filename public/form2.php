<?php

$annualincome = $_POST['annual-income'];
$bonus = $_POST['bonus'];
$spouseannualincome = $_POST['spouse-annual-income'];
$spousebonus = $_POST['spouse-bonus'];
$foodexpenses = $_POST['food-expenses'];
$livingcost = $_POST['living-cost'];
$beautybill = $_POST['beauty-bill'];
$houseclass = $_POST['house-class'];
$housecost = $_POST['house-cost'];
$managecost = $_POST['manage-cost'];
$bill = $_POST['bill'];
$pcbill = $_POST['pc-bill'];

$phonebill = $_POST['phone-bill'];
$lone = $_POST['lone'];
$Insurancebill = $_POST['Insurance-bill'];
$Educationalinsurance = $_POST['Educational-insurance'];

$educationexpenses = $_POST['education-expenses'];
$medicalinsurance = $_POST['medical-insurance'];
$lifeinsurance = $_POST['life-insurance'];
$EstateInvestment = $_POST['Estate-Investment'];

$assetmanagement = $_POST['asset-management'];
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