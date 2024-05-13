<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>株式会社Wealth Journey Navigatore</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
<meta name="description" content="ここにサイト説明を入れます">
<link rel="stylesheet" href="css/style.css">
<style>
    main{
        margin-top:-100px;
        margin-bottom:300px;
    }

    @media screen and (max-width:400px){
        footer{
            height:105px;
        }
    }
</style>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>

<body>

<div id="container">

<main>

<section>

<h2 class="calc-h2">未来家計簿作成</h2>

<ul class="progressbar">
    <li class="complete">本人・<br>家族構成</li>
    <li class="complete">現在家計簿<br>情報</li>
    <li class="active">未来家計簿<br>情報</li>
</ul>

<h3 class="calc-h3">続いて、未来家計簿情報を入力していきましょう！ご回答いただく項目は以下の20項目です。</h3>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
    <form class="needs-validation" onsubmit="return false;">
    @csrf
        <div class="form-group" style="display: none;" id="yourhome">
           <label for="text">マイホームを購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="myhome-buy" name="myhome-buy" class="form-control" placeholder="2020"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="myhomebuyerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourestate">
        <label for="inputState">不動産投資物件は何件お持ちですか</label><br>
           <select id="estate" name="estate" class="form-control">
                <option selected></option>
                <option value="1">1件</option>
                <option value="2">2件</option>
                <option value="3">3件</option>
                <option value="4">4件</option>
                <option value="5">5件</option>
                <option value="6">6件</option>
                <option value="7">7件</option>
                <option value="8">8件</option>
                <option value="9">9件</option>
                <option value="10">10件以上</option>
            </select>
            <div class="err-msg-name" id="yourestateerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="yourfirstestate">
           <label for="text">1件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="first-estate" name="first-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yourfirstestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfirstrentalincome">
           <label for="text">1件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="first-rental-income" name="first-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourfirstrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursecondestate">
           <label for="text">2件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="second-estate" name="second-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yoursecondestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursecondrentalincome">
           <label for="text">2件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="second-rental-income" name="second-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yoursecondrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourthirdestate">
           <label for="text">3件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="third-estate" name="third-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yourthirdestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourthirdrentalincome">
           <label for="text">3件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="third-rental-income" name="third-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourthirdrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfourestate">
           <label for="text">4件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="four-estate" name="four-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yourfourestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfourrentalincome">
           <label for="text">4件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="four-rental-income" name="four-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourfourrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfiveestate">
           <label for="text">5件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="five-estate" name="five-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yourfiveestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfiverentalincome">
           <label for="text">5件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="five-rental-income" name="five-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourfiverentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursixestate">
           <label for="text">6件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="six-estate" name="six-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yoursixestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursixrentalincome">
           <label for="text">6件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="six-rental-income" name="six-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yoursixrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursevenestate">
           <label for="text">7件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="seven-estate" name="seven-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yoursevenestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursevenrentalincome">
           <label for="text">7件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="seven-rental-income" name="seven-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yoursevenrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="youreightestate">
           <label for="text">8件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="eight-estate" name="eight-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="youreightestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="youreightrentalincome">
           <label for="text">8件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="eight-rental-income" name="eight-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="youreightrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yournineestate">
           <label for="text">9件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="nine-estate" name="nine-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yournineestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourninerentalincome">
           <label for="text">9件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="nine-rental-income" name="nine-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourninerentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtenestate">
           <label for="text">10件目の不動産投資物件を購入したのはいつですか。</label><br>
           <table>
            <th>
           <input type="number" id="ten-estate" name="ten-estate" class="form-control" placeholder="2019"></th>
           <td>
           <label for="text">年</label></td></table>
           <div class="err-msg-name" id="yourtenestateerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtenrentalincome">
           <label for="text">10件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <table>
            <th>
           <input type="number" id="ten-rental-income" name="ten-rental-income" class="form-control" placeholder="10"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourtenrentalincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursavingsbalance">
           <label for="text">現在の貯蓄残高を教えてください</label><br>
           <table>
            <th>
           <input type="number" id="savings-balance" name="savings-balance" class="form-control" placeholder="500"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yoursavingsbalanceerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourlastEducationalinsurance">
           <label for="text">学資保険の最終的に受取る合計額はどれくらいですか？（ざっくりでかまいません！）</label><br>
           <table>
            <th>
           <input type="number" id="last-Educational-insurance" name="last-Educational-insurance" class="form-control" placeholder="400"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourlastEducationalinsuranceerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtrip">
           <label for="text">毎年の旅行費はどれくらいですか？（ざっくりでかまいません。）</label><br>
           <table>
            <th>
           <input type="number" id="trip" name="trip" class="form-control" placeholder="100"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourtriperr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourotherexpense">
           <label for="text">毎年のその他の出費（家電購入費やローンのボーナス払い等）はどれくらいですか？（ざっくりでかまいません！）</label><br>
           <table>
            <th>
           <input type="number" id="other-expense" name="other-expense" class="form-control" placeholder="100"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourotherexpenseerr"></div>
        </div>
        <br>

        <label for="text" style="display: none;" id="text">ここからの情報は、公的年金の受取額や退職金を概算で見積もるために使用します！</label><br>

        <div class="form-group" style="display: none;" id="yourstartwork">
           <label for="text">あなたの働き始めた年齢はおいくつですか。</label><br>
           <table>
            <th>
           <input type="number" id="start-wark" name="start-work" class="form-control" placeholder="23"></th>
           <td>
           <label for="text">歳</label></td></table>
           <div class="err-msg-name" id="yourstartworkerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourstartingsalary">
           <label for="text">あなたの初任給はどれくらいでしたか？（ざっくりでかまいません！）</label><br>
           <table>
            <th>
           <input type="number" id="Starting-salary" name="Starting-salary" class="form-control" placeholder="22"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourstartingsalaryerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourestimatedannualincome">
           <label for="text">あなたの50歳の想定年収はどれくらいを目標としていますか？</label><br>
           <table>
            <th>
           <input type="number" id="Estimated-annual-income" name="Estimated-annual-income" class="form-control" placeholder="1000"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourestimatedannualincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourSeverancepay">
           <label for="text">あなたの現在の職場は退職金がありますか。</label><br>
           <div class="radiobox" id="yourSeverancepayinput">
                <input id="Severance-pay" class="radiobutton" name="Severance-pay" type="radio" value="ある" />
                <label for="Severance-pay" class="radio_label">ある</label>
                <input id="not-Severance-pay" class="radiobutton" name="Severance-pay" type="radio" value="ない" />
                <label for="not-Severance-pay" class="radio_label">ない</label> 
            </div>
            <div class="err-msg-name" id="yourSeverancepayerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="yourpartnerstratwork">
           <label for="text">パートナーの働き始めた年齢はおいくつですか。</label><br>
           <table>
            <th>
           <input type="number" id="spouse-start-work" name="spouse-start-work" class="form-control" placeholder="23"></th>
           <td>
           <label for="text">歳</label></td></table>
           <div class="err-msg-name" id="yourpartnerstratworkerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourpartnerstartingsalary">
           <label for="text">パートナーの初任給はどれくらいでしたか？（ざっくりでかまいません！）</label><br>
           <table>
            <th>
           <input type="number" id="spouse-Starting-salary" name="spouse-Starting-salary" class="form-control" placeholder="18"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourpartnerstartingsalaryerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourpartnerestimatedannualincome">
           <label for="text">パートナーの50歳の想定年収はどれくらいを目標としていますか？</label><br>
           <table>
            <th>
           <input type="number" id="spouse-Estimated-annual-income" name="spouse-Estimated-annual-income" class="form-control" placeholder="500"></th>
           <td>
           <label for="text">万円</label></td></table>
           <div class="err-msg-name" id="yourpartnerestimatedannualincomeerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourpartnerSeverancepay">
           <label for="text">パートナーの現在の職場は退職金がありますか。</label><br>
           <div class="radiobox" id="yourpartnerSeverancepayinput">
                <input id="spouse-Severance-pay" class="radiobutton" name="spouse-Severance-pay" type="radio" value="ある" />
                <label for="spouse-Severance-pay" class="radio_label">ある</label>
                <input id="spouse-Severance-pay-not" class="radiobutton" name="spouse-Severance-pay" type="radio" value="ない" />
                <label for="spouse-Severance-pay-not" class="radio_label">ない</label> 
            </div>
            <div class="err-msg-name" id="yourpartnerSeverancepayerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="yourfirstprimaryschool">
           <label for="inputState">1人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="first-primary-school" name="first-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfirstprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfirstjuniorhighschool">
           <label for="inputState">1人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="first-junior-high-school" name="first-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfirstjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfirsthighschool">
           <label for="inputState">1人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="first-high-school" name="first-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfirsthighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfirstuniversity">
           <label for="inputState">1人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="first-university" name="first-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yourfirstuniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursecondprimaryschool">
           <label for="inputState">2人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="second-primary-school" name="second-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursecondprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursecondjuniorhighschool">
           <label for="inputState">2人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="second-junior-high-school" name="second-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursecondjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursecondhighschool">
           <label for="inputState">2人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="second-high-school" name="second-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursecondhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourseconduniversity">
           <label for="inputState">2人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="second-university" name="second-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yourseconduniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourthirdprimaryschool">
           <label for="inputState">3人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="third-primary-school" name="third-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourthirdprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourthirdjuniorhighschool">
           <label for="inputState">3人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="third-junior-high-school" name="third-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourthirdjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourthirdhighschool">
           <label for="inputState">3人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="third-high-school" name="third-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourthirdhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourthirduniversity">
           <label for="inputState">3人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="third-university" name="third-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yourthirduniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfourprimaryschool">
           <label for="inputState">4人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="four-primary-school" name="four-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfourprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfourjuniorhighschool">
           <label for="inputState">4人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="four-junior-high-school" name="four-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfourjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfourhighschool">
           <label for="inputState">4人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="four-high-school" name="four-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfourhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfouruniversity">
           <label for="inputState">4人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="four-university" name="four-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yourfouruniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfiveprimaryschool">
           <label for="inputState">5人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="five-primary-school" name="five-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfiveprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfivejuniorhighschool">
           <label for="inputState">5人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="five-junior-high-school" name="five-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfivejuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfivehighschool">
           <label for="inputState">5人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="five-high-school" name="five-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourfivehighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourfiveuniversity">
           <label for="inputState">5人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="five-university" name="five-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yourfiveuniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursixprimaryschool">
           <label for="inputState">6人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="six-primary-school" name="six-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursixprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursixjuniorhighschool">
           <label for="inputState">6人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="six-junior-high-school" name="six-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursixjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursixhighschool">
           <label for="inputState">6人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="six-high-school" name="six-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursixhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursixuniversity">
           <label for="inputState">6人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="six-university" name="six-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yoursixuniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursevenprimaryschool">
           <label for="inputState">7人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="seven-primary-school" name="seven-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursevenprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursevenjuniorhighschool">
           <label for="inputState">7人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="seven-junior-high-school" name="seven-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursevenjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursevenhighschool">
           <label for="inputState">7人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="seven-high-school" name="seven-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yoursevenhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yoursevenuniversity">
           <label for="inputState">7人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="seven-university" name="seven-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yoursevenuniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="youreightprimaryschool">
           <label for="inputState">8人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="eight-primary-school" name="eight-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="youreightprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="youreightjuniorhighschool">
           <label for="inputState">8人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="eight-junior-high-school" name="eight-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="youreightjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="youreighthighschool">
           <label for="inputState">8人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="eight-high-school" name="eight-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="youreighthighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="youreightuniversity">
           <label for="inputState">8人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="eight-university" name="eight-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="youreightuniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yournineprimaryschool">
           <label for="inputState">9人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="nine-primary-school" name="nine-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yournineprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourninejuniorhighschool">
           <label for="inputState">9人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="nine-junior-high-school" name="nine-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourninejuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourninehighschool">
           <label for="inputState">9人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="nine-high-school" name="nine-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourninehighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yournineuniversity">
           <label for="inputState">9人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="nine-university" name="nine-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yournineuniversityerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtenprimaryschool">
           <label for="inputState">10人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="ten-primary-school" name="ten-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourtenprimaryschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtenjuniorhighschool">
           <label for="inputState">10人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="ten-junior-high-school" name="ten-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourtenjuniorhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtenhighschool">
           <label for="inputState">10人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="ten-high-school" name="ten-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
            <div class="err-msg-name" id="yourtenhighschoolerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="yourtenuniversity">
           <label for="inputState">10人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="ten-university" name="ten-university" class="form-control">
                <option selected></option>
                <option value="私立文系">私立文系</option>
                <option value="私立理系">私立理系</option>
                <option value="私立医科系">私立医科系</option>
                <option value="国立・公立">国立・公立</option>
            </select>
            <div class="err-msg-name" id="yourtenuniversityerr"></div>
        </div>
</div><!-- /container -->

</section>

</main>
<!--/#footermenu-->

<footer class="bg1">
    <label class="last-state">残り</label>
    <label class="last-state-page"></label>
    <label class="last-state">項目</label>
<button  class="btn btn-primary custom-btn" id="next_page2-not" type="button" data-target="#modal1" data-toggle="modal" disabled>未来家計簿を計算する</button><br>
<a href="javascript:void(0)" onclick="history.back()">現在家計簿情報入力へ戻る</a>
</footer>
        <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">情報共有の同意の<br class="br-sp">お願い</h3>
                    </div>
                    <div class="modal-body">
                        <section>
                                <p>お客様の未来家計簿情報をもとに、専門的なアドバイスを提供するためには、家計見直しのプロ（ファイナンシャルプランナー：FP）および<br>
                                    資産運用のプロ（独立金融アドバイザー：IFA）と情報を共有する必要があります。<br><br>

                                    本サービスを利用するためには、以下の情報をFP/IFAと共有することにご同意いただく必要があります。<br><br>

                                    ・未来家計簿シミュレーション診断結果<br>
                                    ・お客様が提供した家計や資産に関するデータ<br><br>

                                    情報は厳重に管理され、お客様の同意なしに他の目的で使用されることはありません。このプロセスを通じて、お客様に最適な計画とサポートを提供します。<br><br>

                                    以下の【同意してサービスを利用する】ボタンをクリックすることで、お客様が情報共有に同意したとみなされ、サービスの提供が開始されます。同意しない場合は、<br>
                                    本サービスは利用できません。
                                </p>
                        </section>
                    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary mx-auto d-block" id="next_page2_serv">同意してサービスを利用する</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</form>
</div>
<!--/#container-->

<!--jQueryの読み込み-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!--このテンプレート専用のスクリプト-->
<script src="js/calc3.js"></script>
<script src="js/main.js"></script>


<!--開閉ボタン（ハンバーガーアイコン）
<div id="menubar_hdr">
<span></span><span></span><span></span>
</div>-->

<!--ページの上部へ戻るボタン-->
<div class="pagetop"><a href="#"><i class="fas fa-angle-double-up"></i></a></div>

<!--パララックス（inview）-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>
<script src="js/jquery.inview_set.js"></script>

</body>
</html>
