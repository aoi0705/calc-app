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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourbonus');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerincome');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerbonus');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourfoodexpenses');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourlivingcost');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourbeautybill');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourhouseclass');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourmanagecost');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourbill');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourpcbill');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourphonebill');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourlone');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourinsurancebill');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#youreducationalinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#youreducationexpenses');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourmedicalinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourlifeinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourestateinvestment');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourassetmanagement');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 次の項目を表示
			let box = document.querySelector('#yourformcontrol');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{0,100})$/)){
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
			// 確認ボタンを有効化
			
        }
	});
});