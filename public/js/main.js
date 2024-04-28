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

// バリデーションの処理
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#name');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#name');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('.err-msg-name');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '入力されていません。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yournickname');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#nickname');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#nickname');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#nicknameerr');
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '入力されていません。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbirthday');
			//styleのdisplayを変更する関数
			box.style.display='';
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
            // 後続の処理を止める
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpost');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name_input.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourjob');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartner');
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpartnerinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#partnerbirthday');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#partnerjob');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourchildren');
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourchildreninput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#childrennumber');
			box.style.display='';
        }
	});
});

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#firstchildrenbirth');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#firstchildrensex');
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#firstchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#secondchildrenbirth');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#secondchildrensex');
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#secondchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#thirdchildrenbirth');
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#thirdchildrensex');
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#thirdchildrensexinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// ボタンの活性化
        }
	});
});