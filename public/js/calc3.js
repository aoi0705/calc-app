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
            errMsgName.textContent = '4桁の半角数字で入力してください';
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
			let box = document.querySelector('#yourestate');
			//styleのdisplayを変更する関数
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstestate');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yoursecondestate');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yoursavingsbalance');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourlastEducationalinsurance');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourtrip');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourotherexpense');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourstartwork');
            let box2 = document.querySelector('#text');
			//styleのdisplayを変更する関数
			box.style.display='';
            box2.style.display='';
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
        if(!name.value.match(/^([0-9]{2})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '2桁の半角数字で入力してください';
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
			let box = document.querySelector('#yourestimatedannualincome');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourSeverancepay');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourSeverancepayinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourpartnerstratwork');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        if(!name.value.match(/^([0-9]{2})$/)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgName.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgName.textContent = '2桁の半角数字で入力してください';
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
			let box = document.querySelector('#yourpartnerstartingsalary');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourpartnerestimatedannualincome');
			//styleのdisplayを変更する関数
			box.style.display='';
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
			let box = document.querySelector('#yourpartnerSeverancepay');
			//styleのdisplayを変更する関数
			box.style.display='';
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#yourpartnerSeverancepayinput');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yourfirstprimaryschool');
			//styleのdisplayを変更する関数
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 次の項目を表示
			let box = document.querySelector('#yoursecondprimaryschool');
			//styleのdisplayを変更する関数
			box.style.display='';
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
        }
	});
});

$(function(){

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#second-university"');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('change', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#second-university');
        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('#second-university');
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
			// 次の項目を表示
			let box = document.querySelector('#yourthirdprimaryschool');
			//styleのdisplayを変更する関数
			box.style.display='';
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
            return;
        }else{
            // エラーメッセージのテキストに空文字を代入
            errMsgName.textContent ='';
            // クラスを削除
            name.classList.remove('input-invalid');
			// 登録ボタンを活性化
        }
	});
});
