<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>派遣会社向け 無料ホームページテンプレート tp_haken1</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="ここにサイト説明を入れます">
<link rel="stylesheet" href="css/style.css">
</head>

<body>

<div id="container">

<header>

<h1 id="logo"><a href="index.html"><img src="images/logo.png" alt="サンプル派遣会社"></a></h1>

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

<section>

<h2>Company Profile<span>会社概要</span></h2>

<table class="ta1">
<caption>大見出しが必要ならここを使います</caption>
<tr>
<th>会社名</th>
<td>株式会社Wealth Journey Navigators</td>
</tr>
<tr>
<th>所在地</th>
<td>〒104-0061　東京都中央区銀座1-16-7　銀座大栄ビル 5F･6F
</td>
</tr>
<tr>
<th>設立</th>
<td>2024年4月</td>
</tr>
<tr>
<th>資本金</th>
<td>200万円　※2024年4月11日時点</td>
</tr>
<tr>
<th>代表者</th>
<td>代表取締役社長CEO　小池　貴浩</td>
</tr>
<tr>
<th>事業内容</th>
<td>①金融に関する情報提供サービスの運営及び管理。<br>②個人向けの金融アドバイザーや投資サービス等への顧客紹介。<br>③個人及び家庭向けの財務計画に関するコンサルティング及びアドバイザリーサービス
</td>
</tr>
</table>

</section>

<section class="bg1">

<h2>大見出し</h2>

<div class="c2">

<div class="text l">
<h2>小見出し<span>小見出しの補足。</span></h2>
<p>左右で使う場合は、外側に必ず&lt;div <span class="color-check">class=&quot;c2&quot;</span>&gt;を作ります。その中に、<span class="color-check">class=&quot;text&quot;</span>と<span class="color-check">class=&quot;image&quot;</span>でテキストブロックと画像ブロックを分けます。テキストブロックと画像ブロックのどちらを左右によせるかは、セットで記載する<span class="color-check">l</span>か<span class="color-check">r</span>によって振り分けできます。<span class="color-check">l</span>はLeft(左)で、<span class="color-check">r</span>はRight(右)です。このブロックの場合、&lt;div class=&quot;text <span class="color-check">l</span>&quot;&gt;と&lt;div class=&quot;image <span class="color-check">r</span>&quot;&gt;で指定しているので、テキストが左で画像が右にきます。</p>
<p>尚、小さな端末では、常にテキストが冒頭にきます。</p>
</div>
<!--/.text-->

<div class="image r">
<figure><img src="images/sample3.jpg" alt=""></figure>
</div>
<!--/.image-->

</div>
</section>

<section>
<h2><a href="{{ url('/privacy_policy') }}">プライバシーポリシー</a></h2>
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

<small>Copyright&copy; <a href="index.html">サンプル派遣会社</a> All Rights Reserved.</small>
<span class="pr"><a href="https://template-party.com/" target="_blank">《Web Design:Template-Party》</a></span>

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

<!--スライドショー（slick）-->
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="js/slick.js"></script>

</body>
</html>