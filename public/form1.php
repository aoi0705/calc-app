<?php

session_start();

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

header('Location:/future_calculation2');