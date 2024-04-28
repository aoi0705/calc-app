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
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
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
<p>小さな端末でのみ表示。</p>
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
<form class="needs-validation" action="form1.php" method="post" id="calc1">
    @csrf
        <div class="form-group-first">
           <label for="text">名前</label><br>
           <input type="text" id="name" name="name" class="form-control"><br>
           <div class="err-msg-name"></div>
           <button type=submit>ワンタイムパスワードを送付</button>
        </div>

        <div class="form-group">
           <label for="text">メールアドレス宛に送付したワンタイムパスワードを入力してください（6桁）</label><br>
           <input type="text" id="onetime-password" name="onetime_password" class="form-control"><br>
           <button type=submit>認証</button>
        </div>

        <div class="form-group" style="display: none;" name="nickname_form" id="yournickname">
           <label for="text">あなたのニックネームを教えてください:</label><br>
           <input type="text" id="nickname" name="nickname" class="form-control"><br>
           <div class="err-msg-name" id="nicknameerr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourbirthday" id="yourbirthday">
           <label for="text">あなたの生年月日（西暦）を教えてください。</label><br>
           <input type="text" id="birthday" name="birthday" class="form-control" wire:model.lazy="birth"><br>
           <div class="err-msg-name" id="birtherr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourpost" id="yourpost">
           <label for="text">あなたの郵便番号を教えてください</label><br>
           <input type="text" id="post-number" name="post-number" class="form-control"><br>
           <div class="err-msg-name" id="posterr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourjob" id="yourjob">
            <label for="inputState">あなたの職業を教えてください</label>
            <select id="job" name="job" class="form-control">
                <option selected></option>
                <option value="employee">会社員</option>
                <option value="housewife">主婦</option>
            </select>
            <div class="err-msg-name" id="joberr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourpartner" id="yourpartner">
           <label for="text">配偶者・パートナーの有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="yourpartnerinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="spouse" id="spouse" autocomplete="off" checked>いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="spouse" id="single" autocomplete="off">いない
                </label>
            </div>
            <div class="err-msg-name" id="partnererr"></div>
        </div>

        <div class="form-group" style="display: none;" name="partnerbirthday" id="partnerbirthday">
           <label for="text">配偶者・パートナーの生年月日を教えてください</label><br>
           <input type="text" id="spouse-birthday" name="spouse-birthday" class="form-control"><br>
           <div class="err-msg-name" id="partnerbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" name="partnerjob" id="partnerjob">
           <label for="inputState">配偶者・パートナーの職業を教えてください</label>
            <select id="spouse-job" name="spouse-job" class="form-control">
                <option selected></option>
                <option value="employee">会社員</option>
                <option value="housewife">主婦</option>
            </select>
            <div class="err-msg-name" id="partnerjoberr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourchildren" id="yourchildren">
           <label for="text">子供の有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="yourchildreninput">
                <label class="btn btn-primary active">
                    <input type="radio" name="children" id="children" autocomplete="off" checked>いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="children" id="not-children" autocomplete="off">いない
                </label>
            </div>
            <div class="err-msg-name" id="yourchildrenerr"></div>
        </div>

        <div class="form-group" style="display: none;" name="childrennumber" id="childrennumber">
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
            <div class="err-msg-name" id="childrennumbererr"></div>
        </div>

        <div class="form-group" style="display: none;" name="firstchildrenbirth" id="firstchildrenbirth">
           <label for="text">1人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="first-birthday" name="first-birthday" class="form-control"><br>
           <div class="err-msg-name" id="firstchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="firstchildrensex" name="firstchildrensex">
           <label for="text">1人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="firstchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="first-male" id="first-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="first-male" id="first-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="first-male" id="first-other" autocomplete="off">その他
                </label>
            </div>]
            <div class="err-msg-name" id="firstchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" name="secondchildrenbirth" id="secondchildrenbirth">
           <label for="text">2人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="second-birthday" id="second-birthday" class="form-control"><br>
           <div class="err-msg-name" id="secondchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="secondchildrensex" name="secondchildrensex">
           <label for="text">2人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="secondchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="second-male" id="second-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="second-male" id="second-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="second-male" id="second-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="secondchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="thirdchildrenbirth" name="thirdchildrenbirth">
           <label for="text">3人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="third-birthday" class="third-birthday"><br>
           <div class="err-msg-name" id="thirdchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="thirdchildrensex" name="thirdchildrensex">
           <label for="text">3人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="thirdchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="third-male" id="third-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="third-male" id="third-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="third-male" id="third-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="thirdchildrensexerr"></div>
        </div>

        <button type=submit class="btn btn-primary mx-auto d-block">現在家計簿入力へ進む</button>
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

<!--このテンプレート専用のスクリプト-->
<script src="js/main.js"></script>

<!--開閉ボタン（ハンバーガーアイコン）-->
<div id="menubar_hdr">
<span></span><span></span><span></span>
</div>

<!--ページの上部へ戻るボタン-->
<div class="pagetop"><a href="#"><i class="fas fa-angle-double-up"></i></a></div>

<!--パララックス（inview）-->

</body>
</html>
