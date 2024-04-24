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
<p>続いて、未来家計簿情報を入力していきましょう！ご回答いただく項目は以下の20項目です。</p>

<!-- Page Content -->
<div class="container mt-5 p-lg-5 bg-light">
    <form class="needs-validation" novalidate>
        <div class="form-group">
           <label for="text">マイホームを購入したのはいつですか3件。</label><br>
           <input type="text" id="myhome-buy" name="myhome-buy" class="form-control"><label for="text">年</label>
        </div>

        <div class="form-group">
        <label for="inputState">不動産投資物件は何件お持ちですか</label><br>
           <select id="estate" name="estate" class="form-control">
                <option selected></option>
                <option value="one">1件</option>
                <option value="two">2件</option>
                <option value="three">3件</option>
            </select>
        </div>

        <div class="form-group">
           <label for="text">1件目の不動産投資物件を購入したのはいつですか。</label><br>
           <input type="text" id="first-estate" name="first-estate" class="form-control"><label for="text">年</label>
        </div>

        <div class="form-group">
           <label for="text">1件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <input type="text" id="first-rental-income" name="first-rental-income" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">2件目の不動産投資物件を購入したのはいつですか。</label><br>
           <input type="text" id="second-estate" name="second-estate" class="form-control"><label for="text">年</label>
        </div>

        <div class="form-group">
           <label for="text">2件目の不動産投資物件の毎月の家賃収入はどれくらいですか。</label><br>
           <input type="text" id="second-rental-income" name="second-rental-income" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">現在の貯蓄残高を教えてください</label><br>
           <input type="text" id="savings-balance" name="savings-balance" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">学資保険の最終的に受取る合計額はどれくらいですか？（ざっくりでかまいません！）</label><br>
           <input type="text" id="last-Educational-insurance" name="last-Educational-insurance" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎年の旅行費はどれくらいですか？（ざっくりでかまいません。）</label><br>
           <input type="text" id="trip" name="trip class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">毎年のその他の出費（家電購入費やローンのボーナス払い等）はどれくらいですか？（ざっくりでかまいません！）</label><br>
           <input type="text" id="other-expense" name="other-expense" class="form-control"><label for="text">万円</label>
        </div>

        <label for="text">ここからの情報は、公的年金の受取額や退職金を概算で見積もるために使用します！</label>

        <div class="form-group">
           <label for="text">あなたの働き始めた年齢はおいくつですか。</label><br>
           <input type="text" id="start-wark" name="start-work" class="form-control"><label for="text">歳</label>
        </div>

        <div class="form-group">
           <label for="text">あなたの初任給はどれくらいでしたか？（ざっくりでかまいません！）</label><br>
           <input type="text" id="Starting-salary" name="Starting-salary" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">あなたの50歳の想定年収はどれくらいを目標としていますか？</label><br>
           <input type="text" id="Estimated-annual-income" name="Estimated-annual-income" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">あなたの現在の職場は退職金がありますか。</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="Severance-pay" id="Severance-pay" autocomplete="off" checked>ある
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="not-Severance-pay" id="not-Severance-pay" autocomplete="off">ない
                </label>
            </div>
        </div>

        <div class="form-group">
           <label for="text">パートナーの働き始めた年齢はおいくつですか。</label><br>
           <input type="text" id="spouse-start-work" name="spouse-start-work" class="form-control"><label for="text">歳</label>
        </div>

        <div class="form-group">
           <label for="text">パートナーの初任給はどれくらいでしたか？（ざっくりでかまいません！）</label><br>
           <input type="text" id="spouse-Starting-salary" name="spouse-Starting-salary" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text"></label>パートナーの50歳の想定年収はどれくらいを目標としていますか？<br>
           <input type="text" id="spouse-Estimated-annual-income" name="spouse-Estimated-annual-income" class="form-control"><label for="text">万円</label>
        </div>

        <div class="form-group">
           <label for="text">パートナーの現在の職場は退職金がありますか。</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="spouse-Severance-pay" id="spouse-Severance-pay" autocomplete="off" checked>ある
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="not-spouse-Severance-pay" id="spouse-Severance-pay" autocomplete="off">ない
                </label>
            </div>
        </div>

        <div class="form-group">
           <label for="inputState">>1人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="first-primary-school" name="first-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">1人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="first-junior-high-school" name="first-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">1人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="first-high-school" name="first-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">1人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="first-university" name="first-university" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">2人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="second-primary-school" name="second-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">2人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="second-junior-high-school" name="second-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">2人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="second-high-school" name="second-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">2人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="second-university" name="second-university" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">3人目のお子様の小学校区分を入力してください。（将来の希望ベースでかまいません！）</label><br>
           <select id="third-primary-school" name="third-primary-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">3人目のお子様の中学校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="third-junior-high-school" name="third-junior-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">3人目のお子様の高校区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="third-high-school" name="third-high-school" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <div class="form-group">
           <label for="inputState">3人目のお子様の大学区分を入力してください。 （将来の希望ベースでかまいません！）</label><br>
           <select id="third-university" name="third-university" class="form-control">
                <option selected></option>
                <option value="public">公立</option>
                <option value="private">私立</option>
            </select>
        </div>

        <button type="submit">現在家計簿情報に戻る</button>

        <button  class="btn1 large radius" type="button" data-target="#modal1" data-toggle="modal">未来家計簿を計算する</button>
        <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                            <h2>情報共有の同意のお願い</h2>
                    </div>
                    <div class="modal-body">
                        <section>
                            <h3>１. 個人情報</h3>
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
                        <div class="modal-footer">
                            <button onclick="location.href='./future_calculation'" type="button" class="btn btn-primary mx-auto d-block" >同意してサービスを利用する</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
