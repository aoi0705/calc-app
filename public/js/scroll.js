$(function(){  
    //disabledを設定しておく
    // $('#consent-button').prop('disabled', true);
    //一番下までスクロールするとボタンが押せる（ボタンのdisabledが外れる）
    var scrollend = false;
    $('.modal-body').scroll(function(event){
      if (
        scrollend == false
        && event.target.clientHeight + event.target.scrollTop >= event.target.scrollHeight
      ) {
        $("#consent-button").prop('disabled', false);
        scrollend = true;
      }
    });
  });