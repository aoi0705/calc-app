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

<main>

<section>

<h2>未来家計簿作成</h2>
<h3>家計簿を作成する上で、まずはあなたとご家族の情報を確認させてください！</h3>

<ul class="progressbar">
    <li class="active">本人・<br>家族構成</li>
    <li>現在家計簿<br>情報</li>
    <li>未来家計簿<br>情報</li>
</ul>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
<form class="needs-validation" id="calc1">
    @csrf
        <div class="form-group" id="sendemail">
           <label for="text">メールアドレス</label><br>
           <input type="text" id="email" name="email" class="form-control" placeholder="Wealth Journey＠gmail.com"><br>
           <div class="err-msg-email"></div>
           <button type=submit>ワンタイムパスワードを送付</button><br>
           <label for="text">メールアドレス宛に送付したワンタイムパスワードを入力してください（6桁）</label><br>
           <input type="text" id="onetime-password" name="onetime_password" class="form-control" placeholder="123456"><br>
           <div class="err-msg-name" id="onetimepasserr"></div>
           <button type=submit>認証</button>
        </div>

        <div class="form-group" style="display: none;" name="nickname_form" id="yournickname">
           <label for="text" id="debug_bold">あなたのニックネームを教えてください:</label><br>
           <input type="text" id="nickname" name="nickname" class="form-control" placeholder="ウェルジャーニー"><br>
           <div class="err-msg-name" id="nicknameerr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourbirthday" id="yourbirthday">
           <label for="text">あなたの生年月日（西暦）を教えてください。</label><br>
           <input type="text" id="birthday" name="birthday" class="form-control" wire:model.lazy="birth" placeholder="19870123"><br>
           <div class="err-msg-name" id="birtherr"></div>
        </div>

        <div class="form-group" style="display: none;" name="yourpost" id="yourpost">
           <label for="text">あなたの郵便番号を教えてください</label><br>
           <input type="text" id="post-number" name="post-number" class="form-control" placeholder="1040061"><br>
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
        </div>

        <div class="form-group" style="display: none;" name="yourpartner" id="yourpartner">
        <label for="text">配偶者・パートナーの有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="yourpartnerinput">
                <label class="btn btn-secondary" id="button1">
                    <input class="btn-check" type="radio" name="spouse" id="spouse" autocomplete="off" value="いる">いる
                </label>
                <label class="btn btn-secondary" id="button2">
                    <input class="btn-check" type="radio" name="spouse" id="single" autocomplete="off" value="いない">いない
                </label>
            </div>
            <div class="err-msg-name" id="partnererr"></div>
        </div>

        <div class="form-group" style="display: none;" name="partnerbirthday" id="partnerbirthday">
           <label for="text">配偶者・パートナーの生年月日を教えてください</label><br>
           <input type="text" id="spouse-birthday" name="spouse-birthday" class="form-control" placeholder="19870123"><br>
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
           <label for="text">子供の有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="yourchildreninput">
                <label class="btn btn-primary active">
                    <input type="radio" name="children" id="children" autocomplete="off" value="いる">いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="children" id="not-children" autocomplete="off" value="いない">いない
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
                <option value="seven">7人</option>
                <option value="eight">8人</option>
                <option value="nine">9人</option>
                <option value="ten">10人以上</option>
            </select>
            <div class="err-msg-name" id="childrennumbererr"></div>
        </div>

        <div class="form-group" style="display: none;" name="firstchildrenbirth" id="firstchildrenbirth">
           <label for="text">1人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="first-birthday" name="first-birthday" class="form-control" placeholder="20200510"><br>
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
            </div>
            <div class="err-msg-name" id="firstchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" name="secondchildrenbirth" id="secondchildrenbirth">
           <label for="text">2人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="second-birthday" id="second-birthday" class="form-control" placeholder="20200510"><br>
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
           <input type="text" id="third-birthday" name="third-birthday" class="form-control" placeholder="20200510"><br>
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

        <div class="form-group" style="display: none;" id="fourchildrenbirth" name="fourchildrenbirth">
           <label for="text">4人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="four-birthday" name="four-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="fourchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="fourchildrensex" name="fourchildrensex">
           <label for="text">4人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="fourchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="four-male" id="four-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="four-male" id="four-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="four-male" id="four-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="fourchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="fivechildrenbirth" name="fivechildrenbirth">
           <label for="text">5人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="five-birthday" name="five-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="fivechildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="fivechildrensex" name="fivechildrensex">
           <label for="text">5人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="fivechildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="five-male" id="five-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="five-male" id="five-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="five-male" id="five-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="fivechildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="sixchildrenbirth" name="sixchildrenbirth">
           <label for="text">6人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="six-birthday" name="six-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="sixchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="sixchildrensex" name="sixchildrensex">
           <label for="text">6人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="sixchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="six-male" id="six-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="six-male" id="six-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="six-male" id="six-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="sixchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="sevenchildrenbirth" name="sevenchildrenbirth">
           <label for="text">7人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="seven-birthday" name="seven-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="sevenchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="sevenchildrensex" name="sevenchildrensex">
           <label for="text">7人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="sevenchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="seven-male" id="seven-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="seven-male" id="seven-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="seven-male" id="seven-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="sevenchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="eightchildrenbirth" name="eightchildrenbirth">
           <label for="text">8人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="eight-birthday" name="eight-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="eightchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="eightchildrensex" name="eightchildrensex">
           <label for="text">8人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="eightchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="eight-male" id="eight-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="eight-male" id="eight-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="eight-male" id="eight-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="eightchildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="ninechildrenbirth" name="ninechildrenbirth">
           <label for="text">9人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="nine-birthday" name="nine-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="ninechildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="ninechildrensex" name="ninechildrensex">
           <label for="text">9人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="ninechildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="nine-male" id="nine-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="nine-male" id="nine-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="nine-male" id="nine-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="ninechildrensexerr"></div>
        </div>

        <div class="form-group" style="display: none;" id="tenchildrenbirth" name="tenchildrenbirth">
           <label for="text">10人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="ten-birthday" name="ten-birthday" class="form-control" placeholder="20200510"><br>
           <div class="err-msg-name" id="tenchildrenbirtherr"></div>
        </div>

        <div class="form-group" style="display: none;" id="tenchildrensex" name="tenchildrensex">
           <label for="text">10人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons" id="tenchildrensexinput">
                <label class="btn btn-primary active">
                    <input type="radio" name="ten-male" id="ten-male" autocomplete="off" checked>男性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="ten-male" id="ten-female" autocomplete="off">女性
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="ten-male" id="ten-other" autocomplete="off">その他
                </label>
            </div>
            <div class="err-msg-name" id="tenchildrensexerr"></div>
        </div>
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

<!--開閉ボタン（ハンバーガーアイコン）-->
<div id="menubar_hdr">
<span></span><span></span><span></span>
</div>

<!--ページの上部へ戻るボタン-->
<div class="pagetop"><a href="#"><i class="fas fa-angle-double-up"></i></a></div>

<!--パララックス（inview）-->

</body>
</html>
