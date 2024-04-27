<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>株式会社Wealth Journey Navigatore</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="構築中">
<link rel="stylesheet" href="css/style.css">
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/main.js"></script>
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
<p>小さな端末でのみ表示させたいものがあれば、ここを使って下さい。</p>
</div>
<!--/.sh-->

</div>
<!--/#menubar-->

</header>

<main>

<section class="bg2">

<h2>Who we are</h2>
<p>サンプルテキスト。</p>

</section>

<section class="bg1">

<h2 class="hidden">大見出し</h2>

<div class="c2">

<div class="text l">
<h2>Purpose</h2>
<p>ライフステージや家族構成に合わせたお金の管理を容易にし、一人ひとりのより良い未来をサポートする
。</p>
</div>
<!--/.text-->

<div class="image r">
<figure><img src="images/mainimg.png" alt=""></figure>
</div>
<!--/.image-->

</div>

</section>

<section>

<h2 class="hidden">大見出し</h2>

<div class="c2">

<div class="text r">
<h2>Mission</h2>
<p>個々のユーザーが自分の将来の家計状況を明確に理解し、賢明な資産運用と<br>
リスクマネジメントをサポートする
</p>
</div>
<!--/.text-->

<div class="image l">
<figure><img src="images/mainimg.png" alt=""></figure>
</div>
<!--/.image-->

</div>

</section>

<section class="bg1">

<h2 class="hidden">大見出し</h2>

<div class="c2">

<div class="text l">
<h2>Vision</span></h2>
<p>金融リテラシーの向上と資産運用の民主化を実現し、すべての人が将来の自分の家計状況を自信を持って管理できる社会を創る
</p>
</div>
<!--/.text-->

<div class="image r">
<figure><img src="images/mainimg.png" alt=""></figure>
</div>
<!--/.image-->

</div>

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