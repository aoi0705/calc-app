<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>株式会社Wealth Journey Navigatore</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="株式会社Wealth Journey Navigatorsはご家庭に沿った未来家計簿を作成して、あなたのご家庭をサポート致します。">
<link rel="stylesheet" href="css/style.css">
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

<header>

<!--メニュー-->
<div class="br-sp">
<h1 id="logo"><a href="{{ url('/') }}"><img src="images/logo.jpg" alt="ロゴ" width="70px" height="70px"></a></h1>
</div>

<div id="menubar" class="db">

<nav class="br-pc">
<ul class="headul">
<li><h1 id="logo"><a href="{{ url('/') }}"><img src="images/logo.jpg" alt="ロゴ"></a></h1></li>
<li class="link_text"><a href="#mainimg">TOP</a></li>
<li class="link_text"><a href="#whoweare">Who we are</a></li>
<li class="link_text"><a href="#companyprofile">Company Profile</a></li>
</ul>
</nav>

<nav class="br-sp">
<ul>
<li class="link_text"><a href="#mainimg">TOP</a></li>
<li class="link_text"><a href="#whoweare">Who we are</a></li>
<li class="link_text"><a href="#companyprofile">Company Profile</a></li>
</ul>
</nav>
<!--/.sh-->

</div>
<!--/#menubar-->

</header>

<main>

<section>

<h2>情報入力完了</h2>
<!-- Page Content -->

<p>
    ご入力ありがとうございます。現在、サービスの不具合を修正中です。<br>
    ご迷惑をおかけし、申し訳ございません。<br>
    入力いただいた内容については、担当FPにてシミュレーションさせていただき、登録いただいたメールアドレス宛にご連絡させていただきます。<br>
    よろしくお願いいたします。
</p>

</section>

</main>

<!--/#footermenu-->

<footer>

<a href="{{ url('/') }}"><img src="images/footer_logo.png" alt="ロゴ" width="120px" height="120px"style="display: block; margin: auto;"></a>

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
