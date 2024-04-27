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
<p>小さな端末でのみ表示。</p>
</div>
<!--/.sh-->

</div>
<!--/#menubar-->

</header>

<section id="mainimg">
<div id="text">
<div>
<h2>自身の家計の将来を無料で可視化！<br>
正しい資産形成とリスクマネジメントを全力で支援します！</h2>
<p><button class="btn1 large radius" type="button" data-target="#modal1" data-toggle="modal"><span class="pc">未来家計簿を作る</span><i class="btn1 large radius"></i></button></p>
<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                    <h2>個人情報取り扱い同意書</h2>
            </div>
            <div class="modal-body">
                <section>
                    <h3>１. 個人情報</h3>
                        <p>当社は、収集した個人情報を以下の目的のために利用いたします。<br>
                            「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先<br>
                            その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる<br>
                            情報（個人識別情報）（当該情報のみでは識別できないが、他の情報と容易に照合することができ、それにより当該個人を識別できるものを含む。）を指します。
                        </p>

                    <h3>２. 利用目的</h3>
                        <p>当社は、収集した個人情報を以下の目的のために利用いたします。<br><br>

                        <strong class="color-theme">・未来家計簿の作成</strong><br>
                        お客様の提供する個人情報を基に、将来の資産状況や家計の予測を行い、具体的な計画を提案します。<br>
                        <strong class="color-theme">・カスタマイズされたアドバイスの提供</strong><br>
                        未来家計簿診断結果に基づき、個々のお客様に最適な金融商品やサービスを推奨します。<br> 
                        <strong class="color-theme">・家計見直しのプロ（FP）/資産運用のプロ（IFA）との連携</strong><br>
                        お客様の同意を得た上で、お客様の金融状況とニーズに最適なFP（ファイナンシャルプランナー）またはIFA（独立金融アドバイザー）を紹介し、直接的なアドバイスやサポートを提供します。<br>
                        <strong class="color-theme">・通信とサポート</strong><br>
                        お客様からのお問い合わせに対する対応、および当社サービスに関する情報提供や更新通知を行います。<br> 
                        </p>

                    <h3>３.利用目的の変更</h3>
                        <p>当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。<br>
                            利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
                        </p>

                    <h3>４. 第三者提供</h3>
                        <p>当社は、以下の場合を除き、個人データを第三者へ提供することはありません。<br>
                            ・法令に基づく場合<br>
                            ・人の生命・身体・財産を保護するために必要で、本人の同意が得られない場合<br>
                            ・公衆衛生の向上や児童の健全な育成に必要で、本人の同意が得られない場合<br>
                            ・国または地方公共団体が法令の遂行に必要で、本人の同意が事務遂行に影響を与える場合<br>
                            ・FP/IFAへの情報提供のほか、本人の事前の同意を得た場合
                        </p>

                    <h3>５. FP/IFAへの情報提供</h3>
                        <p>当社は、以下の目的のため、個人情報をFP/IFAに提供することがあります。</p>
                        <p>当社は、以下の目的のため、個人情報をFP/IFAに提供することがあります。<br><br>

                            ・ライフプランシミュレーションの結果に基づいた個別の金融計画提案のため<br>
                            ・お客様の金融ニーズに適合する商品やサービスの提案のため<br><br>

                            情報共有は、お客様にとってのサービス向上を目的とし、お客様の事前の同意を基に行います。FP/IFAは、当社から提供された情報を秘密にし、<br>
                            当社の指示に従って適切に取り扱うことを契約により義務づけられています。
                        </p>

                    <h3>６. 開示請求</h3>
                        <p>お客様の個人情報について、ご本人は開示・訂正・削除・利用停止を請求する権利があります。手続にあたっては、ご本人確認のうえ対応させていただきます。<br><br>

                            この同意書は、顧客が自身の情報がどのように使用されるかを明確に理解し、適切に同意するために重要です。ご提供いただく情報の取り扱いに同意される場合のみ、当社のサービスをご利用いただけます。

                        </p>
                </section>
                <div class="modal-footer">
                    <button onclick="location.href='./future_calculation'" type="button" class="btn btn-primary mx-auto d-block" >同意する</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</section>

<main>

<section class="blur">

<h2>NEWS<span>お知らせ</span></h2>

<dl id="new">
<dt>2023/05/09<span>その他</span></dt>
<dd>サンプルテキスト</dd>
<dt>20XX/00/00<span class="icon-bg1">サービス</span></dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00<span class="icon-bg1">サービス</span></dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00</dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
<dt>20XX/00/00<span>その他</span></dt>
<dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
</dl>

</section>
<!--/#footermenu-->

<footer>

<small>フッター</small>

</footer>

</div>

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