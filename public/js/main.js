// const { stringify } = require("postcss");

//タイマー
$(function() {
	var timer = false;
	$(window).resize(function() {
		if(timer !== false){
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
		}, 500);
	});
});


// menu
$(window).on("load resize", function() {
	setTimeout(function(){

		var winW = window.innerWidth;
		var winBP = 900;	//ブレイクポイント

			//小さな端末用
			if(winW < winBP) {
				$('body').addClass('s').removeClass('p');
				$('#menubar').addClass('dn').removeClass('db');
				$('#menubar_hdr').addClass('db').removeClass('dn').removeClass('ham');
				
					// 同一ページへのリンクの場合に開閉メニューを閉じる処理
					$('#menubar a[href^="#"]').click(function() {
						$('#menubar').removeClass('db');
						$('#menubar_hdr').removeClass('ham');
					});
					
			//大きな端末用
			} else {
				$('body').addClass('p').removeClass('s');
				$('#menubar').addClass('db').removeClass('dn');
				$('#menubar_hdr').removeClass('db').addClass('dn');

			}

	}, 100);
});


//ハンバーガーメニューをクリックした際の処理
$(function() {
	$('#menubar_hdr').click(function() {
		$(this).toggleClass('ham');

			if($(this).hasClass('ham')) {
				$('#menubar').addClass('db').removeClass('dn');
			} else {
				$('#menubar').addClass('dn').removeClass('db');
			}

	});
});


//pagetop
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});


//スムーススクロール
$(window).on('load', function() {
	var hash = location.hash;
	if(hash) {
		$('body,html').scrollTop(0);
		setTimeout(function() {
			var target = $(hash);
			var scroll = target.offset().top - 40;
			$('body,html').animate({scrollTop:scroll},500);
		}, 100);
	}
});
$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top - 40;
            $('body,html').animate({scrollTop:target},500);
            return false;
    });
});


// 汎用開閉処理
$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});


var respone = 0;
var comp_flg = false;
var last_koumoku = "0";
// バリデーションの処理
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#email');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#email');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('.err-msg-name');
        if(!name.value.match(/.+@.+\..+/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '有効なメールアドレスの形式ではありません。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=1;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            const email = document.getElementById('email').value;
            console.log(document.querySelector('#email').value)
            sessionStorage.setItem('email', email);

            if(submit.getAttribute("count_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ="";
                // クラスを削除
                name.classList.remove('input-invalid');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                for(var i=3;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});


$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.getElementById('onetimepass');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        e.preventDefault();
        let min = 100000 ;
        let max = 999999 ;
        
        var numRangeInt = (Math.floor( Math.random() * (max + 1 - min) ) + min)
        sessionStorage.setItem('opass', String(numRangeInt));

        jQuery.ajax({
    
            type: 'post',
            url: 'opass.php', //送信先PHPファイル
            data: {'opass' : sessionStorage.getItem('opass'),'email' : sessionStorage.getItem('email')}
        });

    });
});

$(function(){
    //フラッシュメッセージ用の関数をjqueryに登録
    $.fn.flash_message = function(options) {
        //デフォルト値
        options = $.extend({
            text: '完了しました',
            time: 3000,
            how: 'before',
            class_name: ''
        }, options);

        return $(this).each(function() {
            //指定したセレクタを探して取得
            if ($(this).find('.flash_message').get(0)) {
                $(this).find('.flash_message').remove();
            }

            var message = $('<span />', {
                'class': 'flash_message ' + options.class_name,
                text: options.text
            //フェードイン表示
            });

            $(this)[options.how](message).addClass('show');
            //delayさせてからフェードアウト
            message.delay(options.time).queue(function(){
                $(this).parents('#flash-msg-area').removeClass('show');
            });
        });
    };

    // ボタンクリックでフラッシュメッセージ（成功）を表示
    $('#onetimepass').click(function() {
        $('#flash-msg-area').flash_message({
            text: 'ワンタイムパスワードが送付されました。',
            how: 'append'
        });
    });

})


//ワンタイムパスのバリデーション
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.getElementById('opass_auth');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        
        // デフォルトアクションをキャンセル
        e.preventDefault();
        console.log("lick_event")

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#onetime-password');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#onetimepasserr');

        var o = sessionStorage.getItem("opass")

        if((String(name.value) != String(o))){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '正しいワンタイムパスワードを入力してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            let box = document.querySelector('#yournickname');
            //styleのdisplayを変更する関数
            box.style.display='';
            box.setAttribute('element_yet','not_yet');
        }
	});
});


$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.getElementById('nickname');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nickname');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#nicknameerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(name.value == ""){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '入力されていません。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=2;i<30;i++){
                console.log(ele_arr);
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            
            let box = document.querySelector('#yourbirthday');
            if(box.getAttribute("element_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                for(var i=3;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#birtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力して下さい';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める][]
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=3;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            if(submit.getAttribute("count_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                let box = document.querySelector('#yourpost');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                let box = document.querySelector('#yourpost');
                //styleのdisplayを変更する関数
                box.style.display='';
                for(var i=2;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpost');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#yourpost');
		const name_input = document.querySelector('#post-number');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#posterr');
        if(!name_input.value.match(/^([0-9]{7})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '7桁の半角数字で入力して下さい';
            // クラスを追加(フォームの枠線を赤くする)
            name_input.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=4;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            if(submit.getAttribute("count_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                let box = document.querySelector('#yourjob');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                for(var i=3;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#job');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#job');
		const name_input = document.querySelector('#job');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#joberr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=5;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            if(submit.getAttribute("count_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                let box = document.querySelector('#yourpartner');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                for(var i=4;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

var old_val = "0";
var spouse_flg1 = false;
var spouse_flg2 = false;
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpartnerinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        let ele = document.getElementsByName("spouse")
        let len = ele.length;
        let checkValue = '';
        for (let i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue = ele.item(i).value;
            }
        }
        var ele_arr = document.getElementsByClassName("form-group");

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse');
		const name2 = document.querySelector('#single');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#partnererr');
        if(!name.value == true && !name2.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=6;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            if(checkValue == 'いる'){
                if(old_val == 'いない'){
                    if(spouse_flg1 == false && spouse_flg1 == false){
                        var st = document.querySelector('.last-state-page');
                        st.textContent = Number(st.textContent) + 2
                        let box = document.querySelector("#partnerbirthday")
                        box.style.display = '';
                    }
                    else if(spouse_flg1 == true && spouse_flg2 == false){
                        var st = document.querySelector('.last-state-page');
                        st.textContent = Number(st.textContent) + 1
                        let box = document.querySelector("#partnerbirthday")
                        box.style.display = '';
                        let box2 = document.querySelector("#partnerjob")
                        box2.style.display = '';
                    }
                    else if(spouse_flg1 == true && spouse_flg2 == true){
                        let box = document.querySelector("#partnerbirthday")
                        box.style.display = '';
                        let box2 = document.querySelector("#partnerjob")
                        box2.style.display = '';
                    }
                }
                else if(old_val == '0'){
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1
                    let box = document.querySelector("#partnerbirthday")
                    box.style.display = '';
                }
                old_val = 'いる';
            }
            else if(checkValue == 'いない'){
                if(old_val == 'いる'){
                    let box = document.querySelector("#partnerbirthday")
                    box.style.display = 'none';
                    let box2 = document.querySelector("#partnerjob")
                    box2.style.display = 'none';

                    if(spouse_flg1 == false && spouse_flg2 == false){
                        var st = document.querySelector('.last-state-page');
                        st.textContent = Number(st.textContent) - 2
                    }
                    else if(spouse_flg1 == true && spouse_flg2 == false){
                        var st = document.querySelector('.last-state-page');
                        st.textContent = Number(st.textContent) - 1
                    }
                }
                else if(old_val == '0'){
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) - 1
                    let box = document.querySelector("#yourchildren")
                    box.style.display = '';
                }

                old_val = 'いない';
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#partnerbirtherr');
        if((!name.value.match(/^([0-9]{8})$/))){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=7;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            spouse_flg1 = false;
        }else{
            if(submit.getAttribute("count_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                let box = document.querySelector('#partnerjob');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                for(var i=6;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            spouse_flg1 = true;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-job');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-job');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#partnerjoberr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=8;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            spouse_flg2 = false;

        }else{
            if(submit.getAttribute("count_yet") != "not_yet"){
                // エラーメッセージのテキストに空文字を代入
                errMsgName.textContent ='';
                // クラスを削除
                name.classList.remove('input-invalid');
                // 次の項目を表示
                let box = document.querySelector('#yourchildren');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            else{
                for(var i=7;i<30;i++){
                    if(ele_arr[i].getAttribute('element_yet') == 'not_yet'){
                        if(ele_arr[i].style.display != ''){
                            ele_arr[i].style.display = ''
                            
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) - 1
                        }
                    }
                };
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            spouse_flg2 = true;
        }
	});
});

var number_arr = new Array();
var old_val2 = "0";
var last_s = 9;
var old_state = 0;
var sele_val;
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourchildreninput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        var ele_arr = document.getElementsByClassName("form-group");
        let ele = document.getElementsByName("children")
        let len = ele.length;
        let checkValue = '';
        for (let i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue = ele.item(i).value;
            }
        }

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#children');
		const name2 = document.querySelector('#not-children');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourchildrenerr');
        if(!name.value == true && !name2.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=9;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            // 次の項目を表示
            if(checkValue == 'いる'){
                let box = document.querySelector('#childrennumber');
                box.style.display = ''
                if(old_val2 == 'いない'){
                    if(sele_val == "one"){
                        var numb = 12;
                    }
                    else if(sele_val == "two"){
                        var numb = 14;
                    }
                    else if(sele_val == "three"){
                        var numb = 16;
                    }
                    else if(sele_val == "four"){
                        var numb = 18;
                    }
                    else if(sele_val == "five"){
                        var numb = 20;
                    }
                    else if(sele_val == "six"){
                        var numb = 22;
                    }
                    else if(sele_val == "seven"){
                        var numb = 24;
                    }
                    else if(sele_val == "eight"){
                        var numb = 26;
                    }
                    else if(sele_val == "nine"){
                        var numb = 28;
                    }
                    else if(sele_val == "ten"){
                        var numb = 30;
                    }

                    var check_flg = false;
                    for(var i=10;i<numb;i++){
                        if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                            ele_arr[i].style.display = ''
                            //var st = document.querySelector('.last-state-page');
                            //st.textContent = Number(st.textContent) + 1;
                            check_flg = true;
                        }
                        else if(ele_arr[i].getAttribute("element_yet") != 'not_yet'){
                            var st = document.querySelector('.last-state-page');
                            st.textContent = Number(st.textContent) + 1;
                            check_flg = true;
                        }
                    }
                    if(document.querySelector('.last-state-page').textContent == '0' && check_flg == false){
                        var st = document.querySelector('.last-state-page');
                        st.textContent = '1';
                    }

                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
                else if(old_val2 == '0'){
                    box.style.display = '';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = "1"
                    box.setAttribute('element_yet','not_yet');
                }
                old_val2 = 'いる';
                
            }
            else if(checkValue == 'いない'){
                for (var i=9;i<30;i++){
                    if(ele_arr[i].style.display == ''){
                        ele_arr[i].style.display = 'none';
                        last_s = i
                    }
                }
                let count = document.querySelector('.last-state-page');
                count.textContent = '0'
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id = "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
                old_val2 = "いない";
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

var one_birth = false;
var one_sex = false;
var second_birth = false;
var second_sex = false;
var third_birth = false;
var third_sex = false;
var four_birth = false;
var four_sex = false;
var five_birth = false;
var five_sex = false;
var six_birth = false;
var six_sex = false;
var seven_birth = false;
var seven_sex = false;
var eight_birth = false;
var eight_sex = false;
var nine_birth = false;
var nine_sex = false;
var ten_birth = false;
var ten_sex = false;
var ele_bool = new Array(one_birth,one_sex,second_birth,second_sex,third_birth,third_sex,four_birth,four_sex,five_birth,five_sex,six_birth,six_sex,seven_birth,seven_sex,eight_birth,eight_sex,nine_birth,nine_sex,ten_birth,ten_sex)
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#number-children');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#number-children');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#childrennumbererr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=10;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var select = document.getElementById("number-children");
            children_num = select.value;
            var ele_arr = document.getElementsByClassName("form-group");
            var last_ele = 9;
            var arr_cnt = 0;

            if(children_num == "one"){
                var las = 2;
                for(var i=10;i<12;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=12;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                console.log(one_birth)
                console.log(one_sex)
                if(one_birth == false && one_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 2
                }
                else if(one_birth == true && one_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }

            else if(children_num == "two"){
                var las = 4;
                for(var i=10;i<14;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=14;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 4
                }
                else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }
            else if(children_num == "three"){
                var las = 6;

                for(var i=10;i<16;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=16;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 6
                }
                else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 5
                }
                else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }
            else if(children_num == "four"){
                var las = 8;

                for(var i=10;i<18;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=18;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 8
                }
                else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 7
                }
                else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 6
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 5
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true && four_birth == false && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true && four_birth == true && four_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }
            else if(children_num == "five"){
                var las = 10;

                for(var i=10;i<20;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=20;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 10
                }
                else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 9
                }
                else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 8
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 7
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 6
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 5
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true && four_birth == false && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true && four_birth == true && four_sex == false && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true && four_birth == true && four_sex == true && five_birth == false && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true && four_birth == true && four_sex == true && five_birth == true && five_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }
            else if(children_num == "six"){
                var las = 12;

                for(var i=10;i<22;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=22;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 12
                }
                else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 11
                }
                else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 10
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 9
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 8
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 7
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                     four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 6
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                     four_birth == true && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 5
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                     four_birth == true && four_sex == true && five_birth == false && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                     four_birth == true && four_sex == true && five_birth == true && five_sex == false && six_birth == false && six_sex == false){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == false && six_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 2
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == false){
               let count = document.querySelector('.last-state-page');
               count.textContent =  1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
           
            }
            else if(children_num == "seven"){
                var las = 14;

                for(var i=10;i<24;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=24;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }
                
                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 14
               }
               else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 13
               }
               else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 12
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 11
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 10
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 9
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 8
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 7
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 6
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 5
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                   four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == false && six_sex == false && 
                   seven_birth == false && seven_sex == false){
                  let count = document.querySelector('.last-state-page');
                  count.textContent = 4
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == false && 
               seven_birth == false && seven_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 3
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
               seven_birth == false && seven_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
          
            }
            else if(children_num == "eight"){
                var las = 16;

                for(var i=10;i<26;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=26;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 16
               }
               else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 15
               }
               else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 14
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == fals && eight_birth == false && eight_sex == falsee){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 13
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 12
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 11
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 10
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 9
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 8
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 7
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                   four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == false && six_sex == false && 
                   seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
                  let count = document.querySelector('.last-state-page');
                  count.textContent = 6
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == false && 
               seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 5
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
               seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == false && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == false && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }
            else if(children_num == "nine"){
                var las = 18;

                for(var i=10;i<28;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                for(var i=28;i<30;i++){
                    if(ele_arr[i].style.display != 'none'){
                        ele_arr[i].style.display = 'none';
                    }
                }

                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 18
               }
               else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 17
               }
               else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 16
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == fals && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 15
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 14
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 13
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 12
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 11
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 10
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 9
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                   four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == false && six_sex == false && 
                   seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                  let count = document.querySelector('.last-state-page');
                  count.textContent = 8
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == false && 
               seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 7
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
               seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 6
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 5
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == false && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == true && nine_birth == false && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == true && nine_birth == true && nine_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }
            else if(children_num == "ten"){
                var las = 20;
                for(var i=10;i<30;i++){
                    if(ele_arr[i].getAttribute('spone') == 'y'){
                        ele_arr[i].style.display = '';
                        last_ele = i;
                    }
                }
                console.log(last_ele)
                if(last_ele < 30){
                    ele_arr[last_ele+1].style.display = ''
                    ele_arr[last_ele+1].setAttribute('element_yet','not_yet');
                }
                if(one_birth == false && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 20
               }
               else if(one_birth == true && one_sex == false && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 19
               }
               else if(one_birth == true && one_sex == true && second_birth == false && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 18
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == false && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == fals && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 17
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == false && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 16
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == false &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 15
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == false && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 14
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == false && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 13
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == false && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 12
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == false && six_birth == false && six_sex == false && 
                    seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 11
               }
               else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                   four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == false && six_sex == false && 
                   seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                   ten_birth == false && ten_sex == false){
                  let count = document.querySelector('.last-state-page');
                  count.textContent = 10
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == false && 
               seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
               ten_birth == false && ten_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 9
                }
              else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
               four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
               seven_birth == false && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
               ten_birth == false && ten_sex == false){
              let count = document.querySelector('.last-state-page');
              count.textContent = 8
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == false && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 7
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == false && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 6
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == false && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 5
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == true && nine_birth == false && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 4
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == true && nine_birth == true && nine_sex == false && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 3
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == true && nine_birth == true && nine_sex == true && 
                    ten_birth == false && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 2
                }
                else if(one_birth == true && one_sex == true && second_birth == true && second_sex == true && third_birth == true && third_sex == true &&
                    four_birth == true && four_sex == true && five_birth == true && five_sex == true && six_birth == true && six_sex == true && 
                    seven_birth == true && seven_sex == true && eight_birth == true && eight_sex == true && nine_birth == true && nine_sex == true && 
                    ten_birth == true && ten_sex == false){
                   let count = document.querySelector('.last-state-page');
                   count.textContent = 1
                }
                else{
                    let count = document.querySelector('.last-state-page');
                    count.textContent = 0
                }
            }

            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            sele_val = document.getElementById("number-children").value
        }
	});
});


$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#firstchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=11;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            one_birth = false;
            document.querySelector("#firstchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#firstchildrensex');
            if(one_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "one"){
                    var children_number_int = 1;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '9'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '11'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '13'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '15'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '17'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '19'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=11;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            one_birth = true;
            document.querySelector("#firstchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#firstchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-male');
		const name2 = document.querySelector('#first-female');
		const name3 = document.querySelector('#first-other');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#firstchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=12;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            one_sex = false;
            document.querySelector("#firstchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#secondchildrenbirth');
            if(second_birth == false){
                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "one"){
                    var children_number_int = 1;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '8'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '10'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '12'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '14'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '16'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '18'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=12;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            one_sex = true;
            document.querySelector("#firstchildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#secondchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=13;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            second_birth = false;
            document.querySelector("#secondchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#secondchildrensex');
            if(second_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "two"){
                    var children_number_int = 2;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');

                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '9'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '11'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '13'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '15'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '17'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=13;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            second_birth = true;
            document.querySelector("#secondchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#secondchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-male');
        const name2 = document.querySelector('#second-female');
		const name3 = document.querySelector('#second-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#secondchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=14;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            second_sex = false;
            document.querySelector("#secondchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#thirdchildrenbirth');
            if(third_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "two"){
                    var children_number_int = 2;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '8'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '10'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '12'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '14'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '16'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=14;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            second_sex = true;
            document.querySelector("#secondchildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#thirdchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=15;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            third_birth = false;
            document.querySelector("#thirdchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#thirdchildrensex');
            if(third_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "three"){
                    var children_number_int = 3;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '9'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '11'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '13'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '15'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=15;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            third_birth = true;
            document.querySelector("#thirdchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#thirdchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-male');
		const name2 = document.querySelector('#third-female');
		const name3 = document.querySelector('#third-other');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#thirdchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=16;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            third_sex = false;
            document.querySelector("#thirdchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#fourchildrenbirth');
            if(four_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "three"){
                    var children_number_int = 3;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '8'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '10'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '12'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '14'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=16;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            third_sex = true;
            document.querySelector("#thirdchildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#fourchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=17;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            four_birth = false;
            document.querySelector("#fourchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#fourchildrensex');
            if(four_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "four"){
                    var children_number_int = 4;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '9'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '11'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '13'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=17;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            four_birth = true;
            document.querySelector("#fourchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#fourchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-male');
        const name2 = document.querySelector('#four-female');
		const name3 = document.querySelector('#four-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#fourchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=2;i<18;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            four_sex = false;
            document.querySelector("#fourchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#fivechildrenbirth');
            if(five_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "four"){
                    var children_number_int = 4;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '8'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '10'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '12'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=18;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            four_sex = true;
            document.querySelector("#fourchildrensex").setAttribute("spone","y")

        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#fivechildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=19;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            five_birth = false;
            document.querySelector("#fivechildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#fivechildrensex');
            if(five_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "five"){
                    var children_number_int = 5;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '9'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '11'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=19;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            five_birth = true;
            document.querySelector("#fivechildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#fivechildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-male');
        const name2 = document.querySelector('#five-female');
		const name3 = document.querySelector('#five-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#fivechildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=20;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            five_sex = false;
            document.querySelector("#fivechildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#sixchildrenbirth');
            if(six_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "five"){
                    var children_number_int = 5;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '8'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '10'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=20;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            five_sex = true;
            document.querySelector("#fivechildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#sixchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=21;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            six_birth = false;
            document.querySelector("#sixchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#sixchildrensex');
            if(six_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "six"){
                    var children_number_int = 6;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '9'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=21;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            six_birth = true;
            document.querySelector("#sixchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#sixchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-male');
        const name2 = document.querySelector('#six-female');
		const name3 = document.querySelector('#six-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#sixchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=22;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            six_sex = false;
            document.querySelector("#sixchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#sevenchildrenbirth');
            if(seven_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "six"){
                    var children_number_int = 6;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '8'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=22;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            six_sex = true;
            document.querySelector("#sixchildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#sevenchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=23;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            seven_birth = false;
            document.querySelector("#sevenchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#sevenchildrensex');
            if(seven_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "seven"){
                    var children_number_int = 7;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '7'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=23;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            seven_birth = true;
            document.querySelector("#sevenchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#sevenchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-male');
        const name2 = document.querySelector('#seven-female');
		const name3 = document.querySelector('#seven-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#sevenchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=24;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            seven_sex = false;
            document.querySelector("#sevenchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#eightchildrenbirth');
            if(eight_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "seven"){
                    var children_number_int = 7;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '6'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=24;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            seven_sex = true;
            document.querySelector("#sevenchildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#eightchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=25;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            eight_birth = false;
            document.querySelector("#eightchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#eightchildrensex');
            if(eight_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "eight"){
                    var children_number_int = 8;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '5'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=25;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            eight_birth = true;
            document.querySelector("#eightchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eightchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-male');
        const name2 = document.querySelector('#eight-female');
		const name3 = document.querySelector('#eight-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#eightchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=26;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            eight_sex = false;
            document.querySelector("#eightchildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#ninechildrenbirth');
            if(nine_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "eight"){
                    var children_number_int = 8;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '4'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=26;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            eight_sex = true;
            document.querySelector("#eightchildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#ninechildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=27;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            nine_birth = false;
            document.querySelector("#ninechildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#ninechildrensex');
            if(nine_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "nine"){
                    var children_number_int = 9;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '3'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=27;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            nine_birth = true;
            document.querySelector("#ninechildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ninechildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-male');
        const name2 = document.querySelector('#nine-female');
		const name3 = document.querySelector('#nine-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#ninechildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=28;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            nine_sex = false;
            document.querySelector("#ninechildrensex").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#tenchildrenbirth');
            if(ten_birth == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "nine"){
                    var children_number_int = 9;

                    let count = document.querySelector('.last-state-page');
                    count.textContent = '0'
                    if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                        let next_button = document.querySelector("#next_page2-not");
                        $('#next_page2-not').prop('disabled', false);
                        next_button.id = "next_page2"
                    }
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '2'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=28;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            nine_sex = true;
            document.querySelector("#ninechildrensex").setAttribute("spone","y")
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-birthday');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-birthday');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#tenchildrenbirtherr');
        if(!name.value.match(/^([0-9]{8})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '8桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=29;i<30;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            ten_birth = false;
            document.querySelector("#tenchildrenbirth").setAttribute("spone","n")

        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#tenchildrensex');
            if(ten_sex == false){

                var select = document.getElementById("number-children");
                children_num = select.value;
                if(children_num == "ten"){
                    var children_number_int = 10;
                    let count = document.querySelector('.last-state-page');
                    count.textContent = '1'
                    box.style.display='';
                    box.setAttribute('element_yet','not_yet');
                }
            }
            else{
                for(var i=29;i<30;i++){
                    if(ele_arr[i].getAttribute("element_yet") == 'not_yet'){
                        ele_arr[i].style.display = '';
                        let count = document.querySelector('.last-state-page');
                        count.textContent = Number(count.textContent) - 1;
                    }
                }
            }
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            ten_birth = true;
            document.querySelector("#tenchildrenbirth").setAttribute("spone","y")
        }
	});
});

$(function(){
    const submit = document.querySelector('#back_url');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        var ele_arr = document.getElementsByClassName("form-group");

        for(var i=0;i<30;i++){
            if(sessionStorage.getItem("spone-"+i) == 'y'){
                ele_arr[i].style.display = '';
            }
        }
    });
});

$(function(){
    const submit = document.querySelector('#back_url2');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        var ele_arr = document.getElementsByClassName("form-group");

        for(var i=0;i<22;i++){
            if(sessionStorage.getItem("spone2-"+i) == 'y'){
                ele_arr[i].style.display = '';
            }
        }
    });
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#tenchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-male');
        const name2 = document.querySelector('#ten-female');
		const name3 = document.querySelector('#ten-other');
		// エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#tenchildrensexerr');
        if(!name.value == true && !name2.value == true && !name3.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            ten_sex = false;
            document.querySelector("#tenchildrensex").setAttribute("spone","n")
            var cn = document.querySelector(".last-state-page").textContent
            if(String(cn) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(cn) == '0'){
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }else{
            var ele_arr = document.getElementsByClassName("form-group");
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#tenchildrensex');
            box.style.display='';
            box.setAttribute('element_yet','not_yet');

            var select = document.getElementById("number-children");
            children_num = select.value;
            if(children_num == "ten"){
                var children_number_int = 10;

                let count = document.querySelector('.last-state-page');
                count.textContent = '0'
                if(document.getElementsByClassName("btn btn-primary custom-btn-not")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            ten_sex = true;
            document.querySelector("#tenchildrensex").setAttribute("spone","y")
        }
	});
});


// 2ページ目に遷移するボタンにセッションストレージに保存する処理
$(function(){
    document.getElementsByClassName('btn btn-primary custom-btn-not')[0].addEventListener('click', function() {
        const email = document.getElementById("email").value;
        sessionStorage.setItem('email', email);
        const nickname = document.getElementById('nickname').value;
        sessionStorage.setItem('nickname', nickname);
        const birthday = document.getElementById('birthday').value;
        sessionStorage.setItem('birthday', birthday);
        const postnumber = document.getElementById('post-number').value;
        sessionStorage.setItem('post-number', postnumber);
        const job = document.getElementById('job').value;
        sessionStorage.setItem('job', job);
        var ele = document.getElementsByName('spouse');
        var len = ele.length;
        var checkValue = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue = ele.item(i).value;
                console.log(checkValue)
            }
        }
        sessionStorage.setItem('yourpartner', checkValue);
        const spousebirthday = document.getElementById('spouse-birthday').value;
        sessionStorage.setItem('spouse-birthday', spousebirthday);
        const spousejob = document.getElementById('spouse-job').value;
        sessionStorage.setItem('spouse-job', spousejob);
        var ele = document.getElementsByName('children');
        var len = ele.length;
        var checkValue2 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue2 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('children', checkValue2);
        const numberchildren = document.getElementById('number-children').value;
        sessionStorage.setItem('number-children', numberchildren);
        const firstbirthday = document.getElementById('first-birthday').value;
        sessionStorage.setItem('first-birthday', firstbirthday);
        var ele = document.getElementsByName('first-male');
        var len = ele.length;
        var checkValue3 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue3 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('first-male', checkValue3);
        const secondbirthday = document.getElementById('second-birthday').value;
        sessionStorage.setItem('second-birthday', secondbirthday);
        var ele = document.getElementsByName('second-male');
        var len = ele.length;
        var checkValue4 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue4 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('second-male', checkValue4);
        const thirdbirthday = document.getElementById('third-birthday').value;
        sessionStorage.setItem('third-birthday', thirdbirthday);
        var ele = document.getElementsByName('third-male');
        var len = ele.length;
        var checkValue5 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue5 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('third-male', checkValue5);
        const fourbirthday = document.getElementById('four-birthday').value;
        sessionStorage.setItem('four-birthday', fourbirthday);
        var ele = document.getElementsByName('four-male');
        var len = ele.length;
        var checkValue7 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue7 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('four-male', checkValue7);
        const fivebirthday = document.getElementById('five-birthday').value;
        sessionStorage.setItem('five-birthday', fivebirthday);
        var ele = document.getElementsByName('five-male');
        var len = ele.length;
        var checkValue8 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue7 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('five-male', checkValue8);
        const sixbirthday = document.getElementById('six-birthday').value;
        sessionStorage.setItem('six-birthday', sixbirthday);
        var ele = document.getElementsByName('six-male');
        var len = ele.length;
        var checkValue9 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue9 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('six-male', checkValue9);
        const sevenbirthday = document.getElementById('seven-birthday').value;
        sessionStorage.setItem('seven-birthday', sevenbirthday);
        var ele = document.getElementsByName('seven-male');
        var len = ele.length;
        var checkValue10 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue10 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('seven-male', checkValue10);
        const eightbirthday = document.getElementById('eight-birthday').value;
        sessionStorage.setItem('eight-birthday', eightbirthday);
        var ele = document.getElementsByName('eight-male');
        var len = ele.length;
        var checkValue11 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue11 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('eight-male', checkValue11);
        const ninebirthday = document.getElementById('nine-birthday').value;
        sessionStorage.setItem('nine-birthday', ninebirthday);
        var ele = document.getElementsByName('nine-male');
        var len = ele.length;
        var checkValue12 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue12 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('nine-male', checkValue12);
        const tenbirthday = document.getElementById('ten-birthday').value;
        sessionStorage.setItem('ten-birthday', tenbirthday);
        var ele = document.getElementsByName('ten-male');
        var len = ele.length;
        var checkValue13 = '';
        for (var i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue13 = ele.item(i).value;
            }
        }
        sessionStorage.setItem('ten-male', checkValue13);

        if(sessionStorage.getItem('annual-income') == null){
            window.location.href = '/future_calculation2';
        }
        else{
            history.forward();
            if(location.href != '/future_calculation2'){
                window.location.href = '/future_calculation2';
            }
        }

        jQuery.ajax({
    
            type: 'post',
            url: 'form1.php', //送信先PHPファイル
            data: {'email' : sessionStorage.getItem('email'),'nickname' : sessionStorage.getItem('nickname'), 'birthday': sessionStorage.getItem('birthday'), 'post-number': sessionStorage.getItem('post-number'),
            'job' : sessionStorage.getItem('job'),'yourpartner' : sessionStorage.getItem('yourpartner'),'spouse-birthday' : sessionStorage.getItem('spouse-birthday'),
            'spouse-job' : sessionStorage.getItem('spouse-job'),'children' : sessionStorage.getItem('children'),'number-children' : sessionStorage.getItem('number-children'),
            'first-birthday' : sessionStorage.getItem('first-birthday'),'first-male' : sessionStorage.getItem('first-male'),'second-birthday' : sessionStorage.getItem('second-birthday'),
            'second-male' : sessionStorage.getItem('second-male'),'third-birthday' : sessionStorage.getItem('third-birthday'),'third-male' : sessionStorage.getItem('third-male'),
            'four-birthday' : sessionStorage.getItem('four-birthday'),'four-male' : sessionStorage.getItem('four-male'),
            'five-birthday' : sessionStorage.getItem('five-birthday'),'five-male' : sessionStorage.getItem('five-male'),
            'six-birthday' : sessionStorage.getItem('six-birthday'),'six-male' : sessionStorage.getItem('six-male'),
            'seven-birthday' : sessionStorage.getItem('seven-birthday'),'seven-male' : sessionStorage.getItem('seven-male'),
            'eight-birthday' : sessionStorage.getItem('eight-birthday'),'eight-male' : sessionStorage.getItem('eight-male'),
            'nine-birthday' : sessionStorage.getItem('nine-birthday'),'nine-male' : sessionStorage.getItem('nine-male'),
            'ten-birthday' : sessionStorage.getItem('ten-birthday'),'ten-male' : sessionStorage.getItem('ten-male')
        }
        });

        var ele_arr = document.getElementsByClassName("form-group");
        for(var i=0;i<30;i++){
            if(ele_arr[i].getAttribute("spone") != 'n'){
                if(ele_arr[i].style.display == ''){
                    sessionStorage.setItem('spone-'+String(i), 'y');
                }
            }
        }
  });
});

var children_bool = true;
var partner_bool = true;

// 以下から2ページ目の処理b
if(sessionStorage.getItem('yourpartner') == "いる"){
    var partner_bool = true;
}
else if(sessionStorage.getItem('yourpartner') == "いない"){
    var partner_bool = false;
}
if(sessionStorage.getItem('children') == "いる"){
    var children_bool = true;
}
else if(sessionStorage.getItem('children') == "いない"){
    var children_bool = false;
}

var display_arr = new Array();
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#annual-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#annual-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#annualincomeerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=1;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            const annualincome = document.getElementById('annual-income').value;
            sessionStorage.setItem('annual-income', annualincome);

            if(respone > 0){
                // var ele_arr = document.getElementsByClassName("form-group");
                // for(var j=0;j<22;j++){
                //     ele_arr[j].style.display = '';
                // }
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbonus');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#bonus');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#bonus');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourbonuserr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=2;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            if(respone > 0){
                // var ele_arr = document.getElementsByClassName("form-group");
                // for(var j=0;j<22;j++){
                //     ele_arr[j].style.display = '';
                // }
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(partner_bool == true){
                let box = document.querySelector('#yourpartnerincome');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            else if(partner_bool == false){
                // 次の項目を表示
                let box = document.querySelector('#yourfoodexpenses');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-annual-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-annual-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpartnerincomeerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=3;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerbonus');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-bonus');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-bonus');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpartnerbonuserr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=4;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfoodexpenses');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#food-expenses');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#food-expenses');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfoodexpenseserr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=5;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourlivingcost');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#living-cost');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#living-cost');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourlivingcosterr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=6;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbeautybill');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#beauty-bill');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#beauty-bill');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourbeautybillerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=7;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });

            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourhouseclass');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#house-class');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#house-class');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourhouseclasserr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=8;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            let boxx = document.querySelector("#yourmanagecost");
            if(document.querySelector("#house-class").value == "apartment"){
                boxx.style.display = "none";
            }
            else{
                boxx.style.display = "";
            }
			// 次の項目を表示
			let box = document.querySelector('#yourhousecost');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#house-cost');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#house-cost');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourhousecosterr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=9;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let choice = document.getElementById("house-class").value;

            if(choice != "apartment"){
                let box = document.querySelector('#yourmanagecost');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    // count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }1
            }
            else{
                let box = document.querySelector('#yourbill');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#manage-cost');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#manage-cost');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourmanagecosterr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=10;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbill');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#bill');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#bill');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourbillerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=11;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpcbill');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#pc-bill');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#pc-bill');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpcbillerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=12;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourphonebill');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#phone-bill');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#phone-bill');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourphonebillerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=13;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourlone');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#lone');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#lone');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourloneerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=14;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourinsurancebill');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#Insurance-bill');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#Insurance-bill');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourinsurancebillerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=15;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(children_bool == true){
                let box = document.querySelector('#youreducationalinsurance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "7"
            }
            else if(children_bool == false){
                let box = document.querySelector('#yourmedicalinsurance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#Educational-insurance');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#Educational-insurance');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreducationalinsuranceerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=16;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreducationexpenses');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#education-expenses');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#education-expenses');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreducationexpenseserr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=17;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourmedicalinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#medical-insurance');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#medical-insurance');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourmedicalinsuranceerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=18;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourlifeinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#life-insurance');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#life-insurance');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourlifeinsuranceerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=19;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourestateinvestment');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#Estate-Investment');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#Estate-Investment');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourestateinvestmenterr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=20;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourassetmanagement');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#asset-management');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#asset-management');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourassetmanagementerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=21;i<22;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i
                    display_arr.push(ele_arr[i])
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

        }else{
            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourformcontrol');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#savings');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#savings');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourformcontrolerr');
        if(!name.value.match(/^([0-9]{1,14})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }


        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            let count = document.querySelector('.last-state-page');
            count.textContent = "0";
			// 確認ボタンを有効化
            let last_state = document.querySelector(".last-state-page");
            let next_button = document.querySelector("#next_page2-not");
            $('#next_page2-not').prop('disabled', false);
            next_button.id = "next_page2"
			comp_flg = true;
        }
	});
});


// 未保有・未加入のボタンを押された際の処理
$(function(){
    let input = document.querySelector('#Insurance-bill')
    let button = document.querySelector('#insurance-not-click')
    let name = document.querySelector('#Insurance-bill');
    // エラーメッセージを表示させる要素を取得
    let errMsgName = document.querySelector('#yourinsurancebillerr');
    
    button.addEventListener('click', (e) => {
        input.value = "0"
        // 次の項目を表示
        if(children_bool == true){
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            let box = document.querySelector('#youreducationalinsurance');
            //styleのdisplayを変更する関数
            box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "7"
        }
        else if(children_bool == false){
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            let box = document.querySelector('#yourmedicalinsurance');
            //styleのdisplayを変更する関数
            box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(input.getAttribute("count_yet") != "not_yet"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = Number(stat.textContent) - 1
                input.setAttribute("count_yet","not_yet");
            }
        }
    });
});

$(function(){
    let input = document.querySelector('#Educational-insurance')
    let button = document.querySelector('#youreducationalinsurance-not-click')
    const name = document.querySelector('#Educational-insurance');
    // エラーメッセージを表示させる要素を取得
    const errMsgName = document.querySelector('#youreducationalinsuranceerr')
    
    button.addEventListener('click', (e) => {
        input.value = "0"
        // 次の項目を表示
        errMsgName.textContent ='';
        // クラスを削除
        name.classList.remove('input-invalid');
        let box = document.querySelector('#youreducationexpenses');
        //styleのdisplayを変更する関数
        box.style.display='';
        box.setAttribute('element_yet','not_yet');
        if(input.getAttribute("count_yet") != "not_yet"){
            const stat = document.querySelector('.last-state-page');
            stat.textContent = Number(stat.textContent) - 1
            input.setAttribute("count_yet","not_yet");
        }
    });
});

$(function(){
    let input = document.querySelector('#medical-insurance')
    let button = document.querySelector('#yourmedicalinsurance-not-click')
    let name = document.querySelector('#medical-insurance');
    // エラーメッセージを表示させる要素を取得
    let errMsgName = document.querySelector('#yourmedicalinsuranceerr');
    
    button.addEventListener('click', (e) => {
        input.value = "0"
        // 次の項目を表示
        errMsgName.textContent ='';
        // クラスを削除
        name.classList.remove('input-invalid');
        let box = document.querySelector('#yourlifeinsurance');
        //styleのdisplayを変更する関数
        box.style.display='';
        box.setAttribute('element_yet','not_yet');
        if(input.getAttribute("count_yet") != "not_yet"){
            const stat = document.querySelector('.last-state-page');
            stat.textContent = Number(stat.textContent) - 1
            input.setAttribute("count_yet","not_yet");
        }
    });
});

$(function(){
    let input = document.querySelector('#life-insurance')
    let button = document.querySelector('#yourlifeinsurance-not-click')
    let name = document.querySelector('#life-insurance');
    // エラーメッセージを表示させる要素を取得
    let errMsgName = document.querySelector('#yourlifeinsuranceerr');
    
    button.addEventListener('click', (e) => {
        input.value = "0"
        // 次の項目を表示
        errMsgName.textContent ='';
        // クラスを削除
        name.classList.remove('input-invalid');
        let box = document.querySelector('#yourestateinvestment');
        //styleのdisplayを変更する関数
        box.style.display='';
        box.setAttribute('element_yet','not_yet');
        if(input.getAttribute("count_yet") != "not_yet"){
            const stat = document.querySelector('.last-state-page');
            stat.textContent = Number(stat.textContent) - 1
            input.setAttribute("count_yet","not_yet");
        }
    });
});

$(function(){
    let input = document.querySelector('#Estate-Investment')
    let button = document.querySelector('#yourestateinvestment-not-click')
    let name = document.querySelector('#Estate-Investment');
    // エラーメッセージを表示させる要素を取得
    let errMsgName = document.querySelector('#yourestateinvestmenterr');
    
    button.addEventListener('click', (e) => {
        input.value = "0"
        // 次の項目を表示
        errMsgName.textContent ='';
        // クラスを削除
        name.classList.remove('input-invalid');
        let box = document.querySelector('#yourassetmanagement');
        //styleのdisplayを変更する関数
        box.style.display='';
        box.setAttribute('element_yet','not_yet');
        if(input.getAttribute("count_yet") != "not_yet"){
            const stat = document.querySelector('.last-state-page');
            stat.textContent = Number(stat.textContent) - 1
            comp_flg = true;
            input.setAttribute("count_yet","not_yet");
        }
    });
});

// ここから3ページ目の処理

$(function(){
    document.getElementsByClassName('btn btn-primary custom-btn')[0].addEventListener('click', function() {
        const annualincome = document.getElementById('annual-income').value;
        sessionStorage.setItem('annual-income', annualincome);
        const bonus = document.getElementById('bonus').value;
        sessionStorage.setItem('bonus', bonus);
        const spouseannualincome = document.getElementById('spouse-annual-income').value;
        sessionStorage.setItem('spouse-annual-income', spouseannualincome);
        const spousebonus = document.getElementById('spouse-bonus').value;
        sessionStorage.setItem('spouse-bonus', spousebonus);
        const foodexpenses = document.getElementById('food-expenses').value;
        sessionStorage.setItem('food-expenses', foodexpenses);
        const livingcost = document.getElementById('living-cost').value;
        sessionStorage.setItem('living-cost', livingcost);
        const beautybill = document.getElementById('beauty-bill').value;
        sessionStorage.setItem('beauty-bill', beautybill);
        const houseclass = document.getElementById('house-class').value;
        sessionStorage.setItem('house-class', houseclass);
        const housecost = document.getElementById('house-cost').value;
        sessionStorage.setItem('house-cost', housecost);
        const managecost = document.getElementById('manage-cost').value;
        sessionStorage.setItem('manage-cost', managecost);
        const bill = document.getElementById('bill').value;
        sessionStorage.setItem('bill', bill);
        const pcbill = document.getElementById('pc-bill').value;
        sessionStorage.setItem('pc-bill', pcbill);
        const phonebill = document.getElementById('phone-bill').value;
        sessionStorage.setItem('phone-bill', phonebill);
        const lone = document.getElementById('lone').value;
        sessionStorage.setItem('lone', lone);
        const Insurancebill = document.getElementById('Insurance-bill').value;
        sessionStorage.setItem('Insurance-bill', Insurancebill);
        const Educationalinsurance = document.getElementById('Educational-insurance').value;
        sessionStorage.setItem('Educational-insurance', Educationalinsurance);
        const educationexpenses = document.getElementById('education-expenses').value;
        sessionStorage.setItem('education-expenses', educationexpenses);
        const medicalinsurance = document.getElementById('medical-insurance').value;
        sessionStorage.setItem('medical-insurance', medicalinsurance);
        const lifeinsurance = document.getElementById('life-insurance').value;
        sessionStorage.setItem('life-insurance', lifeinsurance);
        const EstateInvestment = document.getElementById('Estate-Investment').value;
        sessionStorage.setItem('Estate-Investment', EstateInvestment);
        const assetmanagement = document.getElementById('asset-management').value;
        sessionStorage.setItem('asset-management', assetmanagement);
        const savings = document.getElementById('savings').value;
        sessionStorage.setItem('savings', savings);

        jQuery.ajax({
    
            type: 'post',
            url: 'form2.php', //送信先PHPファイル
            data: {'annualincome' : sessionStorage.getItem('annual-income'), 'bonus': sessionStorage.getItem('bonus'), 
            'spouseannualincome' : sessionStorage.getItem('spouse-annual-income'), 'spousebonus': sessionStorage.getItem('spouse-bonus'),
            'foodexpenses' : sessionStorage.getItem('food-expenses'), 'livingcost': sessionStorage.getItem('living-cost'), 
            'beautybill' : sessionStorage.getItem('beauty-bill'), 'houseclass': sessionStorage.getItem('house-class'),  
            'housecost' : sessionStorage.getItem('house-cost'), 'managecost': sessionStorage.getItem('manage-cost'), 
            'bill' : sessionStorage.getItem('bill'), 'pcbill': sessionStorage.getItem('pc-bill'),
            'phonebill' : sessionStorage.getItem('phone-bill'), 'lone': sessionStorage.getItem('lone'),  
            'Insurancebill' : sessionStorage.getItem('Insurance-bill'), 'Educationalinsurance': sessionStorage.getItem('Educational-insurance'),
            'medicalinsurance' : sessionStorage.getItem('medical-insurance'), 'educationexpenses': sessionStorage.getItem('education-expenses'),
            'lifeinsurance' : sessionStorage.getItem('life-insurance'), 'EstateInvestment': sessionStorage.getItem('Estate-Investment'), 
            'assetmanagement' : sessionStorage.getItem('asset-management'), 'savings': sessionStorage.getItem('savings')
        }
        });

        var ele_arr = document.getElementsByClassName("form-group");
        for(var i=0;i<22;i++){
            if(ele_arr[i].getAttribute("spone") != 'n'){
                if(ele_arr[i].style.display == ''){
                    sessionStorage.setItem('spone2-'+String(i), 'y');
                }
            }
        }

        if(sessionStorage.getItem('yourpartner') == "いる"){
            var partner_bool2 = true;
        }
        else if(sessionStorage.getItem('yourpartner') == "いない"){
            var partner_bool2 = false;
        }
        
        if(sessionStorage.getItem('children') == "いる"){
            var children_bool2 = true;
        }
        else if(sessionStorage.getItem('children') == "いない"){
            var children_bool2 = false;
        }
        
        if(sessionStorage.getItem('number-children') == "one"){
            var children_n = 1;
        }
        else if(sessionStorage.getItem('number-children') == "two"){
            var children_n = 2;
        }
        else if(sessionStorage.getItem('number-children') == "three"){
            var children_n = 3;
        }
        else if(sessionStorage.getItem('number-children') == "four"){
            var children_n = 4;
        }
        else if(sessionStorage.getItem('number-children') == "five"){
            var children_n = 5;
        }
        else if(sessionStorage.getItem('number-children') == "six"){
            var children_n = 6;
        }
        else if(sessionStorage.getItem('number-children') == "seven"){
            var children_n = 7;
        }
        else if(sessionStorage.getItem('number-children') == "eight"){
            var children_n = 8;
        }
        else if(sessionStorage.getItem('number-children') == "nine"){
            var children_n = 9;
        }
        else if(sessionStorage.getItem('number-children') == "ten"){
            var children_n = 10;
        }
        else if(children_bool2 == false){
            var children_n = 0;
        }
        
        if(sessionStorage.getItem('house-class') == "rental"){
            var myhome = true;
        }
        else{
            var myhome = false;
        }

        if(sessionStorage.getItem('Estate-Investment') == "0"){
            var estate_bool = false;
        }
        else{
            var estate_bool = true;
        }

        if(myhome == true){
            if(sessionStorage.getItem('myhome-buy') == null){
                window.location.href = '/future_calculation3';
            }
            else{
                history.forward();
                if(location.href != '/future_calculation3'){
                    window.location.href = '/future_calculation3';
                }
            }
        }
        else if(estate_bool == true){
            if(sessionStorage.getItem('estate') == null){
                window.location.href = '/future_calculation3';
            }
            else{
                history.forward();
                if(location.href != '/future_calculation3'){
                    window.location.href = '/future_calculation3';
                }
            }
        }
        else if(myhome == false && estate_bool == false){
            if( sessionStorage.getItem('savings-balance') == null){
                window.location.href = '/future_calculation3';
            }
            else{
                history.forward();
                if(location.href != '/future_calculation3'){
                    window.location.href = '/future_calculation3';
                }
            }
        }
    });
});

var children_number = sessionStorage.getItem('number-children')
var your_estate = document.getElementById("estate").value;

const base_laststate = document.querySelector(".last-state-page").textContent
console.log(base_laststate)

var load_state = '0';
var first_buy = false;
var first_income = false;
var second_buy = false;
var second_income = false;
var third_buy = false;
var third_income = false;
var four_buy = false;
var four_income = false;
var five_buy = false;
var five_income = false;
var six_buy = false;
var six_income = false;
var seven_buy = false;
var seven_income = false;
var eight_buy = false;
var eight_income = false;
var nine_buy = false;
var nine_income = false;
var ten_buy = false;
var ten_income = false;


$(function(){
    window.addEventListener('load', function(){
        let count = document.querySelector('.last-state-page');
        load_state = count.textContent

    });
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#myhome-buy');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#myhome-buy');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#myhomebuyerr');
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '数字4桁で入力してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=1;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourhome").setAttribute("spone","n")

        }else{
            const myhomebuy = document.getElementById('myhome-buy').value;
            sessionStorage.setItem('myhome-buy', myhomebuy);

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(sessionStorage.getItem('Estate-Investment') == "0"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            else{
                let box = document.querySelector('#yourestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourhome").setAttribute("spone","y")
        }
	});
});

var estate_oldval = 0;
var last_estate = 0;
var last_ele2 = 1;
var first_flg = false;

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=2;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#estate").setAttribute("spone","n")

        }else{
            const estate = document.getElementById('estate').value;
            sessionStorage.setItem('estate', estate);

            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
			// 次の項目を表示
            let box = document.querySelector('#yourfirstestate');
            //styleのdisplayを変更する関数
            box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            var ele_arr = document.getElementsByClassName("form-group");

            var estate_value = document.getElementById("estate").value

            var b = -1;
            var temp_count = 0;

            if(estate_value == "1"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 2;

                for(var i=2;i<4;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }      
                }

                document.getElementById("yoursecondestate").style.display = "none";
                document.getElementById("yoursecondrentalincome").style.display = "none";
                document.getElementById("yourthirdestate").style.display = "none";
                document.getElementById("yourthirdrentalincome").style.display = "none";
                document.getElementById("yourfourestate").style.display = "none";
                document.getElementById("yourfourrentalincome").style.display = "none";
                document.getElementById("yourfiveestate").style.display = "none";
                document.getElementById("yourfiverentalincome").style.display = "none";
                document.getElementById("yoursixestate").style.display = "none";
                document.getElementById("yoursixrentalincome").style.display = "none";
                document.getElementById("yoursevenestate").style.display = "none";
                document.getElementById("yoursevenrentalincome").style.display = "none";
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";

                estate_oldval = Number(estate_value)   
                if(estate_oldval == 0){   
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 9;   
                }

                var max_num = sessionStorage.getItem("max_ele")
                if(last_ele2 == 3){
                    // let next_box = document.querySelector("#yoursavingsbalance");
                    // next_box.style.display = ''
                    
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=4;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
    
            }
            else if(estate_value == "2"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 4;

                for(var i=2;i<6;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }      
                }

                document.getElementById("yourthirdestate").style.display = "none";
                document.getElementById("yourthirdrentalincome").style.display = "none";
                document.getElementById("yourfourestate").style.display = "none";
                document.getElementById("yourfourrentalincome").style.display = "none";
                document.getElementById("yourfiveestate").style.display = "none";
                document.getElementById("yourfiverentalincome").style.display = "none";
                document.getElementById("yoursixestate").style.display = "none";
                document.getElementById("yoursixrentalincome").style.display = "none";
                document.getElementById("yoursevenestate").style.display = "none";
                document.getElementById("yoursevenrentalincome").style.display = "none";
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 11; 
                }

                var max_num = sessionStorage.getItem("max_ele")
                if(last_ele2 == 5){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=6;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
    
            }
            else if(estate_value == "3"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 6;

                for(var i=2;i<8;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }                      
                }
                
                console.log(last_ele2)
                document.getElementById("yourfourestate").style.display = "none";
                document.getElementById("yourfourrentalincome").style.display = "none";
                document.getElementById("yourfiveestate").style.display = "none";
                document.getElementById("yourfiverentalincome").style.display = "none";
                document.getElementById("yoursixestate").style.display = "none";
                document.getElementById("yoursixrentalincome").style.display = "none";
                document.getElementById("yoursevenestate").style.display = "none";
                document.getElementById("yoursevenrentalincome").style.display = "none";
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 13; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 7){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=8;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
                
            }
            else if(estate_value == "4"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 8;

                for(var i=2;i<10;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }      
                }
    
                document.getElementById("yourfiveestate").style.display = "none";
                document.getElementById("yourfiverentalincome").style.display = "none";
                document.getElementById("yoursixestate").style.display = "none";
                document.getElementById("yoursixrentalincome").style.display = "none";
                document.getElementById("yoursevenestate").style.display = "none";
                document.getElementById("yoursevenrentalincome").style.display = "none";
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";  

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 15; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 9){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=10;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
                
            }
            else if(estate_value == "5"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 10;

                for(var i=2;i<12;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }      
                }

    
                document.getElementById("yoursixestate").style.display = "none";
                document.getElementById("yoursixrentalincome").style.display = "none";
                document.getElementById("yoursevenestate").style.display = "none";
                document.getElementById("yoursevenrentalincome").style.display = "none";
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 17; 
                }

                var max_num = sessionStorage.getItem("max_ele")
                
                if(last_ele2 == 11){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=12;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }

            }
            else if(estate_value == "6"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 12;

                for(var i=2;i<14;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }      
                }
    
                document.getElementById("yoursevenestate").style.display = "none";
                document.getElementById("yoursevenrentalincome").style.display = "none";
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";
   

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 19; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 13){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=14;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
            }
            else if(estate_value == "7"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 14;

                for(var i=2;i<16;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }        
                }
    
                document.getElementById("youreightestate").style.display = "none";
                document.getElementById("youreightrentalincome").style.display = "none";
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 21; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 15){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=16;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
            }
            else if(estate_value == "8"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 16;

                for(var i=2;i<18;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }      
                }

    
                document.getElementById("yournineestate").style.display = "none";
                document.getElementById("yourninerentalincome").style.display = "none";
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 23; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 17){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=18;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
    
            }
            else if(estate_value == "9"){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 18;

                for(var i=2;i<20;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) > Number(estate_value)){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }
                else if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                        var t = document.querySelector('.last-state-page');
                        t.textContent = Number(t.textContent) - 1;
                    }

                    for(var i=(Number(estate_oldval)*2)+2;i<(Number(estate_value)*2)+2;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            var t = document.querySelector('.last-state-page');
                            t.textContent = Number(t.textContent) - 1;
                            last_ele2 = i;
                        }
                    }          
                }
    
                document.getElementById("yourtenestate").style.display = "none";
                document.getElementById("yourtenrentalincome").style.display = "none";  

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 24; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 19){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=20;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }

    
            }
            else if(estate_value == '10'){
                var t = document.querySelector('.last-state-page');
                t.textContent = Number(t.textContent) + 20;

                for(var i=2;i<22;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        ele_arr[i].style.display = '';
                        last_ele2 = i;
                    }
                }

                if(Number(estate_oldval) < Number(estate_value) && estate_oldval != 0){
                    if(ele_arr[(Number(estate_oldval)*2)+2].getAttribute("spone") != "y"){
                        for(var i=2;i<(Number(estate_oldval)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") != "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                            }
                        }    
                        
                        for(var i=2;i<(Number(estate_value)*2)+2;i++){
                            if(ele_arr[i].getAttribute("spone") == "y"){
                                var t = document.querySelector('.last-state-page');
                                t.textContent = Number(t.textContent) - 1;
                                last_ele2 = i;
                            }
                        }
                    }
                }

                estate_oldval = Number(estate_value)
                if(estate_oldval == 0){
                    var t = document.querySelector('.last-state-page');
                    t.textContent = 25; 
                }

                var max_num = sessionStorage.getItem("max_ele")

                if(last_ele2 == 21){
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display == ''
                                last_ele2 = i;
                            }
                        }
                    }
                    if(document.getElementById("yoursavingsbalance").getAttribute("spone") != "y"){
                        if(document.getElementById("yoursavingsbalance").style.display == 'none'){
                            document.getElementById("yoursavingsbalance").style.display = '';
                        }
                    }
                    else{
                        ele_arr[last_ele2+1].style.display = '';
                    }

                    var t = document.querySelector('.last-state-page');
                    t.textContent = Number(t.textContent) + (Number(estate_value) * 2)
                }
                else{
                    ele_arr[last_ele2+1].style.display = '';
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].style.display == ''){
                            ele_arr[i].style.display = 'none';
                        }
                    }
                }
            }
            if(sessionStorage.getItem('yourpartner') == "いる"){
                var partner_bool2 = true;
            }
            else if(sessionStorage.getItem('yourpartner') == "いない"){
                var partner_bool2 = false;
            }
            if(sessionStorage.getItem('children') == "いる"){
                var children_bool2 = true;
            }
            else if(sessionStorage.getItem('children') == "いない"){
                var children_bool2 = false;
            }
            
            if(sessionStorage.getItem('number-children') == "one"){
                var children_n = 1;
            }
            else if(sessionStorage.getItem('number-children') == "two"){
                var children_n = 2;
            }
            else if(sessionStorage.getItem('number-children') == "three"){
                var children_n = 3;
            }
            else if(sessionStorage.getItem('number-children') == "four"){
                var children_n = 4;
            }
            else if(sessionStorage.getItem('number-children') == "five"){
                var children_n = 5;
            }
            else if(sessionStorage.getItem('number-children') == "six"){
                var children_n = 6;
            }
            else if(sessionStorage.getItem('number-children') == "seven"){
                var children_n = 7;
            }
            else if(sessionStorage.getItem('number-children') == "eight"){
                var children_n = 8;
            }
            else if(sessionStorage.getItem('number-children') == "nine"){
                var children_n = 9;
            }
            else if(sessionStorage.getItem('number-children') == "ten"){
                var children_n = 10;
            }
            else if(children_bool2 == false){
                var children_n = 0;
            }
            
            if(sessionStorage.getItem('house-class') == "rental"){
                var myhome = true;
            }
            else{
                var myhome = false;
            }

            //if(partner_bool2 == true && children_bool2 == true){
            //    var t = document.querySelector('.last-state-page');
            //    var ch = Number(children_n) * 4
            //    t.textContent = Number(t.textContent) + 5 + Number(ch);
            //}
            //else if(partner_bool2 == true && children_bool2 == false){
            //    var t = document.querySelector('.last-state-page');
            //    t.textContent = Number(t.textContent) + 4;
            //}
            //else if(partner_bool2 == false && children_bool2 == true){
            //    var t = document.querySelector('.last-state-page');
            //    var ch = Number(children_n) * 4
            //    t.textContent = Number(t.textContent) + 1 + Number(ch);
            //}

            //var l = 0;
            //for(var i=2;i<(Number(estate_value)*2)+2;i++){
            //    if(ele_arr[i].getAttribute("spone") == 'y'){
            //        var t = document.querySelector('.last-state-page');
            //        t.textContent = Number(t.textContent) - 1;
            //        l = i;
            //        console.log(l)
            //        console.log((Number(estate_value)*2)+1)
            //    }
            //}

            //var last_ele3 = 0;
            //var ele_arr = document.getElementsByClassName("form-group");
            //if(ele_arr[22].getAttribute("spone") == 'y' || ele_arr[22].getAttribute("spone") == "n"){
            //    for(var i=22;max_num;i++){
            //        console.log("sssssssss")
            //        if(l != (Number(estate_value)*2)+1){
            //            console.log("トリガ")
            //            if(ele_arr[i].style.display == ""){
            //                ele_arr[i].style.display = 'none';
            //            }
            //        }
            //        else if(l == (Number(estate_value)*2)+1){
            //            if(ele_arr[i].style.display == "none"){
            //                ele_arr[i].style.display = '';
            //            }
            //       }
            //
            //       if(ele_arr[i].getAttribute("spone") != 'n' || ele_arr[i].getAttribute("spone") == null){
            //            var tet = 0;
            //        }
            //        else{
            //            var t = document.querySelector('.last-state-page');
            //            t.textContent = Number(t.textContent) - 1;
            //            last_ele3 = i;
            //        }
            //    }
            //    first_flg = true;
            //}

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;

            var ele = document.querySelector(".last-state-page").textContent
            document.querySelector("#estate").setAttribute("spone","y")
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfirstestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var max_num = sessionStorage.getItem("max_ele")
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=3;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            document.querySelector("#yourfirstestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1
                submit.setAttribute("count_yet","not_yet");
            }

            document.querySelector("#yourfirstestate").setAttribute("spone","y")


            
            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfirstrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var max_num = sessionStorage.getItem("max_ele")
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=4;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfirstrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "1"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1;
                    submit.setAttribute("count_yet","not_yet");
                }
            }
            else{
                let box = document.querySelector('#yoursecondestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1;
                    submit.setAttribute("count_yet","not_yet");
                }
            }

            var last_kou = 0;
            if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                var ele_arr = document.getElementsByClassName("form-group");
                var max_num = sessionStorage.getItem("max_ele")
                for(var i=22;i<max_num;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        if(ele_arr[i].style.display == 'none'){
                            ele_arr[i].style.display = ""
                        }
                        last_kou = i;
                    }
                }
            }

            if(ele_arr[last_kou+1].style.display == 'none'){
                ele_arr[last_kou+1].style.display = '';
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfirstrentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursecondestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=5;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursecondestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursecondestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursecondrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=6;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursecondrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "2"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1;
                    submit.setAttribute("count_yet","not_yet");
                }
                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
    
            }
            else{
                let box = document.querySelector('#yourthirdestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1;
                    submit.setAttribute("count_yet","not_yet");
                }
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursecondrentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourthirdestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=7;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourthirdestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirdrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourthirdestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourthirdrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=8;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourthirdrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "3"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1;
                    submit.setAttribute("count_yet","not_yet");
                }
                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
    
            }
            else{
                let box = document.querySelector('#yourfourestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    let count = document.querySelector('.last-state-page');
                    count.textContent = Number(count.textContent) - 1;
                    submit.setAttribute("count_yet","not_yet");
                }
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourthirdrentalincome").setAttribute("spone","y")


            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfourestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=9;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfourestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfourrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfourestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfourrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=10;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfourrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "4"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
            }
            else{
                let box = document.querySelector('#yourfiveestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }


            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfourrentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfiveestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=11;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfiveestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfiverentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfiveestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfiverentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=12;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfiverentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "5"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
            }
            else{
                let box = document.querySelector('#yoursixestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }


            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourfiverentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursixestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=13;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursixestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursixestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursixrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=14;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursixrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "6"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 

                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
            }
            else{
                let box = document.querySelector('#yoursevenestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursixrentalincome").setAttribute("spone","y")
            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursevenestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=15;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursevenestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursevenestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursevenrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=16;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursevenrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "7"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 

                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
            }
            else{
                let box = document.querySelector('#youreightestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yoursevenrentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreightestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=17;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#youreightestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreightrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#youreightestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreightrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=18;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#youreightrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "8"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
                
                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }

                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
            }
            else{
                let box = document.querySelector('#yournineestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#youreightrentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yournineestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=19;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yournineestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourninerentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yournineestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourninerentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=20;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourninerentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(your_estate == "9"){
                let box = document.querySelector('#yoursavingsbalance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 

                var last_kou = 0;
                if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                    var ele_arr = document.getElementsByClassName("form-group");
                    var max_num = sessionStorage.getItem("max_ele")
                    for(var i=22;i<max_num;i++){
                        if(ele_arr[i].getAttribute("spone") == "y"){
                            if(ele_arr[i].style.display == 'none'){
                                ele_arr[i].style.display = ""
                            }
                            last_kou = i;
                        }
                    }
                }
    
                if(ele_arr[last_kou+1].style.display == 'none'){
                    ele_arr[last_kou+1].style.display = '';
                }
            }
            else{
                let box = document.querySelector('#yourtenestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }


            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourninerentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-estate');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-estate');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtenestateerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=21;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourtenestate").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourtenestate").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-rental-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-rental-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtenrentalincomeerr');
        var ele_arr = document.getElementsByClassName("form-group");
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=22;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourtenrentalincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            let box = document.querySelector('#yoursavingsbalance');
            //styleのdisplayを変更する関数
            box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            } 

            var last_kou = 0;
            if(document.getElementById("yoursavingsbalance").getAttribute("spone") == "y"){
                var ele_arr = document.getElementsByClassName("form-group");
                var max_num = sessionStorage.getItem("max_ele")
                for(var i=22;i<max_num;i++){
                    if(ele_arr[i].getAttribute("spone") == "y"){
                        if(ele_arr[i].style.display == 'none'){
                            ele_arr[i].style.display = ""
                        }
                        last_kou = i;
                    }
                }
            }

            if(ele_arr[last_kou+1].style.display == 'none'){
                ele_arr[last_kou+1].style.display = '';
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.querySelector("#yourtenrentalincome").setAttribute("spone","y")

            var ele_arr = document.getElementsByClassName("form-group");
            var elearr_length = ele_arr.length;
            var estate_num = Number(document.getElementById("estate").value) * 2
            // elearr_length = Number(elearr_length) - Number(estate_num);
            var hiku = 0;
            for(var i=0;i<Number(elearr_length);i++){
                if(ele_arr[i].getAttribute("spone") == 'y'){
                    hiku = hiku + 1;
                }
            }
            console.log(hiku)

            hiku = hiku + (22 - estate_num)

            var t = document.querySelector('.last-state-page');
            t.textContent = Number(elearr_length) - hiku;
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#savings-balance');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#savings-balance');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursavingsbalanceerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=23;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            document.getElementById("yoursavingsbalance").setAttribute("spone","n")

        }else{

            const savingsbalance = document.getElementById('savings-balance').value;
            sessionStorage.setItem('savings-balance', savingsbalance);

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            
            if(children_bool == true && sessionStorage.getItem('Educational-insurance') != "0"){
                let box = document.querySelector('#yourlastEducationalinsurance');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
            else if(children_bool == true && sessionStorage.getItem('Educational-insurance') == "0"){
                let box = document.querySelector('#yourtrip');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
            else if(children_bool == false){
            // 次の項目を表示
                let box = document.querySelector('#yourtrip');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }

            document.getElementById("yoursavingsbalance").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#last-Educational-insurance');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#last-Educational-insurance');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourlastEducationalinsuranceerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=24;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            document.getElementById("yourlastEducationalinsurance").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtrip');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourlastEducationalinsurance").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#trip');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#trip');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtriperr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=25;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            document.getElementById("yourtrip").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourotherexpense');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourtrip").setAttribute("spone","y")
            
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#other-expense');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#other-expense');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourotherexpenseerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=26;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourotherexpense").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourstartwork');
            let box2 = document.querySelector('#text');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            box2.style.display='';
            box2.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourotherexpense").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#start-wark');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#start-wark');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourstartworkerr');
        if(!name.value.match(/^([0-9]{2,3})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '2桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=27;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourstartwork").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourstartingsalary');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourstartwork").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#Starting-salary');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#Starting-salary');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourstartingsalaryerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=28;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourstartingsalary").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourestimatedannualincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourstartingsalary").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#Estimated-annual-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#Estimated-annual-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourestimatedannualincomeerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=29;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourestimatedannualincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourSeverancepay');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourestimatedannualincome").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourSeverancepayinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        var submit2 = document.querySelector('#yourSeverancepayinput');

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#Severance-pay');
        const name2 = document.querySelector('#not-Severance-pay');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourSeverancepayerr');
        if(!name.value == true && !name2.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=30;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourSeverancepay").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(sessionStorage.getItem('yourpartner') == "いる"){
                var partner_bool = true;
            }
            else if(sessionStorage.getItem('yourpartner') == "いない"){
                var partner_bool = false;
            }
            
            if(sessionStorage.getItem('children') == "いる"){
                var children_bool = true;
            }
            else if(sessionStorage.getItem('children') == "いない"){
                var children_bool = false;
            }
            if(partner_bool == false && children_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
                comp_flg = true;
            }
            else if(partner_bool  == false && children_bool == true){
                let box = document.querySelector('#yourfirstprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit2.getAttribute("count_yet") != "not_yet"){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = String(Number(stat.textContent) - 1)
                }
            }
            else if(partner_bool == true && children_bool == false){
                let box = document.querySelector('#yourpartnerstratwork');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit2.getAttribute("count_yet") != "not_yet"){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = String(Number(stat.textContent) - 1)
                }
            }
            else if(partner_bool == true && children_bool == true){
                let box = document.querySelector('#yourpartnerstratwork');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit2.getAttribute("count_yet") != "not_yet"){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = String(Number(stat.textContent) - 1)
                }
            }

            submit2.setAttribute("count_yet","not_yet")
            document.getElementById("yourSeverancepay").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-start-work');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-start-work');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpartnerstratworkerr');
        if(!name.value.match(/^([0-9]{2,3})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '2桁の半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=31;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourpartnerstratwork").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            
			let box = document.querySelector('#yourpartnerstartingsalary');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourpartnerstratwork").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-Starting-salary');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-Starting-salary');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpartnerstartingsalaryerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=32;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourpartnerstartingsalary").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerestimatedannualincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourpartnerstartingsalary").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse-Estimated-annual-income');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-Estimated-annual-income');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpartnerestimatedannualincomeerr');
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=33;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourpartnerestimatedannualincome").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerSeverancepay');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent
            if(submit.getAttribute("count_yet") != "not_yet"){
                let count = document.querySelector('.last-state-page');
                count.textContent = Number(count.textContent) - 1;
                submit.setAttribute("count_yet","not_yet");
            }

            document.getElementById("yourpartnerestimatedannualincome").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpartnerSeverancepayinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#spouse-Severance-pay');
        const name2 = document.querySelector('#spouse-Severance-pay-not');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourpartnerSeverancepayerr');
        if(!name.value == true && !name2.value == true){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=34;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourpartnerSeverancepay").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(children_bool == true){
                let box = document.querySelector('#yourfirstprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                box.setAttribute('element_yet','not_yet');
                const base_laststate = document.querySelector(".last-state-page").textContent
                if(submit.getAttribute("count_yet") != "not_yet"){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = String(Number(base_laststate) - 1)
                }
            }
            else if(children_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
                comp_flg = true;
            }

            document.getElementById("yourpartnerSeverancepay").setAttribute("spone","y")
            submit.setAttribute("count_yet","not_yet")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

var chil = sessionStorage.getItem('number-children');
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfirstprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=35;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfirstprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            const base_laststate = document.querySelector(".last-state-page").textContent

            if(chil == 'one'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "19"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "23"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "27"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "31"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "35"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "39"
            }

            document.getElementById("yourfirstprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfirstjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=36;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfirstjuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirsthighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'one'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "18"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "26"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "30"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "34"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "38"
            }

            document.getElementById("yourfirstjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfirsthighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=37;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfirsthighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'one'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "17"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "21"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "25"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "29"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "33"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "37"
            }

            document.getElementById("yourfirsthighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#first-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#first-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfirstuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=38;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfirstuniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;

            if(chil == 'one'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "16"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "20"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "24"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "28"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "32"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "36"
                let box = document.querySelector("#yoursecondprimaryschool");
                box.style.display = '';
            }

            document.getElementById("yourfirstuniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursecondprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=39;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursecondprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "19"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "23"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "27"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "31"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "35"
            }

            document.getElementById("yoursecondprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursecondjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=40;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursecondjuniorhighschool").setAttribute("spone","y")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "18"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "22"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "26"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "30"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "34"
            }

            document.getElementById("yoursecondjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursecondhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=41;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursecondhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourseconduniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "17"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "21"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "25"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "29"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "33"
            }

            document.getElementById("yoursecondhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourseconduniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=42;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourseconduniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'two'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "16"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "20"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "24"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "28"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "32"
                let box = document.querySelector("#yourthirdprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yourseconduniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourthirdprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=43;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourthirdprimaryschool").setAttribute("spone","n")

            
        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirdjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "19"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "23"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "27"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "31"
            }

            document.getElementById("yourthirdprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourthirdjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=44;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourthirdjuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirdhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "18"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "22"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "26"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "30"
            }

            document.getElementById("yourthirdjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourthirdhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=45;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourthirdhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirduniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "17"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "21"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "25"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "29"
            }

            document.getElementById("yourthirdhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#third-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#third-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourthirduniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=46;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourthirduniversity").setAttribute("spone","n")
            
        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'three'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "16"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "20"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "24"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "28"
                let box = document.querySelector("#yourfourprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yourthirduniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfourprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=47;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfourprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfourjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "19"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "23"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "27"
            }

            document.getElementById("yourfourprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfourjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=48;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfourjuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfourhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "18"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "22"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "26"
            }

            document.getElementById("yourfourjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfourhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=49;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfourhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfouruniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "17"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "21"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "25"
            }

            document.getElementById("yourfourhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#four-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#four-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfouruniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=50;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfouruniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'four'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yourfiveprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yourfiveprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#yourfiveprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "16"
                let box = document.querySelector("#yourfiveprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "20"
                let box = document.querySelector("#yourfiveprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "24"
                let box = document.querySelector("#yourfiveprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yourfouruniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfiveprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=51;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfiveprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfivejuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "19"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "23"
            }

            document.getElementById("yourfiveprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfivejuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=52;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfivejuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfivehighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "18"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "22"
            }

            document.getElementById("yourfivejuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfivehighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=53;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfivehighschool").setAttribute("spone","y")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfiveuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "17"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "21"
            }

            document.getElementById("yourfivehighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#five-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#five-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourfiveuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=54;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourfiveuniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'five'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yoursixprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yoursixprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#yoursixprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "16"
                let box = document.querySelector("#yoursixprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "20"
                let box = document.querySelector("#yoursixprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yourfiveuniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursixprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=55;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            
            document.getElementById("yoursixprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "19"
            }

            document.getElementById("yoursixprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursixjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=56;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursixjuniorhighschool").setAttribute("spone","n")
        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "18"
            }

            document.getElementById("yoursixjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursixhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=57;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursixhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "17"
            }

            document.getElementById("yoursixhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#six-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#six-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursixuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=58;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursixuniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'six'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yoursevenprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yoursevenprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#yoursevenprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "16"
                let box = document.querySelector("#yoursevenprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yoursixuniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursevenprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=59;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursevenprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "15"
            }

            document.getElementById("yoursevenprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursevenjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=60;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursevenjuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "14"
            }

            document.getElementById("yoursevenjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursevenhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=61;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursevenhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "13"
            }

            document.getElementById("yoursevenhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#seven-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#seven-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yoursevenuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=62;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yoursevenuniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'seven'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#youreightprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#youreightprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "12"
                let box = document.querySelector("#youreightprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yoursevenuniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreightprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=63;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("youreightprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreightjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "11"
            }

            document.getElementById("youreightprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreightjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=64;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("youreightjuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreighthighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "10"
            }

            document.getElementById("youreightjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreighthighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=65;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            
            document.getElementById("youreighthighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreightuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "9"
            }

            document.getElementById("youreighthighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#eight-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#eight-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#youreightuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=66;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("youreightuniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'eight'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yournineprimaryschool")
                box.style.display = ''
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "8"
                let box = document.querySelector("#yournineprimaryschool")
                box.style.display = ''
            }

            document.getElementById("youreightuniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yournineprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=67;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yournineprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourninejuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "7"
            }

            document.getElementById("yournineprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourninejuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=68;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourninejuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourninehighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "6"
            }

            document.getElementById("yourninejuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourninehighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=69;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourninehighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yournineuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "5"
            }

            document.getElementById("yourninehighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nine-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nine-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yournineuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=70;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yournineuniversity").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(chil == 'nine'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            else if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "4"
                let box = document.querySelector("#yourtenprimaryschool")
                box.style.display = ''
            }

            document.getElementById("yournineuniversity").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-primary-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-primary-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtenprimaryschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=71;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourtenprimaryschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "3"
            }

            document.getElementById("yourtenprimaryschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-junior-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-junior-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtenjuniorhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=72;i<max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourtenjuniorhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "2"
            }

            document.getElementById("yourtenjuniorhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-high-school');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-high-school');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtenhighschoolerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            var max_num = sessionStorage.getItem("max_ele")
            for(var i=max_num;i<=max_num;i++){
                if(ele_arr[i].style.display != 'none'){
                    respone = i;
                    display_arr.push(ele_arr[i]);
                    ele_arr[i].style.display = 'none';
                    var st = document.querySelector('.last-state-page');
                    st.textContent = Number(st.textContent) + 1;
                }
            }
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourtenhighschool").setAttribute("spone","n")

        }else{

            if(respone > 0){
                respone = 0;
                var st = document.querySelector('.last-state-page');
                display_arr.forEach(disp => {
                    if(disp.style.display == 'none'){
                        disp.style.display = '';
                        st.textContent = Number(st.textContent) - 1
                    }
                });
            }
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            box.setAttribute('element_yet','not_yet');
            if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "1"
            }

            document.getElementById("yourtenhighschool").setAttribute("spone","y")

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
        }
	});
});


$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#ten-university');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#ten-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#yourtenuniversityerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourtenuniversity").setAttribute("spone","n")

        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');

            const stat = document.querySelector('.last-state-page');
            stat.textContent = "0"
            // 登録ボタンを活性化
            if(chil == 'ten'){
                var a = document.querySelector('.last-state-page');
                a.textContent = "0"
                if(document.getElementsByClassName("btn btn-primary mx-auto d-block")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }

            var ele = document.querySelector(".last-state-page").textContent
            if(String(ele) != "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2"){
                    let next_button = document.querySelector("#next_page2");
                    $('#next_page2').prop('disabled', true);
                    next_button.id = "next_page2-not"
                }
            }
            else if(String(ele) == "0"){
                if(document.getElementsByClassName("btn btn-primary custom-btn")[0].id == "next_page2-not"){
                    let next_button = document.querySelector("#next_page2-not");
                    $('#next_page2-not').prop('disabled', false);
                    next_button.id = "next_page2"
                }
            }
            document.getElementById("yourtenuniversity").setAttribute("spone","y")
        }
	});
});



$(function(){

    let ele = document.getElementById("number-children")
    ele.addEventListener('change', (e) => {
        var zan = document.querySelector(".last-state-page").textContent
        console.log(String(zan))
        if(String(zan) != '0'){
            let next_button = document.querySelector("#next_page2");
            $('#next_page2').prop('disabled', true);
            next_button.id = "next_page2-not"
        }
    });
});

$(function(){
    document.getElementById('next_page2_serv').addEventListener('click', function() {

        if(sessionStorage.getItem('yourpartner') == "いる"){
            var partner_bool2 = true;
        }
        else if(sessionStorage.getItem('yourpartner') == "いない"){
            var partner_bool2 = false;
        }
        
        if(sessionStorage.getItem('children') == "いる"){
            var children_bool2 = true;
        }
        else if(sessionStorage.getItem('children') == "いない"){
            var children_bool2 = false;
        }
        
        if(sessionStorage.getItem('number-children') == "one"){
            var children_n = 1;
        }
        else if(sessionStorage.getItem('number-children') == "two"){
            var children_n = 2;
        }
        else if(sessionStorage.getItem('number-children') == "three"){
            var children_n = 3;
        }
        else if(sessionStorage.getItem('number-children') == "four"){
            var children_n = 4;
        }
        else if(sessionStorage.getItem('number-children') == "five"){
            var children_n = 5;
        }
        else if(sessionStorage.getItem('number-children') == "six"){
            var children_n = 6;
        }
        else if(sessionStorage.getItem('number-children') == "seven"){
            var children_n = 7;
        }
        else if(sessionStorage.getItem('number-children') == "eight"){
            var children_n = 8;
        }
        else if(sessionStorage.getItem('number-children') == "nine"){
            var children_n = 9;
        }
        else if(sessionStorage.getItem('number-children') == "ten"){
            var children_n = 10;
        }
        
        if(sessionStorage.getItem('house-class') == "rental"){
            var myhome = true;
        }
        else{
            var myhome = false;
        }
        
        var children_number = sessionStorage.getItem('number-children')
        
        if(String(sessionStorage.getItem('Estate-Investment')) == "0"){
            var estate_bool = false;
        }
        else{
            var estate_bool = true;
        }
        
        if(myhome == false){
            const myhomebuy = document.getElementById('myhome-buy').value;
            sessionStorage.setItem('myhome-buy', myhomebuy);
        }

        if(estate_bool == true){
            const estate = document.getElementById('estate').value;
            sessionStorage.setItem('estate', estate);
            const firstestate = document.getElementById('first-estate').value;
            sessionStorage.setItem('first-estate', firstestate);
            const firstrentalincome = document.getElementById('first-rental-income').value;
            sessionStorage.setItem('first-rental-income', firstrentalincome);
            if(Number(document.getElementById("estate").value) > 1){
                const secondestate = document.getElementById('second-estate').value;
                sessionStorage.setItem('second-estate', secondestate);
                const secondrentalincome = document.getElementById('second-rental-income').value;
                sessionStorage.setItem('second-rental-income', secondrentalincome);
            }
            if(Number(document.getElementById("estate").value) > 2){
                const thirdestate = document.getElementById('third-estate').value;
                sessionStorage.setItem('third-estate', thirdestate);
                const thirdrentalincome = document.getElementById('third-rental-income').value;
                sessionStorage.setItem('third-rental-income', thirdrentalincome);
            }
            if(Number(document.getElementById("estate").value) > 3){
                const fourestate = document.getElementById('four-estate').value;
                sessionStorage.setItem('four-estate', fourestate);
                const fourrentalincome = document.getElementById('four-rental-income').value;
                sessionStorage.setItem('four-rental-income', fourrentalincome);
            }
            if(Number(document.getElementById("estate").value) > 4){
                const fiveestate = document.getElementById('five-estate').value;
                sessionStorage.setItem('five-estate', fiveestate);
                const fiverentalincome = document.getElementById('five-rental-income').value;
                sessionStorage.setItem('five-rental-income', fiverentalincome);
            }
            if(Number(document.getElementById("estate").value) > 5){
                const sixestate = document.getElementById('six-estate').value;
                sessionStorage.setItem('six-estate', sixestate);
                const sixrentalincome = document.getElementById('six-rental-income').value;
                sessionStorage.setItem('six-rental-income', sixrentalincome);
            }
            if(Number(document.getElementById("estate").value) > 6){
                const sevenestate = document.getElementById('seven-estate').value;
                sessionStorage.setItem('seven-estate', sevenestate);
                const sevenrentalincome = document.getElementById('seven-rental-income').value;
                sessionStorage.setItem('seven-rental-income', sevenrentalincome);
            }
            if(Number(document.getElementById("estate").value) > 7){
                const eightestate = document.getElementById('eight-estate').value;
                sessionStorage.setItem('eight-estate', eightestate);
                const eightrentalincome = document.getElementById('eight-rental-income').value;
                sessionStorage.setItem('eight-rental-income', eightrentalincome);
            }
            if(Number(document.getElementById("estate").value) > 8){
                const nineestate = document.getElementById('nine-estate').value;
                sessionStorage.setItem('nine-estate', nineestate);
                const ninerentalincome = document.getElementById('nine-rental-income').value;
                sessionStorage.setItem('nine-rental-income', ninerentalincome);
            }
            if(Number(document.getElementById("estate").value) > 9){
                const tenestate = document.getElementById('ten-estate').value;
                sessionStorage.setItem('ten-estate', tenestate);
                const tenrentalincome = document.getElementById('ten-rental-income').value;
                sessionStorage.setItem('ten-rental-income', tenrentalincome);
            }
        }

        const savingsbalance = document.getElementById('savings-balance').value;
        sessionStorage.setItem('savings-balance', savingsbalance);
        if(children_bool2 == true){
            const lastEducationalinsurance = document.getElementById('last-Educational-insurance').value;
            sessionStorage.setItem('last-Educational-insurance', lastEducationalinsurance);
        }
        const trip = document.getElementById('trip').value;
        sessionStorage.setItem('trip', trip);
        const otherexpense = document.getElementById('other-expense').value;
        sessionStorage.setItem('other-expense', otherexpense);
        const startwark = document.getElementById('start-wark').value;
        sessionStorage.setItem('start-wark', startwark);
        const Startingsalary = document.getElementById('Starting-salary').value;
        sessionStorage.setItem('Starting-salary', Startingsalary);
        const Estimatedannualincome = document.getElementById('Estimated-annual-income').value;
        sessionStorage.setItem('Estimated-annual-income', Estimatedannualincome);

        var ele6 = document.getElementsByName('Severance-pay');
        var len6 = ele6.length;
        var checkValue6 = '';
        for (var i = 0; i < len6; i++){
            if (ele6.item(i).checked){
                checkValue6 = ele6.item(i).value;
                console.log(checkValue6)
            }
        }
        sessionStorage.setItem('yourSeverancepayinput', checkValue6);

        if(partner_bool2 == true){
            const spousestartwork = document.getElementById('spouse-start-work').value;
            sessionStorage.setItem('spouse-start-work', spousestartwork);
            const spouseStartingsalary = document.getElementById('spouse-Starting-salary').value;
            sessionStorage.setItem('spouse-Starting-salary', spouseStartingsalary);
            const spouseEstimatedannualincome = document.getElementById('spouse-Estimated-annual-income').value;
            sessionStorage.setItem('spouse-Estimated-annual-income', spouseEstimatedannualincome);

            var ele7 = document.getElementsByName('spouse-Severance-pay');
            var len7 = ele7.length;
            var checkValue7 = '';
            for (var i = 0; i < len7; i++){
                if (ele7.item(i).checked){
                    checkValue7 = ele7.item(i).value;
                    console.log(checkValue7)
                }
            }
            sessionStorage.setItem('yourpartnerSeverancepayinput', checkValue7);
        }

        if(children_bool2 == true){
            const firstprimaryschool = document.getElementById('first-primary-school').value;
            sessionStorage.setItem('first-primary-school', firstprimaryschool);
            const firstjuniorhighschool = document.getElementById('first-junior-high-school').value;
            sessionStorage.setItem('first-junior-high-school', firstjuniorhighschool);
            const firsthighschool = document.getElementById('first-high-school').value;
            sessionStorage.setItem('first-high-school', firsthighschool);
            const firstuniversity = document.getElementById('first-university').value;
            sessionStorage.setItem('first-university',firstuniversity);
            if(children_n > 1){
                const secondprimaryschool = document.getElementById('second-primary-school').value;
                sessionStorage.setItem('second-primary-school', secondprimaryschool);
                const secondjuniorhighschool = document.getElementById('second-junior-high-school').value;
                sessionStorage.setItem('second-junior-high-school', secondjuniorhighschool);
                const secondhighschool = document.getElementById('second-high-school').value;
                sessionStorage.setItem('second-high-school', secondhighschool);
                const seconduniversity = document.getElementById('second-university').value;
                sessionStorage.setItem('second-university',seconduniversity);
            }
            if(children_n > 2){
                const thirdprimaryschool = document.getElementById('third-primary-school').value;
                sessionStorage.setItem('third-primary-school', thirdprimaryschool);
                const thirdjuniorhighschool = document.getElementById('third-junior-high-school').value;
                sessionStorage.setItem('third-junior-high-school', thirdjuniorhighschool);
                const thirdhighschool = document.getElementById('third-high-school').value;
                sessionStorage.setItem('third-high-school', thirdhighschool);
                const thirduniversity = document.getElementById('third-university').value;
                sessionStorage.setItem('third-university',thirduniversity);
            }
            if(children_n > 3){
                const fourprimaryschool = document.getElementById('four-primary-school').value;
                sessionStorage.setItem('four-primary-school', fourprimaryschool);
                const fourjuniorhighschool = document.getElementById('four-junior-high-school').value;
                sessionStorage.setItem('four-junior-high-school', fourjuniorhighschool);
                const fourhighschool = document.getElementById('four-high-school').value;
                sessionStorage.setItem('four-high-school', fourhighschool);
                const fouruniversity = document.getElementById('four-university').value;
                sessionStorage.setItem('four-university',fouruniversity);
            }
            if(children_n > 4){
                const fiveprimaryschool = document.getElementById('five-primary-school').value;
                sessionStorage.setItem('five-primary-school', fiveprimaryschool);
                const fivejuniorhighschool = document.getElementById('five-junior-high-school').value;
                sessionStorage.setItem('five-junior-high-school', fivejuniorhighschool);
                const fivehighschool = document.getElementById('five-high-school').value;
                sessionStorage.setItem('five-high-school', fivehighschool);
                const fiveuniversity = document.getElementById('five-university').value;
                sessionStorage.setItem('five-university',fiveuniversity);
            }
            if(children_n > 5){
                const sixprimaryschool = document.getElementById('six-primary-school').value;
                sessionStorage.setItem('six-primary-school', sixprimaryschool);
                const sixjuniorhighschool = document.getElementById('six-junior-high-school').value;
                sessionStorage.setItem('six-junior-high-school', sixjuniorhighschool);
                const sixhighschool = document.getElementById('six-high-school').value;
                sessionStorage.setItem('six-high-school', sixhighschool);
                const sixuniversity = document.getElementById('six-university').value;
                sessionStorage.setItem('six-university',sixuniversity);
            }
            if(children_n > 6){
                const sevenprimaryschool = document.getElementById('seven-primary-school').value;
                sessionStorage.setItem('seven-primary-school', sevenprimaryschool);
                const sevenjuniorhighschool = document.getElementById('seven-junior-high-school').value;
                sessionStorage.setItem('seven-junior-high-school', sevenjuniorhighschool);
                const sevenhighschool = document.getElementById('seven-high-school').value;
                sessionStorage.setItem('seven-high-school', sevenhighschool);
                const sevenuniversity = document.getElementById('seven-university').value;
                sessionStorage.setItem('seven-university',sevenuniversity);
            }
            if(children_n > 7){
                const eightprimaryschool = document.getElementById('eight-primary-school').value;
                sessionStorage.setItem('eight-primary-school', eightprimaryschool);
                const eightjuniorhighschool = document.getElementById('eight-junior-high-school').value;
                sessionStorage.setItem('eight-junior-high-school', eightjuniorhighschool);
                const eighthighschool = document.getElementById('eight-high-school').value;
                sessionStorage.setItem('eight-high-school', eighthighschool);
                const eightuniversity = document.getElementById('eight-university').value;
                sessionStorage.setItem('eight-university',eightuniversity);
            }
            if(children_n > 8){
                const nineprimaryschool = document.getElementById('nine-primary-school').value;
                sessionStorage.setItem('nine-primary-school', nineprimaryschool);
                const ninejuniorhighschool = document.getElementById('nine-junior-high-school').value;
                sessionStorage.setItem('nine-junior-high-school', ninejuniorhighschool);
                const ninehighschool = document.getElementById('nine-high-school').value;
                sessionStorage.setItem('nine-high-school', ninehighschool);
                const nineuniversity = document.getElementById('nine-university').value;
                sessionStorage.setItem('nine-university',nineuniversity);
            }
            if(children_n > 9){
                const tenprimaryschool = document.getElementById('ten-primary-school').value;
                sessionStorage.setItem('ten-primary-school', tenprimaryschool);
                const tenjuniorhighschool = document.getElementById('ten-junior-high-school').value;
                sessionStorage.setItem('ten-junior-high-school', tenjuniorhighschool);
                const tenhighschool = document.getElementById('ten-high-school').value;
                sessionStorage.setItem('ten-high-school', tenhighschool);
                const tenuniversity = document.getElementById('ten-university').value;
                sessionStorage.setItem('ten-university',tenuniversity);
            }
        }


        jQuery.ajax({
            type: 'post',
            url: 'form3.php', //送信先PHPファイル
            data: {
            'myhomebuy' : sessionStorage.getItem('myhome-buy'),
            'estate': sessionStorage.getItem('estate'), 
            'firstestate' : sessionStorage.getItem('first-estate'), 
            'firstrentalincome': sessionStorage.getItem('first-rental-income'), 
            'secondestate' : sessionStorage.getItem('second-estate'),
            'secondrentalincome': sessionStorage.getItem('second-rental-income'), 
            'thirdestate' : sessionStorage.getItem('third-estate'),
            'thirdrentalincome': sessionStorage.getItem('third-rental-income'), 
            'fourestate' : sessionStorage.getItem('four-estate'), 
            'fourrentalincome': sessionStorage.getItem('four-rental-income'), 
            'fiveestate' : sessionStorage.getItem('five-estate'),
            'fiverentalincome': sessionStorage.getItem('five-rental-income'), 
            'sixestate' : sessionStorage.getItem('six-estate'),
            'sixrentalincome': sessionStorage.getItem('six-rental-income'), 
            'sevenestate' : sessionStorage.getItem('seven-estate'),
            'sevenrentalincome': sessionStorage.getItem('seven-rental-income'), 
            'eightestate' : sessionStorage.getItem('eight-estate'),
            'eightrentalincome': sessionStorage.getItem('eight-rental-income'), 
            'nineestate' : sessionStorage.getItem('nine-estate'), 
            'ninerentalincome': sessionStorage.getItem('nine-rental-income'), 
            'tenestate' : sessionStorage.getItem('ten-estate'), 
            'tenrentalincome': sessionStorage.getItem('ten-rental-income'), 
            'savingsbalance' : sessionStorage.getItem('savings-balance'), 
            'lastEducationalinsurance': sessionStorage.getItem('last-Educational-insurance'), 
            'trip' : sessionStorage.getItem('trip'), 
            'otherexpense': sessionStorage.getItem('other-expense'), 
            'startwark' : sessionStorage.getItem('start-wark'),
            'Startingsalary': sessionStorage.getItem('Starting-salary'), 
            'Estimatedannualincome' : sessionStorage.getItem('Estimated-annual-income'),
            'yourSeverancepayinput': sessionStorage.getItem('yourSeverancepayinput'), 
            'spousestartwork' : sessionStorage.getItem('spouse-start-work'),
            'spouseStartingsalary': sessionStorage.getItem('spouse-Starting-salary'), 
            'spouseEstimatedannualincome' : sessionStorage.getItem('spouse-Estimated-annual-income'), 
            'yourpartnerSeverancepayinput': sessionStorage.getItem('yourpartnerSeverancepayinput'), 
            'firstprimaryschool' : sessionStorage.getItem('first-primary-school'), 
            'firstjuniorhighschool': sessionStorage.getItem('first-junior-high-school'), 
            'firsthighschool' : sessionStorage.getItem('first-high-school'),
            'firstuniversity': sessionStorage.getItem('first-university'), 
            'secondprimaryschool' : sessionStorage.getItem('second-primary-school'),
            'secondjuniorhighschool': sessionStorage.getItem('second-junior-high-school'), 
            'secondhighschool' : sessionStorage.getItem('second-high-school'), 
            'seconduniversity': sessionStorage.getItem('second-university'), 
            'thirdprimaryschool' : sessionStorage.getItem('third-primary-school'),
            'thirdjuniorhighschool': sessionStorage.getItem('third-junior-high-school'), 
            'thirdhighschool' : sessionStorage.getItem('third-high-school'), 
            'thirduniversity': sessionStorage.getItem('third-university'), 
            'fourprimaryschool' : sessionStorage.getItem('four-primary-school'), 
            'fourjuniorhighschool': sessionStorage.getItem('four-junior-high-school'), 
            'fourhighschool' : sessionStorage.getItem('four-high-school'),
            'fouruniversity': sessionStorage.getItem('four-university'), 
            'fiveprimaryschool' : sessionStorage.getItem('five-primary-school'),
            'fivejuniorhighschool': sessionStorage.getItem('five-junior-high-school'), 
            'fivehighschool' : sessionStorage.getItem('five-high-school'),
            'fiveuniversity': sessionStorage.getItem('five-university'), 
            'sixprimaryschool' : sessionStorage.getItem('six-primary-school'),
            'sixjuniorhighschool': sessionStorage.getItem('six-junior-high-school'), 
            'sixhighschool' : sessionStorage.getItem('six-high-school'),
            'sixuniversity': sessionStorage.getItem('six-university'), 
            'sevenprimaryschool' : sessionStorage.getItem('seven-primary-school'), 
            'sevenjuniorhighschool': sessionStorage.getItem('seven-junior-high-school'), 
            'sevenhighschool' : sessionStorage.getItem('seven-high-school'),
            'sevenuniversity': sessionStorage.getItem('seven-university'), 
            'eightprimaryschool' : sessionStorage.getItem('eight-primary-school'), 
            'eightjuniorhighschool': sessionStorage.getItem('eight-junior-high-school'), 
            'eighthighschool' : sessionStorage.getItem('eight-high-school'), 
            'eightuniversity': sessionStorage.getItem('eight-university'), 
            'nineprimaryschool' : sessionStorage.getItem('nine-primary-school'),
            'ninejuniorhighschool': sessionStorage.getItem('nine-junior-high-school'), 
            'ninehighschool' : sessionStorage.getItem('nine-high-school'), 
            'nineuniversity': sessionStorage.getItem('nine-university'), 
            'tenprimaryschool' : sessionStorage.getItem('ten-primary-school'),
            'tenjuniorhighschool': sessionStorage.getItem('ten-junior-high-school'), 
            'tenhighschool' : sessionStorage.getItem('ten-high-school'), 
            'tenuniversity': sessionStorage.getItem('ten-university')
        }
        });
        
        // window.location.href = '/mail';
        window.location.href = '/result_screen';
        sessionStorage.clear();
    });
});
