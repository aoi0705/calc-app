<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>株式会社Wealth Journey Navigatore</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="ここにサイト説明を入れます">
<link rel="stylesheet" href="css/style.css">
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>

<body>

<div id="container">

<header>

<h1 id="logo"><a href="{{ url('/') }}"><img src="images/logo.png" alt="ロゴ"></a></h1>

<!--メニュー-->
<div id="menubar">

<nav>
<ul>
<li><a href="{{ url('/') }}">TOP</a></li>
<li><a href="{{ url('/WhoWeAre') }}">Who We Are</a></li>
<li><a href="{{ url('/Profile') }}">Company Profile</a></li>
</ul>
</nav>

<div class="sh">
<p>小さな端末でのみ表示</p>
</div>
<!--/.sh-->

</div>
<!--/#menubar-->

</header>

<main>

<section>

<h2>未来家計簿作成</h2>
<p>続いて、現在家計簿情報を入力していきましょう！ご回答いただく項目は以下の22項目です。</p>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
    <form class="needs-validation" novalidate>
        <div class="form-group">
           <label for="text">あなたの年収を教えてください</label><br>
           <input type="text" id="annual-income" name="annual-income" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">あなたのボーナスを教えてください（ざっくりで構いません！）</label><br>
           <input type="text" id="bonus" name="bonus" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">配偶者・パートナーの年収を教えてください</label><br>
           <input type="text" id="spouse-annual-income" name="spouse-annual-income" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">配偶者・パートナーのボーナスを教えてください（ざっくりで構いません！）</label><br>
           <input type="text" id="spouse-bonus" name="spouse-bonus" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の食費はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="food-expenses" name="food-expenses" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の日用品・雑貨代はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="living-cost" name="living-cost" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の衣服・美容代はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="beauty-bill" name="beauty-bill" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
        <label for="inputState">住居区分を教えてください</label><br>
           <select id="house-class" name="house-class" class="form-control">
                <option selected></option>
                <option value="myhouse">持ち家（マンション）</option>
                <option value="apartment">アパート</option>
                <option value="rental">賃貸</option>
            </select>
        </div>

        <div class="form-group">
           <label for="text">毎月の住居費（持ち家の場合、毎月の住宅ローンの金額）を教えてください</label><br>
           <input type="text" id="house-cost" name="house-cost" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の住居の管理費（修繕積立金・管理金等）を教えてください</label><br>
           <input type="text" id="manage-cost" name="manage-cost" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の水道・光熱費はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="bill" name="bill" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の通信費（PC）はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="pc-bill" name="pc-bill" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の通信費（スマホ等）はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="phone-bill" name="phone-bill" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の自動車ローン/毎月のレンタカー・カーシェア代はどれくらいですか？（ざっくりでかまいません）</label><br>
           <input type="text" id="lone" name="lone" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の自動車保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <input type="text" id="Insurance-bill" name="Insurance-bill" class="form-control"><label for="text">万円</label><button type=submit>未加入</button>
        </div>

        <div class="form-group">
           <label for="text">毎月の学資保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <input type="text" id="Educational-insurance" name="Educational-insurance" class="form-control"><label for="text">万円</label><button type=submit>未加入</button>
        </div>

        <div class="form-group">
           <label for="text"></label>毎月の教育費（保育園・幼稚園費、習い事等）はどれくらいですか？（ざっくりでかまいません）<br>
           <input type="text" id="education-expenses" name="education-expenses" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text"></label>毎月の医療保険の保険料を教えてください（未加入の場合、ボタンを押下してください）<br>
           <input type="text" id="medical-insurance" name="medical-insurance" class="form-control"><label for="text">万円</label><button type=submit>未加入</button>
        </div>

        <div class="form-group">
           <label for="text">毎月の医療保険以外の生命保険の保険料を教えてください（未加入の場合、ボタンを押下してください）</label><br>
           <input type="text" id="life-insurance" name="life-insurance" class="form-control"><label for="text">万円</label><button type=submit>未加入</button>
        </div>

        <div class="form-group">
           <label for="text">毎月の不動産投資の費用はどれくらいですか？（物件をお持ちでない場合、ボタンを押下してください）</label><br>
           <input type="text" id="Estate-Investment" name="Estate-Investment" class="form-control"><label for="text">万円</label><button type=submit>未保有</button>
        </div>

        <div class="form-group">
           <label for="text">毎月の資産運用（株式・債権・投資信託等）の購入費用を教えてください</label><br>
           <input type="text" id="asset-management" name="asset-management" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎月の貯金（普通預金等）を教えてください</label><br>
           <input type="text" id="savings" name="savings" class="form-control"><label for="text">万円</label>
        </div>

        <button type="submit">本人・家族構成情報へ戻る</button>

        <button type="submit">未来家計簿入力へ進む</button>
    </form>
</div><!-- /container -->

</section>

</main>

<div id="footermenu">
<ul>
<li class="title">メニュー</li>
<li><a href="index.html">ホーム</a></li>
<li><a href="company.html">会社概要</a></li>
<li><a href="list.html">仕事検索</a></li>
<li><a href="request.html">企業のご担当者様</a></li>
<li><a href="faq.html">よく頂く質問</a></li>
<li><a href="contact.html">お問い合わせ</a></li>
</ul>
<ul>
<li class="title">メニュー見出し</li>
<li><a href="#">サンプルメニューサンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
</ul>
<ul>
<li class="title">メニュー見出し</li>
<li><a href="#">サンプルメニューサンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
</ul>
<ul>
<li class="title">メニュー見出し</li>
<li><a href="#">サンプルメニューサンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
<li><a href="#">サンプルメニュー</a></li>
</ul>
</div>
<!--/#footermenu-->

<footer>

<small>フッター</small>

</footer>

</div>
<!--/#container-->

<!--jQueryの読み込み-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!--このテンプレート専用のスクリプト-->
<script src="js/main.js"></script>

<!--開閉ボタン（ハンバーガーアイコン）-->
<div id="menubar_hdr">
<span></span><span></span><span></span>
</div>

<!--ページの上部へ戻るボタン-->
<div class="pagetop"><a href="#"><i class="fas fa-angle-double-up"></i></a></div>

<!--パララックス（inview）-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>
<script src="js/jquery.inview_set.js"></script>

</body>
</html>
