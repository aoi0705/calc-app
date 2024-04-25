<?php

$name = $_POST['name'];
$nickname = $_POST['nickname'];
$birthday = $_POST['name'];
$postnumber = $_POST['nickname'];
$job = $_POST['name'];
$spouse = $_POST['nickname'];
$spousebirthday = $_POST['nickname'];
$spousejob = $_POST['name'];
$children = $_POST['nickname'];
$numberchildre = $_POST['nickname'];
$firstbirthday = $_POST['name'];
$firstmale = $_POST['nickname'];

$secondbirthday = $_POST['name'];
$secondmale = $_POST['nickname'];
$thirdbirthday = $_POST['name'];
$thirdmale = $_POST['nickname'];

$_SESSION['name'] = $name;
$_SESSION['nickname'] = $nickname;
$_SESSION['birthday'] = $birthday;
$_SESSION['postnumber'] = $postnumber;
$_SESSION['job'] = $job;
$_SESSION['spouse'] = $spouse;
$_SESSION['spousebirthday'] = $spousebirthday;
$_SESSION['spousejob'] = $spousejob;
$_SESSION['children'] = $children;
$_SESSION['numberchildre'] = $numberchildre;
$_SESSION['firstbirthday'] = $firstbirthday;
$_SESSION['firstmale'] = $firstmale;
$_SESSION['secondbirthday'] = $secondbirthday;
$_SESSION['secondmale'] = $secondmale;
$_SESSION['thirdbirthday'] = $thirdbirthday;
$_SESSION['thirdmale'] = $thirdmale;

header('Location:/future_calculation2');