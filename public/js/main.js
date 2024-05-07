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
                ele_arr[i].style.display="none";
            }
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
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "6"
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
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=2;i<30;i++){
                console.log(ele_arr);
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbirthday');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "5"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpost');
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "4"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name_input.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourjob');
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "3"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartner');
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "2"
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpartnerinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let ele = document.getElementsByName("spouse")
            let len = ele.length;
            let checkValue = '';
            for (let i = 0; i < len; i++){
                if (ele.item(i).checked){
                    checkValue = ele.item(i).value;
                }
            }
            if(checkValue == "いる"){
                let box = document.querySelector('#partnerbirthday');
                box.style.display='';
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "3"
            }
            else if(checkValue == "いない"){
                let box = document.querySelector('#yourchildren');
                box.style.display='';
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "1"  
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#partnerjob');
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "2"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourchildren');
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "1"
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourchildreninput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示

            let ele = document.getElementsByName("children")
            let len = ele.length;
            let checkValue = '';
            for (let i = 0; i < len; i++){
                if (ele.item(i).checked){
                    checkValue = ele.item(i).value;
                }
            }
            if(checkValue == "いる"){
                let box = document.querySelector('#childrennumber');
                box.style.display='';
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "1"
            }
            else if(checkValue == "いない"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }            
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
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=10;i<30;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            
            total = Number(children_number_int) * 2
            let box = document.querySelector('#firstchildrenbirth');
            box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(children_number_int) * 2)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#firstchildrensex');
			box.style.display='';

            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 1)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "one"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#secondchildrenbirth');
                box.style.display='';
                const stat = document.querySelector('.last-state-page');
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                stat.textContent = String(Number(total) - 2)
            }
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#secondchildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 3)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "two"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#thirdchildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 4)
            }

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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#thirdchildrensex');
			box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 5)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "three"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#fourchildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 6)
            }
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#fourchildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 7)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "four"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#fivechildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 8)
            }

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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#fivechildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 9)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "five"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#sixchildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 10)
            }

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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#sixchildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 11)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "six"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#sevenchildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 12)
            }
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#sevenchildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 13)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "seven"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#eightchildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 14)
            }
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#eightchildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 15)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "eight"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#ninechildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 16)
            }
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#ninechildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 17)
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            if(children_num == "nine"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0";
                // ボタンの活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                // 次の項目を表示
                let box = document.querySelector('#tenchildrenbirth');
                box.style.display='';
                var select = document.getElementById("number-children");
                children_num = select.value;
    
                if(children_num == "one"){
                    var children_number_int = 1;
                }
                else if(children_num == "two"){
                    var children_number_int = 2;
                }
                else if(children_num == "three"){
                    var children_number_int = 3;
                }
                else if(children_num == "four"){
                    var children_number_int = 4;
                }
                else if(children_num == "five"){
                    var children_number_int = 5;
                }
                else if(children_num == "six"){
                    var children_number_int = 6;
                }
                else if(children_num == "seven"){
                    var children_number_int = 7;
                }
                else if(children_num == "eight"){
                    var children_number_int = 8;
                }
                else if(children_num == "nine"){
                    var children_number_int = 9;
                }
                else if(children_num == "ten"){
                    var children_number_int = 10;
                }
                total = Number(children_number_int) * 2
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(total) - 18)
            }
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#tenchildrensex');
            box.style.display='';
            var select = document.getElementById("number-children");
            children_num = select.value;

            if(children_num == "one"){
                var children_number_int = 1;
            }
            else if(children_num == "two"){
                var children_number_int = 2;
            }
            else if(children_num == "three"){
                var children_number_int = 3;
            }
            else if(children_num == "four"){
                var children_number_int = 4;
            }
            else if(children_num == "five"){
                var children_number_int = 5;
            }
            else if(children_num == "six"){
                var children_number_int = 6;
            }
            else if(children_num == "seven"){
                var children_number_int = 7;
            }
            else if(children_num == "eight"){
                var children_number_int = 8;
            }
            else if(children_num == "nine"){
                var children_number_int = 9;
            }
            else if(children_num == "ten"){
                var children_number_int = 10;
            }
            total = Number(children_number_int) * 2
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(total) - 19)
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "0";
            // ボタンの活性化
            let last_state = document.querySelector(".last-state-page");
            let next_button = document.querySelector("#next_page2-not");
            $('#next_page2-not').prop('disabled', false);
            next_button.id = "next_page2"
        }
	});
});



// 2ページ目に遷移するボタンにセッションストレージに保存する処理
$(function(){
    document.getElementsByClassName('btn btn-primary custom-btn-not')[0].addEventListener('click', function() {
        const email = document.getElementById('email').value;
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

        window.location.href = '/future_calculation2';
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
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbonus');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(partner_bool == false && children_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "17"
            }
            else if(partner_bool == true && children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "21"
            }
            else if(partner_bool == true || children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "19"        
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
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(partner_bool == true){
                let box = document.querySelector('#yourpartnerincome');
                //styleのdisplayを変更する関数
                box.style.display='';
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "19"
            }
            else if(partner_bool == false){
                // 次の項目を表示
                let box = document.querySelector('#yourfoodexpenses');
                //styleのdisplayを変更する関数
                box.style.display='';
                if(children_bool == false && partner_bool == false){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "16"
                }    
                else if(partner_bool == true && children_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "20"
                }
                else if(partner_bool == true || children_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "18"        
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
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerbonus');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(partner_bool == true && children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "19"
            }
            else if(partner_bool == true || children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "17"        
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
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfoodexpenses');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(partner_bool == true && children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "18"
            }
            else if(partner_bool == true || children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "16"        
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
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourlivingcost');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "15"
            }   
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "15"
            }
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "17"
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
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbeautybill');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "14"
            }   
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "14"
            }
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "16"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourhouseclass');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "13"
            }   
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "13"
            }
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "15"
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
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=8;i<22;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourhousecost');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "12"
            }   
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "12"
            }
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "14"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
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
                if(children_bool == false && partner_bool == false){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "11"
                }   
                else if(partner_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "11"
                }
                else if(children_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "13"
                }
            }
            else{
                let box = document.querySelector('#yourbill');
                //styleのdisplayを変更する関数
                box.style.display='';
                if(children_bool == false && partner_bool == false){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "10"
                }   
                else if(partner_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "10"
                }
                else if(children_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "12"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourbill');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "10"
            }  
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "10"
            } 
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "12"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpcbill');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "9"
            }   
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "9"
            }
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "11"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourphonebill');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "8"
            }   
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "8"
            }
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "10"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourlone');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "7"
            } 
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "7"
            }  
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "9"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourinsurancebill');
			//styleのdisplayを変更する関数
			box.style.display='';
            if(children_bool == false && partner_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "6"
            }  
            else if(partner_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "6"
            } 
            else if(children_bool == true){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "8"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(children_bool == true){
                let box = document.querySelector('#youreducationalinsurance');
                //styleのdisplayを変更する関数
                box.style.display='';
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "7"
            }
            else if(children_bool == false){
                let box = document.querySelector('#yourmedicalinsurance');
                //styleのdisplayを変更する関数
                box.style.display='';
                if(children_bool == false && partner_bool == false){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "5"
                }   
                else if(partner_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "5"
                }
                else if(children_bool == true){
                    const stat = document.querySelector('.last-state-page');
                    stat.textContent = "7"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreducationexpenses');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "6"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourmedicalinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "5"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourlifeinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "4"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourestateinvestment');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "3"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourassetmanagement');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "2"
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
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourformcontrol');
			//styleのdisplayを変更する関数
			box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "1"
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "0"
			// 確認ボタンを有効化
            let last_state = document.querySelector(".last-state-page");
            let next_button = document.querySelector("#next_page2-not");
            $('#next_page2-not').prop('disabled', false);
            next_button.id = "next_page2"
			
        }
	});
});

$(function(){
    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpartnerinput');
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();
        let button = document.querySelector("#partnerbirthday")
        let button2 = document.querySelector("#partnerjob")
        let ele = document.getElementsByName("spouse")
        let len = ele.length;
        let checkValue = '';
        for (let i = 0; i < len; i++){
            if (ele.item(i).checked){
                checkValue = ele.item(i).value;
            }
        }
        if(checkValue == "いる"){
            let box = document.querySelector('#partnerbirthday');
        }
        else if(checkValue == "いない"){
            button.style.display='none';
            button2.style.display='none';
            let box = document.querySelector('#yourchildren');
            box.style.display='';
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "8"  
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
            const stat = document.querySelector('.last-state-page');
            stat.textContent = "4" 
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
        const stat = document.querySelector('.last-state-page');
        stat.textContent = "6"
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
        const stat = document.querySelector('.last-state-page');
        stat.textContent = "4"
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
        const stat = document.querySelector('.last-state-page');
        stat.textContent = "3"
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
        const stat = document.querySelector('.last-state-page');
        stat.textContent = "2"

    });
});







$(function(){
    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#spouse');
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();
        let button = document.querySelector("#button1")
        button.id="button1-choice"
	});
});
$(function(){
    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#single');
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();
        let button = document.querySelector("#button2")
        button.id="button2-choice"
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

        window.location.href = '/future_calculation3';
    });
});

var children_number = sessionStorage.getItem('number-children')
var your_estate = document.getElementById("estate").value;

const base_laststate = document.querySelector(".last-state-page").textContent
console.log(base_laststate)

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
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=1;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            let box = document.querySelector('#yourestate');
            //styleのdisplayを変更する関数
            box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
        }
	});
});

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
        if(!name.value){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=2;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) + Number(Number(your_estate) * 2))
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力してください。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=3;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=4;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yoursecondestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=5;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=6;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yourthirdestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=7;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirdrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=8;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yourfourestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=9;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfourrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=10;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yourfiveestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=11;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfiverentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=12;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yoursixestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=13;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=14;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yoursevenestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=15;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=16;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#youreightestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=17;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreightrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=18;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yournineestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=19;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourninerentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=20;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1) 
            }
            else{
                let box = document.querySelector('#yourtenestate');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
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
        if(!name.value.match(/^([0-9]{4})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '4桁の半角数字で入力して下さい。';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=21;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenrentalincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        if(!name.value.match(/^([0-9]{1,9})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '半角数字で入力してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            var ele_arr = document.getElementsByClassName("form-group");
            for(var i=22;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
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
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1) 
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
            for(var i=23;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            
            if(children_bool == true){
                let box = document.querySelector('#yourlastEducationalinsurance');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
            else if(children_bool == false){
            // 次の項目を表示
                let box = document.querySelector('#yourtrip');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=24;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtrip');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=25;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourotherexpense');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=26;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            var infomess = document.querySelector("#text");
            if(infomess.style.display != "none"){
                infomess.style.display = 'none';
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourstartwork');
            let box2 = document.querySelector('#text');
			//styleのdisplayを変更する関数
			box.style.display='';
            box2.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=27;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourstartingsalary');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=28;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourestimatedannualincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=29;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourSeverancepay');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourSeverancepayinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {

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
            for(var i=30;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(partner_bool == true){
                let box = document.querySelector('#yourpartnerstratwork');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "16"
            }
            else if(partner_bool == false && children_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else if(partner_bool  == false && children_bool == true){
                let box = document.querySelector('#yourfirstprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=31;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            
			let box = document.querySelector('#yourpartnerstartingsalary');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=32;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerestimatedannualincome');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=33;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerSeverancepay');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=34;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            if(children_bool == true){
                let box = document.querySelector('#yourfirstprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
            }
            else if(children_bool == false){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
        }
	});
});

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
            for(var i=35;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=36;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirsthighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=37;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=38;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "one"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yoursecondprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=39;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=40;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=41;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourseconduniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=42;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "two"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yourthirdprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=43;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirdjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=44;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirdhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=45;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourthirduniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=46;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "three"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yourfourprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=47;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfourjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=48;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfourhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=49;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfouruniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=50;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "four"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yourfiveprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=51;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfivejuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=52;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfivehighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=53;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfiveuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=54;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "five"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yoursixprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=55;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=56;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=57;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursixuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=58;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "six"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yoursevenprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=59;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=60;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=61;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursevenuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=62;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "seven"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#youreightprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=63;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreightjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=64;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreighthighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=65;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#youreightuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=66;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "eight"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yournineprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=67;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourninejuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=68;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourninehighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=69;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yournineuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=70;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
            var children_number = sessionStorage.getItem('number-children')
            var your_estate = document.getElementById("estate").value;
            if(children_number == "nine"){
                const stat = document.querySelector('.last-state-page');
                stat.textContent = "0"
                // 登録ボタンを活性化
                let last_state = document.querySelector(".last-state-page");
                let next_button = document.querySelector("#next_page2-not");
                $('#next_page2-not').prop('disabled', false);
                next_button.id = "next_page2"
            }
            else{
                let box = document.querySelector('#yourtenprimaryschool');
                //styleのdisplayを変更する関数
                box.style.display='';
                const base_laststate = document.querySelector(".last-state-page").textContent
                const stat = document.querySelector('.last-state-page');
                stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=71;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenjuniorhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=72;i<73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenhighschool');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
            for(var i=73;i<=73;i++){
                console.log(ele_arr[i])
                if(ele_arr[i].style.display != 'none'){
                    ele_arr[i].style.display = 'none';
                }
            }
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourtenuniversity');
			//styleのdisplayを変更する関数
			box.style.display='';
            const base_laststate = document.querySelector(".last-state-page").textContent
            const stat = document.querySelector('.last-state-page');
            stat.textContent = String(Number(base_laststate) - 1)
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
        const name = document.querySelector('#nine-university');
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');

            const stat = document.querySelector('.last-state-page');
            stat.textContent = "0"
            // 登録ボタンを活性化
            let last_state = document.querySelector(".last-state-page");
            let next_button = document.querySelector("#next_page2-not");
            $('#next_page2-not').prop('disabled', false);
            next_button.id = "next_page2"
        }
	});
});

//ワンタイムパスのバリデーション
$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#onetime-password');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#onetime-password');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#onetimepasserr');
        if((!name.value.match(/^([0-9]{6})$/))){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = 'いずれかを選択してください';
            // クラスを追加(フォームの枠線を赤くする)
            name.classList.add('input-invalid');
            // 後続の処理を止める
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
        }
	});
});