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

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HFPERHMZE5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HFPERHMZE5');
</script>
</head>

<body>

<div id="container">

<main>

<section>

<h2 class="calc-h2">未来家計簿作成</h2>

<ul class="progressbar">
    <li class="complete">本人・<br>家族構成</li>
    <li class="active">現在家計簿<br>情報</li>
    <li>未来家計簿<br>情報</li>
</ul>

<h3 class="calc-h3">続いて、現在家計簿情報を入力していきましょう！ご回答いただく項目は以下の22項目です。</h3>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
    <form class="needs-validation" id="calc2" onsubmit="return false;">
    @csrf
        <div class="form-group">
           <label for="text">あなたの年収を教えてください</label><br>
           <table>
            <th>
           <input type="number" id="annual-income" name="annual-income" class="form-control" placeholder="500"></th>
           <td>
           <label for="annual-income">万円</label></td>
            </table>
           <div class="err-msg-name" id="annualincomeerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourbonus">
           <label for="text">あなたのボーナスを教えてください（ざっくりで構いません！）</label><br>
           <table>
            <th>
           <input type="number" id="bonus" name="bonus" class="form-control" placeholder="100">
            </th>
            <td>
           <label for="text">万円</label>
            </td>
         </table>
           <div class="err-msg-name" id="yourbonuserr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourpartnerincome">
           <label for="text">配偶者・パートナーの年収を教えてください</label><br>
           <table>
           <th>
           <input type="number" id="spouse-annual-income" name="spouse-annual-income" class="form-control" placeholder="500"></th>
           <td>
           <label for="text">万円</label></td>
         </table>
           <div class="err-msg-name" id="yourpartnerincomeerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourpartnerbonus">
           <label for="text">配偶者・パートナーのボーナスを教えてください（ざっくりで構いません！）</label><br>
           <table>
            <th>
           <input type="number" id="spouse-bonus" name="spouse-bonus" class="form-control" placeholder="100"></th>
           <td>
           <label for="text">万円</label></td>
         </table>
           <div class="err-msg-name" id="yourpartnerbonuserr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourfoodexpenses">
           <label for="text">毎月の食費はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="food-expenses" name="food-expenses" class="form-control" placeholder="100000"></th>
           <td>
           <label for="text">円</label></td>
         </table>
           <div class="err-msg-name" id="yourfoodexpenseserr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourlivingcost">
           <label for="text">毎月の日用品・雑貨代はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="living-cost" name="living-cost" class="form-control" placeholder="20000"></th>
           <td>
           <label for="text">円</label></td>
         </table>
           <div class="err-msg-name" id="yourlivingcosterr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourbeautybill">
           <label for="text">毎月の衣服・美容代はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="beauty-bill" name="beauty-bill" class="form-control" placeholder="30000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourbeautybillerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourhouseclass">
        <label for="inputState">住居区分を教えてください</label><br>
           <select id="house-class" name="house-class" class="form-control">
                <option selected></option>
                <option value="myhouse">持ち家（マンション）</option>
                <option value="apartment">持ち家（戸建て）</option>
                <option value="rental">賃貸</option>
            </select>
            <div class="err-msg-name" id="yourhouseclasserr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="yourhousecost">
           <label for="text">毎月の住居費（持ち家の場合、毎月の住宅ローンの金額）を教えてください</label><br>
           <table>
            <th>
           <input type="number" id="house-cost" name="house-cost" class="form-control" placeholder="150000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourhousecosterr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourmanagecost">
           <label for="text">毎月の住居の管理費（修繕積立金・管理金等）を教えてください</label><br>
           <table>
            <th>
           <input type="number" id="manage-cost" name="manage-cost" class="form-control" placeholder="30000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourmanagecosterr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourbill">
           <label for="text">毎月の水道・光熱費はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="bill" name="bill" class="form-control" placeholder="40000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourbillerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourpcbill">
           <label for="text">毎月の通信費（PC）はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="pc-bill" name="pc-bill" class="form-control" placeholder="5000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourpcbillerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourphonebill">
           <label for="text">毎月の通信費（スマホ等）はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="phone-bill" name="phone-bill" class="form-control" placeholder="20000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourphonebillerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourlone">
           <label for="text">毎月の自動車ローン/毎月のレンタカー・カーシェア代はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="lone" name="lone" class="form-control" placeholder="20000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourloneerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourinsurancebill">
           <label for="text">毎月の自動車保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <table>
            <th>
           <input type="number" id="Insurance-bill" name="Insurance-bill" class="form-control" placeholder="10000"></th>
           <td>
           <label for="text">円</label></td></table>
           <button type="button" id="insurance-not-click" class="form_button">未加入</button>
           <div class="err-msg-name" id="yourinsurancebillerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="youreducationalinsurance">
           <label for="text">毎月の学資保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <table>
            <th>
           <input type="number" id="Educational-insurance" name="Educational-insurance" class="form-control" placeholder="10000"></th>
           <td>
           <label for="text">円</label></td></table>
           <button type="button" id="youreducationalinsurance-not-click" class="form_button">未加入</button>
           <div class="err-msg-name" id="youreducationalinsuranceerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="youreducationexpenses">
           <label for="text">毎月の教育費（保育園・幼稚園費、習い事等）はどれくらいですか？（ざっくりでかまいません）</label><br>
           <table>
            <th>
           <input type="number" id="education-expenses" name="education-expenses" class="form-control" placeholder="50000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="youreducationexpenseserr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourmedicalinsurance">
           <label for="text">毎月の医療保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <table>
            <th>
           <input type="number" id="medical-insurance" name="medical-insurance" class="form-control" placeholder="5000"></th>
           <td>
           <label for="text">円</label></td></table>
           <button type="button" id="yourmedicalinsurance-not-click" class="form_button">未加入</button>
           <div class="err-msg-name" id="yourmedicalinsuranceerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourlifeinsurance">
           <label for="text">毎月の医療保険以外の生命保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <table>
            <th>
           <input type="number" id="life-insurance" name="life-insurance" class="form-control" placeholder="20000"></th>
           <td>
           <label for="text">円</label></td></table>
           <button type="button" id="yourlifeinsurance-not-click" class="form_button">未加入</button>
           <div class="err-msg-name" id="yourlifeinsuranceerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourestateinvestment">
           <label for="text">毎月の不動産投資の費用はどれくらいですか？（物件をお持ちでない場合、ボタンを押下してください）</label><br>
           <table>
            <th>
           <input type="number" id="Estate-Investment" name="Estate-Investment" class="form-control" placeholder="20000"></th>
           <td>
           <label for="text">円</label></td></table>
           <button type="button" id="yourestateinvestment-not-click" class="form_button">未保有</button>
           <div class="err-msg-name" id="yourestateinvestmenterr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourassetmanagement">
           <label for="text">毎月の資産運用（株式・債権・投資信託等）の購入費用を教えてください</label><br>
           <table>
            <th>
           <input type="number" id="asset-management" name="asset-management" class="form-control" placeholder="50000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourassetmanagementerr"></div>
         </div>

        <div class="form-group" style="display: none;" id="yourformcontrol">
           <label for="text">毎月の貯金（普通預金等）を教えてください</label><br>
           <table>
            <th>
           <input type="number" id="savings" name="savings" class="form-control" placeholder="50000"></th>
           <td>
           <label for="text">円</label></td></table>
           <div class="err-msg-name" id="yourformcontrolerr"></div>
         </div>
</div><!-- /container -->

</section>

</main>
<!--/#footermenu-->

<footer class="bg1">
    <label class="last-state">残り</label>
    <label class="last-state-page"></label>
    <label class="last-state">項目</label>
    <button type="button" class="btn btn-primary custom-btn" id="next_page2-not" disabled>未来家計簿入力へ進む</button><br>
    <a href="javascript:void(0)" onclick="history.back()" id="back_url">本人・家族構成情報へ戻る</a>
</footer>
</form>

</div>
<!--/#container-->

<!--jQueryの読み込み-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!--このテンプレート専用のスクリプト-->
<script src="js/main.js"></script>
<script src="js/calc2.js"></script>

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
