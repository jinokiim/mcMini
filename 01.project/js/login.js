$(document).ready(function () {

  // lastname 유효성 검사
  $('#input-section button[name="login-button"]').click(function(evt) {

    var myid = $('#input-section input[name="id-text-field"]')
    var mypw = $('#input-section input[name="password-text-field"]')
    // console.log(myid.val());
    // console.log(mypw.val());
    if(!myid.val()) {
      $('span[title="myid-value"]').show().html('아이디를 입력하시오.').css('color', 'red')
      myid.removeClass('is-valid')
      myid.addClass('is-invalid')
      evt.preventDefault();
      myid.focus();
    } else if (!mypw.val()){
      $('span[title="myid-value"]').show().html('비밀번호를 입력하시오.').css('color', 'red')
      mypw.removeClass('is-valid')
      mypw.addClass('is-invalid')
      evt.preventDefault();
      mypw.focus();
      // last.value = '';
    }
  });

  



});