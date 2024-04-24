<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>派遣会社向け 無料ホームページテンプレート tp_haken1</title>
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

<h2>未来家計簿作成</h2>
<p>家計簿を作成する上で、まずはあなたとご家族の情報を確認させてください！</p>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
    <form class="needs-validation" action="question.php" method="post">
        <div class="form-group">
           <label for="text">名前</label><br>
           <input type="text" id="name" name="name" class="form-control"><br>
           <button type=submit>ワンタイムパスワードを送付</button>
        </div>

        <div class="form-group">
           <label for="text">メールアドレス宛に送付したワンタイムパスワードを入力してください（6桁）</label><br>
           <input type="text" id="onetime-password" name="onetime_password" class="form-control"><br>
           <button type=submit>認証</button>
        </div>

        <div class="form-group">
           <label for="text">あなたのニックネームを教えてください:</label><br>
           <input type="text" id="nickname" name="nickname" class="form-control"><br>
        </div>

        <div class="form-group">
           <label for="text">あなたの生年月日（西暦）を教えてください。</label><br>
           <input type="text" id="birthday" name="birthday" class="form-control"><br>
        </div>

        <div class="form-group">
           <label for="text">あなたの郵便番号を教えてください</label><br>
           <input type="text" id="post-number" name="post-number" class="form-control"><br>
        </div>

        <div class="form-group">
            <label for="inputState">あなたの職業を教えてください</label>
            <select id="job" name="job" class="form-control">
                <option selected></option>
                <option value="employee">会社員</option>
                <option value="housewife">主婦</option>
            </select>
        </div>

        <div class="form-group">
           <label for="text">配偶者・パートナーの有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="spouse" id="spouse" autocomplete="off" checked>いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="single" id="single" autocomplete="off">いない
                </label>
            </div>
        </div>

        <div class="form-group">
           <label for="text">配偶者・パートナーの生年月日を教えてください</label><br>
           <input type="text" id="spouse-birthday" name="spouse-birthday" class="form-control"><br>
        </div>

        <div class="form-group">
           <label for="inputState">配偶者・パートナーの職業を教えてください</label>
            <select id="spouse-job" name="spouse-job" class="form-control">
                <option selected></option>
                <option value="employee">会社員</option>
                <option value="housewife">主婦</option>
            </select>
        </div>

        <div class="form-group">
           <label for="text">子供の有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="children" id="children" autocomplete="off" checked>いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="not-children" id="not-children" autocomplete="off">いない
                </label>
            </div>
        </div>

        <div class="form-group">
           <label for="inputState">子供の人数</label><br>
           <select id="number-children" name="number-childre" class="form-control">
                <option selected></option>
                <option value="one">1人</option>
                <option value="two">2人</option>
                <option value="three">3人</option>
                <option value="four">4人</option>
                <option value="five">5人</option>
                <option value="six">6人</option>
            </select>
        </div>

        <div class="form-group">
           <label for="text">1人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="first-birthday" name="first-birthday" class="form-control"><br>
        </div>

        <div class="form-group">
           <label for="text">1人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="first-male" id="first-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="first-female" id="first-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="first-other" id="first-other" autocomplete="off">その他
                </label>
            </div>
        </div>

        <div class="form-group">
           <label for="text">2人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="second-birthday" id="second-birthday" class="form-control"><br>
        </div>

        <div class="form-group">
           <label for="text">2人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="second-male" id="second-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="second-female" id="second-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="second-other" id="second-other" autocomplete="off">その他
                </label>
            </div>
        </div>

        <div class="form-group">
           <label for="text">3人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="third-birthday" class="third-birthday"><br>
        </div>

        <div class="form-group">
           <label for="text">3人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="third-male" id="third-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="third-female" id="third-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="third-other" id="third-other" autocomplete="off">その他
                </label>
            </div>
        </div>

        <button type=submit>現在家計簿入力へ進む</button>
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
