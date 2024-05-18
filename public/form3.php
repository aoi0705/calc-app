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

// ここから下は1、2ページ目の処理

$email = $_POST['email'];
$nickname = $_POST['nickname'];
$birthday = $_POST['birthday'];
$postnumber = $_POST['post-number'];
$job = $_POST['job'];
$yourpartner = $_POST['yourpartner'];
$spousebirthday = $_POST['spouse-birthday'];
$spousejob = $_POST['spouse-job'];
$children = $_POST['children'];
$numberchildren = $_POST['number-children'];
$firstbirthday = $_POST['first-birthday'];
$firstmale = $_POST['first-male'];
$secondbirthday = $_POST['second-birthday'];
$secondmale = $_POST['second-male'];
$thirdbirthday = $_POST['third-birthday'];
$thirdmale = $_POST['third-male'];
$fourbirthday = $_POST['four-birthday'];
$fourmale = $_POST['four-male'];
$fivebirthday = $_POST['five-birthday'];
$fivemale = $_POST['five-male'];
$sixbirthday = $_POST['six-birthday'];
$sixmale = $_POST['six-male'];
$sevenbirthday = $_POST['seven-birthday'];
$sevenmale = $_POST['seven-male'];
$eightbirthday = $_POST['eight-birthday'];
$eightmale = $_POST['eight-male'];
$ninebirthday = $_POST['nine-birthday'];
$ninemale = $_POST['nine-male'];
$tenbirthday = $_POST['ten-birthday'];
$tenmale = $_POST['ten-male'];


$_SESSION['email'] = $email;
$_SESSION['nickname'] = $nickname;
$_SESSION['birthday'] = $birthday;
$_SESSION['postnumber'] = $postnumber;
$_SESSION['job'] = $job;
$_SESSION['yourpartner'] = $yourpartner;
$_SESSION['spousebirthday'] = $spousebirthday;
$_SESSION['spousejob'] = $spousejob;
$_SESSION['children'] = $children;
$_SESSION['numberchildren'] = $numberchildren;
$_SESSION['firstbirthday'] = $firstbirthday;
$_SESSION['firstmale'] = $firstmale;
$_SESSION['secondbirthday'] = $secondbirthday;
$_SESSION['secondmale'] = $secondmale;
$_SESSION['thirdbirthday'] = $thirdbirthday;
$_SESSION['thirdmale'] = $thirdmale;
$_SESSION['fourbirthday'] = $fourbirthday;
$_SESSION['fourdmale'] = $fourdmale;
$_SESSION['fivebirthday'] = $fivebirthday;
$_SESSION['fivemale'] = $fivemale;
$_SESSION['sixbirthday'] = $sixbirthday;
$_SESSION['sixmale'] = $sixmale;
$_SESSION['sevenbirthday'] = $sevenbirthday;
$_SESSION['sevenmale'] = $sevenmale;
$_SESSION['eightbirthday'] = $eightbirthday;
$_SESSION['eightmale'] = $eightmale;
$_SESSION['ninebirthday'] = $ninebirthday;
$_SESSION['ninemale'] = $ninemale;
$_SESSION['tenbirthday'] = $tenbirthday;
$_SESSION['tenmale'] = $tenmale;


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


header("Location:/mail");

// header('Location:/result_screen');