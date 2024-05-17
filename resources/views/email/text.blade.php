<?php

// セッションの値を全て取得
$data = session()->all();
$data_len = count($data);

echo $_SESSION['nickname'].' 様'.nl2br("\n");

echo nl2br("\n");

echo 'ご入力ありがとうございます。'.nl2br("\n");
echo '現在、サービスの不具合を修正中です。'.nl2br("\n");
echo 'ご迷惑をおかけし、申し訳ございません。'.nl2br("\n");
echo '入力いただいた内容については、担当FPにてシミュレーションさせていただき、改めてご連絡させていただきます。'.nl2br("\n");
echo 'よろしくお願いいたします。'.nl2br("\n").nl2br("\n");

echo '【生年月日】'.nl2br("\n");
echo $_SESSION['birthday'].nl2br("\n");
echo '【郵便番号】'.nl2br("\n");
echo $_SESSION['postnumber'].nl2br("\n");
echo '【職業】'.nl2br("\n");
echo $_SESSION['job'].nl2br("\n");
echo '【配偶者・パートナー】'.nl2br("\n");
echo $_SESSION['yourpartner'].nl2br("\n");

if($_SESSION['yourpartner'] == "いる"){
    echo '【配偶者・パートナーの生年月日】'.nl2br("\n");
    echo $_SESSION['spousebirthday'].nl2br("\n");
    echo '【配偶者・パートナーの職業】'.nl2br("\n");
    echo $_SESSION['spousejob'].nl2br("\n");
}

echo '【子どもの有無】'.nl2br("\n");
echo $_SESSION['children'].nl2br("\n");

if($_SESSION['children'] == 'いる'){
    echo '【子どもの人数】'.nl2br("\n");
    if($_SESSION['numberchildren'] == "one"){
        echo '1人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "two"){
        echo '2人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "three"){
        echo '3人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "four"){
        echo '4人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "five"){
        echo '5人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "six"){
        echo '6人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "seven"){
        echo '7人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "eight"){
        echo '8人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "nine"){
        echo '9人'.nl2br("\n");
    }
    else if($_SESSION['numberchildren'] == "ten"){
        echo '10人'.nl2br("\n");
    }
    

    if($_SESSION['firstbirthday'] != null){
        echo '【1人目の生年月日】'.nl2br("\n");
        echo $_SESSION['firstbirthday'].nl2br("\n");
        echo '【1人目の性別】'.nl2br("\n");
        echo $_SESSION['firstmale'].nl2br("\n");
    }
    if($_SESSION['secondbirthday'] != null){
        echo '【2人目の生年月日】'.nl2br("\n");
        echo $_SESSION['secondbirthday'].nl2br("\n");
        echo '【2人目の性別】'.nl2br("\n");
        echo $_SESSION['secondmale'].nl2br("\n");
    }
    if($_SESSION['thirdbirthday'] != null){
        echo '【3人目の生年月日】'.nl2br("\n");
        echo $_SESSION['thirdbirthday'].nl2br("\n");
        echo '【3人目の性別】'.nl2br("\n");
        echo $_SESSION['thirdmale'].nl2br("\n");
    }
    if($_SESSION['fourbirthday'] != null){
        echo '【4人目の生年月日】'.nl2br("\n");
        echo $_SESSION['fourbirthday'].nl2br("\n");
        echo '【4人目の性別】'.nl2br("\n");
        echo $_SESSION['fourdmale'].nl2br("\n");
    }
    if($_SESSION['fivebirthday'] != null){
        echo '【5人目の生年月日】'.nl2br("\n");
        echo $_SESSION['fivebirthday'].nl2br("\n");
        echo '【5人目の性別】'.nl2br("\n");
        echo $_SESSION['fivemale'].nl2br("\n");
    }
    if($_SESSION['sixbirthday'] != null){
        echo '【6人目の生年月日】'.nl2br("\n");
        echo $_SESSION['sixbirthday'].nl2br("\n");
        echo '【6人目の性別】'.nl2br("\n");
        echo $_SESSION['sixmale'].nl2br("\n");
    }
    if($_SESSION['sevenbirthday'] != null){
        echo '【7人目の生年月日】'.nl2br("\n");
        echo $_SESSION['sevenbirthday'].nl2br("\n");
        echo '【7人目の性別】'.nl2br("\n");
        echo $_SESSION['sevenmale'].nl2br("\n");
    }
    if($_SESSION['eightbirthday'] != null){
        echo '【8人目の生年月日】'.nl2br("\n");
        echo $_SESSION['eightbirthday'].nl2br("\n");
        echo '【8人目の性別】'.nl2br("\n");
        echo $_SESSION['eightmale'].nl2br("\n");
    }
    if($_SESSION['ninebirthday'] != null){
        echo '【9人目の生年月日】'.nl2br("\n");
        echo $_SESSION['ninebirthday'].nl2br("\n");
        echo '【9人目の性別】'.nl2br("\n");
        echo $_SESSION['ninemale'].nl2br("\n");
    }
    if($_SESSION['tenbirthday'] != null){
        echo '【10人目の生年月日】'.nl2br("\n");
        echo $_SESSION['tenbirthday'].nl2br("\n");
        echo '【10人目の性別】'.nl2br("\n");
        echo $_SESSION['tenmale'].nl2br("\n");
    }
}

echo nl2br("\n");

echo '【あなたの年収】'.nl2br("\n");
echo $_SESSION['annualincome'].nl2br("\n");
echo '【あなたのボーナス】'.nl2br("\n");
echo $_SESSION['bonus'].nl2br("\n");

if($_SESSION['yourpartner'] == "いる"){
    echo '【配偶者・パートナーの年収】'.nl2br("\n");
    echo $_SESSION['spouseannualincome'].nl2br("\n");
    echo '【配偶者・パートナーのボーナス】'.nl2br("\n");
    echo $_SESSION['spousebonus'].nl2br("\n");
}

echo '【毎月の食費】'.nl2br("\n");
echo $_SESSION['foodexpenses'].nl2br("\n");
echo '【毎月の日用品・雑貨代】'.nl2br("\n");
echo $_SESSION['livingcost'].nl2br("\n");
echo '【毎月の衣服・美容代】'.nl2br("\n");
echo $_SESSION['beautybill'].nl2br("\n");

echo '【住居区分】'.nl2br("\n");
if($_SESSION['houseclass'] == "myhouse"){
    echo '持ち家（マンション）'.nl2br("\n");
}
else if($_SESSION['houseclass'] == "apartment"){
    echo '持ち家（戸建て）'.nl2br("\n");
}
else if($_SESSION['houseclass'] == "rental"){
    echo '賃貸'.nl2br("\n");
}
echo '【毎月の住居費】'.nl2br("\n");
echo $_SESSION['housecost'].nl2br("\n");
if($_SESSION['managecost'] != null){
    echo '【毎月の住居の管理費】'.nl2br("\n");
    echo $_SESSION['managecost'].nl2br("\n");
}
echo '【毎月の水道・光熱費】'.nl2br("\n");
echo $_SESSION['bill'].nl2br("\n");
echo '【毎月の通信費（PC）】'.nl2br("\n");
echo $_SESSION['pcbill'].nl2br("\n");
echo '【毎月の通信費（スマホ等）】'.nl2br("\n");
echo $_SESSION['phonebill'].nl2br("\n");
echo '【毎月の自動車ローン/レンタカーシェア代】'.nl2br("\n");
echo $_SESSION['lone'].nl2br("\n");
echo '【毎月の自動車保険の保険料】'.nl2br("\n");
echo $_SESSION['Insurancebill'].nl2br("\n");

if($_SESSION['children'] == "いる"){
    echo '【毎月の学資保険の保険料】'.nl2br("\n");
    echo $_SESSION['Educationalinsurance'].nl2br("\n");
    echo '【毎月の教育費】'.nl2br("\n");
    echo $_SESSION['educationexpenses'].nl2br("\n");
}
echo '【毎月の医療保険の保険料】'.nl2br("\n");
echo $_SESSION['medicalinsurance'].nl2br("\n");
echo '【毎月の医療保険以外の生命保険の保険料】'.nl2br("\n");
echo $_SESSION['lifeinsurance'].nl2br("\n");
echo '【毎月の不動産投資の費用】'.nl2br("\n");
echo $_SESSION['EstateInvestment'].nl2br("\n");
echo '【毎月の資産運用（株式・債権・投資信託等）】'.nl2br("\n");
echo $_SESSION['assetmanagement'].nl2br("\n");
echo '【毎月の貯金（普通預金等）】'.nl2br("\n");
echo $_SESSION['savings'].nl2br("\n");

echo nl2br("\n");

if($_SESSION['myhomebuy'] != null){
    echo '【マイホームの購入年】'.nl2br("\n");
    echo $_SESSION['myhomebuy'].nl2br("\n");
}

if($_SESSION['estate'] != null){
    echo '【不動産投資物件の保有件数】'.nl2br("\n");
    echo $_SESSION['estate'].nl2br("\n");

    if($_SESSION['firstestate'] != null){
        echo '【1件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['firstestate'].nl2br("\n");
        echo '【1件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['firstrentalincome'].nl2br("\n");
    }
    if($_SESSION['secondestate'] != null){
        echo '【2件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['secondestate'].nl2br("\n");
        echo '【2件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['secondrentalincome'].nl2br("\n");
    }
    if($_SESSION['thirdestate'] != null){
        echo '【3件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['thirdestate'].nl2br("\n");
        echo '【3件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['thirdrentalincome'].nl2br("\n");
    }
    if($_SESSION['fourestate'] != null){
        echo '【4件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['fourestate'].nl2br("\n");
        echo '【4件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['fourrentalincome'].nl2br("\n");
    }
    if($_SESSION['fiveestate'] != null){
        echo '【5件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['fiveestate'].nl2br("\n");
        echo '【5件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['fiverentalincome'].nl2br("\n");
    }
    if($_SESSION['sixestate'] != null){
        echo '【6件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['sixestate'].nl2br("\n");
        echo '【6件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['sixrentalincome'].nl2br("\n");
    }
    if($_SESSION['sevenestate'] != null){
        echo '【7件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['sevenestate'].nl2br("\n");
        echo '【7件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['sevenrentalincome'].nl2br("\n");
    }
    if($_SESSION['eightestate'] != null){
        echo '【8件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['eightestate'].nl2br("\n");
        echo '【8件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['eightrentalincome'].nl2br("\n");
    }
    if($_SESSION['nineestate'] != null){
        echo '【9件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['nineestate'].nl2br("\n");
        echo '【9件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['ninerentalincome'].nl2br("\n");
    }
    if($_SESSION['tenestate'] != null){
        echo '【10件目の不動産投資物件購入年】'.nl2br("\n");
        echo $_SESSION['tenestate'].nl2br("\n");
        echo '【10件目の不動産投資物件の毎月の家賃収入】'.nl2br("\n");
        echo $_SESSION['tenrentalincome'].nl2br("\n");
    }
}

echo '【毎月の貯蓄残高】'.nl2br("\n");
echo $_SESSION['savingsbalance'].nl2br("\n");

if($_SESSION['lastEducationalinsurance'] != null){
    echo '【学資保険の最終的に受け取る合計額】'.nl2br("\n");
    echo $_SESSION['lastEducationalinsurance'].nl2br("\n");
}

echo '【毎月の旅行費】'.nl2br("\n");
echo $_SESSION['trip'].nl2br("\n");
echo '【毎月のその他の出費（家電購入費やローンのボーナス払い等）】'.nl2br("\n");
echo $_SESSION['otherexpense'].nl2br("\n");
echo '【あなたの働き始めた年齢】'.nl2br("\n");
echo $_SESSION['startwark'].nl2br("\n");
echo '【あなたの初任給】'.nl2br("\n");
echo $_SESSION['Startingsalary'].nl2br("\n");
echo '【あなたの50歳の想定年収】'.nl2br("\n");
echo $_SESSION['Estimatedannualincome'].nl2br("\n");
echo '【あなたの現在の職場の退職金の有無】'.nl2br("\n");
echo $_SESSION['yourSeverancepayinput'].nl2br("\n");

if($_SESSION['yourpartner'] == "いる"){
    echo '【パートナーの働き始めた年齢】'.nl2br("\n");
    echo $_SESSION['spousestartwork'].nl2br("\n");
    echo '【パートナーの初任給】'.nl2br("\n");
    echo $_SESSION['spouseStartingsalary'].nl2br("\n");
    echo '【パートナーの50歳の想定年収】'.nl2br("\n");
    echo $_SESSION['spouseEstimatedannualincome'].nl2br("\n");
    echo '【パートナーの職場の退職金の有無】'.nl2br("\n");
    echo $_SESSION['yourpartnerSeverancepayinput'].nl2br("\n");
}

if($_SESSION['children'] == "いる"){
    if($_SESSION['firstprimaryschool'] != null){
        echo '【1人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['firstprimaryschool'].nl2br("\n");
        echo '【1人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['firstjuniorhighschool'].nl2br("\n");
        echo '【1人目の高校区分】'.nl2br("\n");
        echo $_SESSION['firsthighschool'].nl2br("\n");
        echo '【1人目の大学区分】'.nl2br("\n");
        echo $_SESSION['firstuniversity'].nl2br("\n");
    }
    if($_SESSION['secondprimaryschool'] != null){
        echo '【2人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['secondprimaryschool'].nl2br("\n");
        echo '【2人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['secondjuniorhighschool'].nl2br("\n");
        echo '【2人目の高校区分】'.nl2br("\n");
        echo $_SESSION['secondhighschool'].nl2br("\n");
        echo '【2人目の大学区分】'.nl2br("\n");
        echo $_SESSION['seconduniversity'].nl2br("\n");
    }
    if($_SESSION['thirdprimaryschool'] != null){
        echo '【3人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['thirdprimaryschool'].nl2br("\n");
        echo '【3人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['thirdjuniorhighschool'].nl2br("\n");
        echo '【3人目の高校区分】'.nl2br("\n");
        echo $_SESSION['thirdhighschool'].nl2br("\n");
        echo '【3人目の大学区分】'.nl2br("\n");
        echo $_SESSION['thirduniversity'].nl2br("\n");
    }
    if($_SESSION['fourprimaryschool'] != null){
        echo '【4人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['fourprimaryschool'].nl2br("\n");
        echo '【4人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['fourjuniorhighschool'].nl2br("\n");
        echo '【4人目の高校区分】'.nl2br("\n");
        echo $_SESSION['fourhighschool'].nl2br("\n");
        echo '【4人目の大学区分】'.nl2br("\n");
        echo $_SESSION['fouruniversity'].nl2br("\n");
    }
    if($_SESSION['fiveprimaryschool'] != null){
        echo '【5人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['fiveprimaryschool'].nl2br("\n");
        echo '【5人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['fivejuniorhighschool'].nl2br("\n");
        echo '【5人目の高校区分】'.nl2br("\n");
        echo $_SESSION['fivehighschool'].nl2br("\n");
        echo '【5人目の大学区分】'.nl2br("\n");
        echo $_SESSION['fiveuniversity'].nl2br("\n");
    }
    if($_SESSION['sixprimaryschool'] != null){
        echo '【6人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['sixprimaryschool'].nl2br("\n");
        echo '【6人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['sixjuniorhighschool'].nl2br("\n");
        echo '【6人目の高校区分】'.nl2br("\n");
        echo $_SESSION['sixhighschool'].nl2br("\n");
        echo '【6人目の大学区分】'.nl2br("\n");
        echo $_SESSION['sixuniversity'].nl2br("\n");
    }
    if($_SESSION['sevenprimaryschool'] != null){
        echo '【7人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['sevenprimaryschool'].nl2br("\n");
        echo '【7人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['sevenjuniorhighschool'].nl2br("\n");
        echo '【7人目の高校区分】'.nl2br("\n");
        echo $_SESSION['sevenhighschool'].nl2br("\n");
        echo '【7人目の大学区分】'.nl2br("\n");
        echo $_SESSION['sevenuniversity'].nl2br("\n");
    }
    if($_SESSION['eightprimaryschool'] != null){
        echo '【8人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['eightprimaryschool'].nl2br("\n");
        echo '【8人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['eightjuniorhighschool'].nl2br("\n");
        echo '【8人目の高校区分】'.nl2br("\n");
        echo $_SESSION['eighthighschool'].nl2br("\n");
        echo '【8人目の大学区分】'.nl2br("\n");
        echo $_SESSION['eightuniversity'].nl2br("\n");
    }
    if($_SESSION['nineprimaryschool'] != null){
        echo '【9人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['nineprimaryschool'].nl2br("\n");
        echo '【9人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['ninejuniorhighschool'].nl2br("\n");
        echo '【9人目の高校区分】'.nl2br("\n");
        echo $_SESSION['ninehighschool'].nl2br("\n");
        echo '【9人目の大学区分】'.nl2br("\n");
        echo $_SESSION['nineuniversity'].nl2br("\n");
    }
    if($_SESSION['tenprimaryschool'] != null){
        echo '【10人目の小学校区分】'.nl2br("\n");
        echo $_SESSION['tenprimaryschool'].nl2br("\n");
        echo '【10人目の中学校区分】'.nl2br("\n");
        echo $_SESSION['tenjuniorhighschool'].nl2br("\n");
        echo '【10人目の高校区分】'.nl2br("\n");
        echo $_SESSION['tenhighschool'].nl2br("\n");
        echo '【10人目の大学区分】'.nl2br("\n");
        echo $_SESSION['tenuniversity'].nl2br("\n");
    }
}

echo nl2br("\n");
echo nl2br("\n");

echo '※本メールにはご返信いただけません。'.nl2br("\n");
echo nl2br("\n");

echo '株式会社Wealth Journey Navigators'.nl2br("\n");
echo '未来家計簿　運営事務局'.nl2br("\n");

echo 'https://wealthjourneynavigators.jp/'.nl2br("\n");
