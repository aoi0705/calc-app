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
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>

<body>

<div id="container">

<main>

<section>

<h2 class="calc-h2">未来家計簿作成</h2>

<ul class="progressbar">
    <li class="active">本人・<br>家族構成</li>
    <li>現在家計簿<br>情報</li>
    <li>未来家計簿<br>情報</li>
</ul>

<h3 class="calc-h3">家計簿を作成する上で、まずはあなたとご家族の情報を確認させてください！</h3>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
<form class="needs-validation" id="calc1" onsubmit="return false;">
    @csrf
        <div class="form-group" id="sendemail">
           <label for="text">メールアドレス</label><br>
           <input type="text" id="email" name="email" class="form-control" placeholder="Wealth Journey＠gmail.com"><br>
           <div class="err-msg-name" id="err-msg-email"></div>
           <button type=button class="form_button" id="onetimepass">ワンタイムパスワードを送付</button><br><br>
           <label for="text">メールアドレス宛に送付したワンタイムパスワードを入力してください（6桁）</label><br>
           <input type="text" id="onetime-password" name="onetime_password" class="form-control" placeholder="123456"><br>
           <div class="err-msg-name" id="onetimepasserr"></div>
           <button type=submit class="form_button" id="opass_auth">認証</button><br>
        </div>

        <div class="form-group" style="display: none;" name="nickname_form" id="yournickname">
           <label for="text" id="debug_bold">あなたのニックネームを教えてください</label><br>
           <input type="text" id="nickname" name="nickname" class="form-control" placeholder="ウェルジャーニー"><br>
           <div class="err-msg-name" id="nicknameerr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourbirthday" id="yourbirthday">
           <label for="text">あなたの生年月日（西暦）を教えてください。</label><br>
           <input type="number" id="birthday" name="birthday" class="form-control" wire:model.lazy="birth" placeholder="19870123"><br>
           <div class="err-msg-name" id="birtherr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourpost" id="yourpost">
           <label for="text">あなたの郵便番号を教えてください</label><br>
           <input type="number" id="post-number" name="post-number" class="form-control" placeholder="1040061"><br>
           <div class="err-msg-name" id="posterr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourjob" id="yourjob">
            <label for="inputState">あなたの職業を教えてください</label>
            <select id="job" name="job" class="form-control">
                <option selected></option>
                <option value="会社役員">会社役員</option>
                <option value="会社員">会社員</option>
                <option value="自営業">自営業</option>
                <option value="主婦・主夫・パート">主婦・主夫・パート</option>
                <option value="その他">その他</option>
            </select>
            <div class="err-msg-name" id="joberr"></div>
        </div><br>

        <div class="form-group" style="display: none;" name="yourpartner" id="yourpartner">
        <label for="text">配偶者・パートナーの有無</label><br>
            <div class="radiobox" id="yourpartnerinput">
                <input id="spouse" class="radiobutton" name="spouse" type="radio" value="いる" />
                <label for="spouse" class="radio_label">いる</label>
                <input id="single" class="radiobutton" name="spouse" type="radio" value="いない" />
                <label for="single" class="radio_label">いない</label> 
            </div>
            <div class="err-msg-name" id="partnererr"></div>
        </div><br>

        <div class="form-group" style="display: none;" name="partnerbirthday" id="partnerbirthday">
           <label for="text">配偶者・パートナーの生年月日を教えてください</label><br>
           <input type="number" id="spouse-birthday" name="spouse-birthday" class="form-control" placeholder="19870123"><br>
           <div class="err-msg-name" id="partnerbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" name="partnerjob" id="partnerjob">
           <label for="inputState">配偶者・パートナーの職業を教えてください</label>
            <select id="spouse-job" name="spouse-job" class="form-control">
                <option selected></option>
                <option value="会社役員">会社役員</option>
                <option value="会社員">会社員</option>
                <option value="自営業">自営業</option>
                <option value="主婦・主夫・パート">主婦・主夫・パート</option>
                <option value="その他">その他</option>
            </select>
            <div class="err-msg-name" id="partnerjoberr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourchildren" id="yourchildren">
           <label for="text">子どもの有無</label><br>
           <div class="radiobox" id="yourchildreninput">
                <input id="children" class="radiobutton" name="children" type="radio" value="いる" />
                <label for="children" class="radio_label">いる</label>
                <input id="not-children" class="radiobutton" name="children" type="radio" value="いない" />
                <label for="not-children" class="radio_label">いない</label> 
            </div>
            <div class="err-msg-name" id="yourchildrenerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" name="childrennumber" id="childrennumber">
           <label for="inputState">子どもの人数</label><br>
           <select id="number-children" name="number-childre" class="form-control">
                <option selected></option>
                <option value="one">1人</option>
                <option value="two">2人</option>
                <option value="three">3人</option>
                <option value="four">4人</option>
                <option value="five">5人</option>
                <option value="six">6人</option>
                <option value="seven">7人</option>
                <option value="eight">8人</option>
                <option value="nine">9人</option>
                <option value="ten">10人以上</option>
            </select>
            <div class="err-msg-name" id="childrennumbererr"></div>
        </div><br>

        <div class="form-group" style="display: none;" name="firstchildrenbirth" id="firstchildrenbirth">
           <label for="text">1人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="first-birthday" name="first-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="firstchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="firstchildrensex" name="firstchildrensex">
           <label for="text">1人目の性別</label><br>
           <div class="radiobox" id="firstchildrensexinput">
                <input id="first-male" class="radiobutton" name="first-male" type="radio" value="男性" />
                <label for="first-male" class="radio_label">男性</label>
                <input id="first-female" class="radiobutton" name="first-male" type="radio" value="女性" />
                <label for="first-female" class="radio_label">女性</label> 
                <input id="first-other" class="radiobutton" name="first-male" type="radio" value="その他" />
                <label for="first-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="firstchildrensexerr"></div>
        </div><br>



        <div class="form-group" style="display: none;" name="secondchildrenbirth" id="secondchildrenbirth">
           <label for="text">2人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" name="second-birthday" id="second-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="secondchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="secondchildrensex" name="secondchildrensex">
           <label for="text">2人目の性別</label><br>
           <div class="radiobox" id="secondchildrensexinput">
                <input id="second-male" class="radiobutton" name="second-male" type="radio" value="男性" />
                <label for="second-male" class="radio_label">男性</label>
                <input id="second-female" class="radiobutton" name="second-male" type="radio" value="女性" />
                <label for="second-female" class="radio_label">女性</label> 
                <input id="second-other" class="radiobutton" name="second-male" type="radio" value="その他" />
                <label for="second-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="secondchildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="thirdchildrenbirth" name="thirdchildrenbirth">
           <label for="text">3人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="third-birthday" name="third-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="thirdchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="thirdchildrensex" name="thirdchildrensex">
           <label for="text">3人目の性別</label><br>
           <div class="radiobox" id="thirdchildrensexinput">
                <input id="third-male" class="radiobutton" name="third-male" type="radio" value="男性" />
                <label for="third-male" class="radio_label">男性</label>
                <input id="third-female" class="radiobutton" name="third-male" type="radio" value="女性" />
                <label for="third-female" class="radio_label">女性</label> 
                <input id="third-other" class="radiobutton" name="third-male" type="radio" value="その他" />
                <label for="third-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="thirdchildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="fourchildrenbirth" name="fourchildrenbirth">
           <label for="text">4人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="four-birthday" name="four-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="fourchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="fourchildrensex" name="fourchildrensex">
           <label for="text">4人目の性別</label><br>
           <div class="radiobox" id="fourchildrensexinput">
                <input id="four-male" class="radiobutton" name="four-male" type="radio" value="男性" />
                <label for="four-male" class="radio_label">男性</label>
                <input id="four-female" class="radiobutton" name="four-male" type="radio" value="女性" />
                <label for="four-female" class="radio_label">女性</label> 
                <input id="four-other" class="radiobutton" name="four-male" type="radio" value="その他" />
                <label for="four-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="fourchildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="fivechildrenbirth" name="fivechildrenbirth">
           <label for="text">5人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="five-birthday" name="five-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="fivechildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="fivechildrensex" name="fivechildrensex">
           <label for="text">5人目の性別</label><br>
           <div class="radiobox" id="fivechildrensexinput">
                <input id="five-male" class="radiobutton" name="five-male" type="radio" value="男性" />
                <label for="five-male" class="radio_label">男性</label>
                <input id="five-female" class="radiobutton" name="five-male" type="radio" value="女性" />
                <label for="five-female" class="radio_label">女性</label> 
                <input id="five-other" class="radiobutton" name="five-male" type="radio" value="その他" />
                <label for="five-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="fivechildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="sixchildrenbirth" name="sixchildrenbirth">
           <label for="text">6人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="six-birthday" name="six-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="sixchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="sixchildrensex" name="sixchildrensex">
           <label for="text">6人目の性別</label><br>
           <div class="radiobox" id="sixchildrensexinput">
                <input id="six-male" class="radiobutton" name="six-male" type="radio" value="男性" />
                <label for="six-male" class="radio_label">男性</label>
                <input id="six-female" class="radiobutton" name="six-male" type="radio" value="女性" />
                <label for="six-female" class="radio_label">女性</label> 
                <input id="six-other" class="radiobutton" name="six-male" type="radio" value="その他" />
                <label for="six-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="sixchildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="sevenchildrenbirth" name="sevenchildrenbirth">
           <label for="text">7人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="seven-birthday" name="seven-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="sevenchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="sevenchildrensex" name="sevenchildrensex">
           <label for="text">7人目の性別</label><br>
           <div class="radiobox" id="sevenchildrensexinput">
                <input id="seven-male" class="radiobutton" name="seven-male" type="radio" value="男性" />
                <label for="seven-male" class="radio_label">男性</label>
                <input id="seven-female" class="radiobutton" name="seven-male" type="radio" value="女性" />
                <label for="seven-female" class="radio_label">女性</label> 
                <input id="seven-other" class="radiobutton" name="seven-male" type="radio" value="その他" />
                <label for="seven-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="sevenchildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="eightchildrenbirth" name="eightchildrenbirth">
           <label for="text">8人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="eight-birthday" name="eight-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="eightchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="eightchildrensex" name="eightchildrensex">
           <label for="text">8人目の性別</label><br>
           <div class="radiobox" id="eightchildrensexinput">
                <input id="eight-male" class="radiobutton" name="eight-male" type="radio" value="男性" />
                <label for="eight-male" class="radio_label">男性</label>
                <input id="eight-female" class="radiobutton" name="eight-male" type="radio" value="女性" />
                <label for="eight-female" class="radio_label">女性</label> 
                <input id="eight-other" class="radiobutton" name="eight-male" type="radio" value="その他" />
                <label for="eight-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="eightchildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="ninechildrenbirth" name="ninechildrenbirth">
           <label for="text">9人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="nine-birthday" name="nine-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="ninechildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="ninechildrensex" name="ninechildrensex">
           <label for="text">9人目の性別</label><br>
           <div class="radiobox" id="ninechildrensexinput">
                <input id="nine-male" class="radiobutton" name="nine-male" type="radio" value="男性" />
                <label for="nine-male" class="radio_label">男性</label>
                <input id="nine-female" class="radiobutton" name="nine-male" type="radio" value="女性" />
                <label for="nine-female" class="radio_label">女性</label> 
                <input id="nine-other" class="radiobutton" name="nine-male" type="radio" value="その他" />
                <label for="nine-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="ninechildrensexerr"></div>
        </div><br>

        <div class="form-group" style="display: none;" id="tenchildrenbirth" name="tenchildrenbirth">
           <label for="text">10人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="number" id="ten-birthday" name="ten-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="tenchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="tenchildrensex" name="tenchildrensex">
           <label for="text">10人目の性別</label><br>
           <div class="radiobox" id="tenchildrensexinput">
                <input id="ten-male" class="radiobutton" name="ten-male" type="radio" value="男性" />
                <label for="ten-male" class="radio_label">男性</label>
                <input id="ten-female" class="radiobutton" name="ten-male" type="radio" value="女性" />
                <label for="ten-female" class="radio_label">女性</label> 
                <input id="ten-other" class="radiobutton" name="ten-male" type="radio" value="その他" />
                <label for="ten-other" class="radio_label">その他</label> 
            </div>
            <div class="err-msg-name" id="tenchildrensexerr"></div>
        </div><br>
</div><!-- /container -->

</section>

</main>

<!--/#footermenu-->

<footer class="bg1">
    <label class="last-state">残り</label>
    <label class="last-state-page">7</label>
    <label class="last-state">項目</label>
    <button type="button" class="btn btn-primary custom-btn-not" id="next_page2-not" disabled>現在家計簿入力へ進む</button>
</footer>

</form>

</div>
<!--/#container-->

<!--jQueryの読み込み-->

<!--このテンプレート専用のスクリプト-->
<script src="js/main.js"></script>

<!--開閉ボタン（ハンバーガーアイコン）
<div id="menubar_hdr">
<span></span><span></span><span></span>
</div>-->

<!--ページの上部へ戻るボタン-->
<div class="pagetop"><a href="#"><i class="fas fa-angle-double-up"></i></a></div>

<!--パララックス（inview）-->

</body>
</html>
