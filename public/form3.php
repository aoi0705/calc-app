<?php

session_start();

$myhomebuy = $_POST['myhomebuy'];
$estate = $_POST['estate'];
$firstestate = $_POST['firstestate'];
$firstrentalincome = $_POST['firstrentalincome'];
$secondestate = $_POST['secondestate'];
$secondrentalincome = $_POST['secondrentalincome'];
$thirdestate = $_POST['thirdestate'];
$thirdrentalincome = $_POST['thirdrentalincome'];
$fourestate = $_POST['fourestate'];
$fourrentalincome = $_POST['fourrentalincome'];
$fiveestate = $_POST['fiveestate'];
$fiverentalincome = $_POST['fiverentalincome'];
$sixestate = $_POST['sixestate'];
$sixrentalincome = $_POST['sixrentalincome'];
$sevenestate = $_POST['sevenestate'];
$sevenrentalincome = $_POST['sevenrentalincome'];
$eightestate = $_POST['eightestate'];
$eightrentalincome = $_POST['eightrentalincome'];
$nineestate = $_POST['nineestate'];
$ninerentalincome = $_POST['ninerentalincome'];
$tenestate = $_POST['tenestate'];
$tenrentalincome = $_POST['tenrentalincome'];
$savingsbalance = $_POST['savingsbalance'];
$lastEducationalinsurance = $_POST['lastEducationalinsurance'];
$trip = $_POST['trip'];
$otherexpense = $_POST['otherexpense'];
$startwark = $_POST['startwark'];
$Startingsalary = $_POST['Startingsalary'];
$Estimatedannualincome = $_POST['Estimatedannualincome'];
$yourSeverancepayinput = $_POST['yourSeverancepayinput'];
$spousestartwork = $_POST['spousestartwork'];
$spouseStartingsalary = $_POST['spouseStartingsalary'];
$spouseEstimatedannualincome = $_POST['spouseEstimatedannualincome'];
$yourpartnerSeverancepayinput = $_POST['yourpartnerSeverancepayinput'];

$firstprimaryschool = $_POST['firstprimaryschool'];
$firstjuniorhighschool = $_POST['firstjuniorhighschool'];
$firsthighschool = $_POST['firsthighschool'];
$firstuniversity = $_POST['firstuniversity'];

$secondprimaryschool = $_POST['secondprimaryschool'];
$secondjuniorhighschool = $_POST['secondjuniorhighschool'];
$secondhighschool = $_POST['secondhighschool'];
$seconduniversity = $_POST['seconduniversity'];

$thirdprimaryschool = $_POST['thirdprimaryschool'];
$thirdjuniorhighschool = $_POST['thirdjuniorhighschool'];
$thirdhighschool = $_POST['thirdhighschool'];
$thirduniversity = $_POST['thirduniversity'];

$fourprimaryschool = $_POST['fourprimaryschool'];
$fourjuniorhighschool = $_POST['fourjuniorhighschool'];
$fourhighschool = $_POST['fourhighschool'];
$fouruniversity = $_POST['fouruniversity'];

$fiveprimaryschool = $_POST['fiveprimaryschool'];
$fivejuniorhighschool = $_POST['fivejuniorhighschool'];
$fivehighschool = $_POST['fivehighschool'];
$fiveuniversity = $_POST['fiveuniversity'];

$sixprimaryschool = $_POST['sixprimaryschool'];
$sixjuniorhighschool = $_POST['sixjuniorhighschool'];
$sixhighschool = $_POST['sixhighschool'];
$sixuniversity = $_POST['sixuniversity'];

$sevenprimaryschool = $_POST['sevenprimaryschool'];
$sevenjuniorhighschool = $_POST['sevenjuniorhighschool'];
$sevenhighschool = $_POST['sevenhighschool'];
$sevenuniversity = $_POST['sevenuniversity'];

$eightprimaryschool = $_POST['eightprimaryschool'];
$eightjuniorhighschool = $_POST['eightjuniorhighschool'];
$eighthighschool = $_POST['eighthighschool'];
$eightuniversity = $_POST['eightuniversity'];

$nineprimaryschool = $_POST['nineprimaryschool'];
$ninejuniorhighschool = $_POST['ninejuniorhighschool'];
$ninehighschool = $_POST['ninehighschool'];
$nineuniversity = $_POST['nineuniversity'];

$tenprimaryschool = $_POST['tenprimaryschool'];
$tenjuniorhighschool = $_POST['tenjuniorhighschool'];
$tenhighschool = $_POST['tenhighschool'];
$tenuniversity = $_POST['tenuniversity'];


$_SESSION['myhomebuy'] = $myhomebuy;
$_SESSION['estate'] = $estate;
$_SESSION['firstestate'] = $firstestate;
$_SESSION['firstrentalincome'] = $firstrentalincome;
$_SESSION['secondestate'] = $secondestate;
$_SESSION['secondrentalincome'] = $secondrentalincome;
$_SESSION['thirdestate'] = $thirdestate;
$_SESSION['thirdrentalincome'] = $thirdrentalincome;
$_SESSION['fourestate'] = $fourestate;
$_SESSION['fourrentalincome'] = $fourrentalincome;
$_SESSION['fiveestate'] = $fiveestate;
$_SESSION['fiverentalincome'] = $fiverentalincome;
$_SESSION['sixestate'] = $sixestate;
$_SESSION['sixrentalincome'] = $sixrentalincome;
$_SESSION['sevenestate'] = $sevenestate;
$_SESSION['sevenrentalincome'] = $sevenrentalincome;
$_SESSION['eightestate'] = $eightestate;
$_SESSION['eightrentalincome'] = $eightrentalincome;
$_SESSION['nineestate'] = $nineestate;
$_SESSION['ninerentalincome'] = $ninerentalincome;
$_SESSION['tenestate'] = $tenestate;
$_SESSION['tenrentalincome'] = $tenrentalincome;

$_SESSION['savingsbalance'] = $savingsbalance;
$_SESSION['lastEducationalinsurance'] = $lastEducationalinsurance;
$_SESSION['trip'] = $trip;
$_SESSION['otherexpense'] = $otherexpense;
$_SESSION['startwark'] = $startwark;
$_SESSION['Startingsalary'] = $Startingsalary;
$_SESSION['Estimatedannualincome'] = $Estimatedannualincome;
$_SESSION['yourSeverancepayinput'] = $yourSeverancepayinput;
$_SESSION['Severancepay'] = $Severancepay;
$_SESSION['spousestartwork'] = $spousestartwork;
$_SESSION['spouseStartingsalary'] = $spouseStartingsalary;
$_SESSION['yourpartnerSeverancepayinput'] = $yourpartnerSeverancepayinput;

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

$_SESSION['thirdprimaryschool'] = $thirdprimaryschool;
$_SESSION['thirdjuniorhighschool'] = $thirdjuniorhighschool;
$_SESSION['thirdhighschool'] = $thirdhighschool;
$_SESSION['thirduniversity'] = $thirduniversity;

$_SESSION['fourprimaryschool'] = $fourprimaryschool;
$_SESSION['fourjuniorhighschool'] = $fourjuniorhighschool;
$_SESSION['fourhighschool'] = $fourhighschool;
$_SESSION['fouruniversity'] = $fouruniversity;

$_SESSION['fiveprimaryschool'] = $fiveprimaryschool;
$_SESSION['fivejuniorhighschool'] = $fivejuniorhighschool;
$_SESSION['fivehighschool'] = $fivehighschool;
$_SESSION['fiveuniversity'] = $fiveuniversity;

$_SESSION['sixprimaryschool'] = $sixprimaryschool;
$_SESSION['sixjuniorhighschool'] = $sixjuniorhighschool;
$_SESSION['sixhighschool'] = $sixhighschool;
$_SESSION['sixuniversity'] = $sixuniversity;

$_SESSION['sevenprimaryschool'] = $sevenprimaryschool;
$_SESSION['sevenjuniorhighschool'] = $sevenjuniorhighschool;
$_SESSION['sevenhighschool'] = $sevenhighschool;
$_SESSION['sevenuniversity'] = $sevenuniversity;

$_SESSION['eightprimaryschool'] = $eightprimaryschool;
$_SESSION['eightjuniorhighschool'] = $eightjuniorhighschool;
$_SESSION['eighthighschool'] = $eighthighschool;
$_SESSION['eightuniversity'] = $eightuniversity;

$_SESSION['nineprimaryschool'] = $nineprimaryschool;
$_SESSION['ninejuniorhighschool'] = $ninejuniorhighschool;
$_SESSION['ninehighschool'] = $ninehighschool;
$_SESSION['nineuniversity'] = $nineuniversity;

$_SESSION['tenprimaryschool'] = $tenprimaryschool;
$_SESSION['tenjuniorhighschool'] = $tenjuniorhighschool;
$_SESSION['tenhighschool'] = $tenhighschool;
$_SESSION['tenuniversity'] = $tenuniversity;

header("Location:/mail");

// header('Location:/result_screen');