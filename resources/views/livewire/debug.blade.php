<div>
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

        <div class="form-group" style="display: none;" name="nickname_form">
           <label for="text">あなたのニックネームを教えてください:</label><br>
           <input type="text" id="nickname" name="nickname" class="form-control"><br>
        </div>

        <div class="form-group" style="display: none;" name="yourbirthday">
           <label for="text">あなたの生年月日（西暦）を教えてください。</label><br>
           <input type="text" id="birthday" name="birthday" class="form-control" wire:model.lazy="birth"><br>
           @error('birth')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="yourpost">
           <label for="text">あなたの郵便番号を教えてください</label><br>
           <input type="text" id="post-number" name="post-number" class="form-control"><br>
           @error('postnumber')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="yourjob">
            <label for="inputState">あなたの職業を教えてください</label>
            <select id="job" name="job" class="form-control">
                <option selected></option>
                <option value="employee">会社員</option>
                <option value="housewife">主婦</option>
            </select>
           @error('hisuonly')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="yourpartner">
           <label for="text">配偶者・パートナーの有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="spouse" id="spouse" autocomplete="off" checked>いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="spouse" id="single" autocomplete="off">いない
                </label>
            </div>
        </div>

        <div class="form-group" style="display: none;" name="partnerbirthday">
           <label for="text">配偶者・パートナーの生年月日を教えてください</label><br>
           <input type="text" id="spouse-birthday" name="spouse-birthday" class="form-control"><br>
           @error('birth')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="partnerjob">
           <label for="inputState">配偶者・パートナーの職業を教えてください</label>
            <select id="spouse-job" name="spouse-job" class="form-control">
                <option selected></option>
                <option value="employee">会社員</option>
                <option value="housewife">主婦</option>
            </select>
            @error('hisuonly')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="yourchildren">
           <label for="text">子供の有無</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                    <input type="radio" name="children" id="children" autocomplete="off" checked>いる
                </label>
                <label class="btn btn-primary">
                    <input type="radio" name="children" id="not-children" autocomplete="off">いない
                </label>
            </div>
        </div>

        <div class="form-group" style="display: none;" name="childrennumber">
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
            @error('hisuonly')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="firstchildrenbirth">
           <label for="text">1人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="first-birthday" name="first-birthday" class="form-control"><br>
            @error('birth')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="firstchildrensex">
           <label for="text">1人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
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
        </div>

        <div class="form-group" style="display: none;" name="secondchildrenbirth">
           <label for="text">2人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="second-birthday" id="second-birthday" class="form-control"><br>
            @error('birth')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" name="secondchildrensex">
           <label for="text">2人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
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
        </div>

        <div class="form-group" style="display: none;" name="thirdchildrenbirth">
           <label for="text">3人目の生年月日<br>
                （今後、ご出産予定の場合は、想定時期を入力してください。）</label><br>
           <input type="text" id="third-birthday" class="third-birthday"><br>
            @error('birth')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group" style="display: none;" style="display: none;" name="thirdchildrensex">
           <label for="text">3人目の性別</label><br>
           <div class="btn-group btn-group-toggle" data-toggle="buttons">
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
        </div>
        <button type=submit class="btn btn-primary mx-auto d-block">現在家計簿入力へ進む</button>
    </form>

</div>
