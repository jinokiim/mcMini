$(document).ready(function () {

  // lastname 유효성 검사
  $('#signup-form button[name="signup-button"]').click(function(evt) {

    var lastname = $('#signup-form input[name="lastname-input"]')
    // console.log(lastname.val());
    if(lastname.val()) {
      $('span[title="lastname-value"]').show().html('GOOD!').css('color', 'green')
      lastname.removeClass('is-invalid')
      lastname.addClass('is-valid')
    } else {
      $('span[title="lastname-value"]').show().html('올바른 값이 입력되지 않았습니다.').css('color', 'red')
      lastname.removeClass('is-valid')
      lastname.addClass('is-invalid')
      evt.preventDefault();
      lastname.focus();
      // last.value = '';
    }

    // firstnaem 유효성 검사
    var firstname = $('#signup-form input[name="firstname-input"]')
    // console.log(firstname);
    if(firstname.val()) {
      $('span[title="firstname-value"]').show().html('GOOD!').css('color', 'green')
      firstname.removeClass('is-invalid')
      firstname.addClass('is-valid')
    } else {
      $('span[title="firstname-value"]').show().html('올바른 값이 입력되지 않았습니다.').css('color', 'red')
      firstname.removeClass('is-valid')
      firstname.addClass('is-invalid')
    }

    // 국가/지역 유효성 검사  국가 / 지역 을 선택하시오.
    var countryselect = $('#country-input > option:checked')
    // console.log(countryselect);
    if(countryselect.val() != '') {
      $('span[title="country-value"]').show().html('GOOD!').css('color', 'green')
      // countryselect.removeClass('is-invalid')
      // countryselect.addClass('is-valid')
    } else {
      $('span[title="country-value"]').show().html('국가를 선택하시오.').css('color', 'red')
      // countryselect.removeClass('is-valid')
      // countryselect.addClass('is-invalid')
    }



    // 이메일 정규성 검사
    var email = $('#signup-form input[name="email-input"]')
    var emailcheck =  /\S+@\S+\.\S+/.test(email.val())
    if ( !emailcheck ){
      $('span[title="email-value"]').show().html('올바른 이메일 형식으로 입력하시오.').css('color', 'red');
      email.removeClass('is-valid')
      email.addClass('is-invalid')
      evt.preventDefault();
      email.focus();
    } else {
      $('span[title="email-value"]').show().html('GOOD!').css('color', 'green');
      email.removeClass('is-invalid')
      email.addClass('is-valid')
    }

    
    // 암호
    var password = $('#signup-form input[name="password-input"]')
    var num = password.val().search(/[0-9]/g);
    var eng = password.val().search(/[a-z]/ig);
    var spe = password.val().search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // console.log(password.val());
    if(password.val().length < 8 || password.length > 20) {
      $('span[title="pw-value"]').show().html('8자리 ~ 20자리 이내로 입력하시오.').css('color', 'red');
      password.removeClass('is-valid')
      password.addClass('is-invalid')
      evt.preventDefault();
      password.focus();
      // return false
      } else if (password.val().search(/\s/) != -1 ) {
        $('span[title="pw-value"]').show().html('공백 없이 입력하시오.').css('color', 'red');
        password.removeClass('is-valid')
        password.addClass('is-invalid')
        evt.preventDefault();
        password.focus();
        // return false
      } else if (num < 0 || eng < 0 || spe < 0) {
        $('span[title="pw-value"]').show().html('영문, 숫자, 특수문자를 혼합하여 입력하시오..').css('color', 'red');
        password.removeClass('is-valid')
        password.addClass('is-invalid')
        evt.preventDefault();
        password.focus();
        // return false
      } else {
        $('span[title="pw-value"]').show().html('GOOD!').css('color', 'green');
        password.removeClass('is-invalid')
        password.addClass('is-valid')
        // return true
      }
    

    // 암호 확인
    var pwcheck = $('#signup-form input[name="password-check-input"]')
    // console.log(pwcheck);
    if(pwcheck.val() == password.val() && pwcheck.val().length != 0) {
      $('span[title="pwcheck-value"]').show().html('GOOD!').css('color', 'green')
      pwcheck.removeClass('is-invalid')
      pwcheck.addClass('is-valid')
    } else {
      $('span[title="pwcheck-value"]').show().html('비밀번호가 일치하지 않습니다.').css('color', 'red')
      pwcheck.removeClass('is-valid')
      pwcheck.addClass('is-invalid')
    }


    // 전화번호
    var phone = $('#signup-form input[name="phone-input"]')
    // console.log(lastname);
    if(phone.val()) {
      $('span[title="phone-value"]').show().html('GOOD!').css('color', 'green')
      phone.removeClass('is-invalid')
      phone.addClass('is-valid')
    } else {
      $('span[title="phone-value"]').show().html('전화번호를 입력하시오.').css('color', 'red')
      phone.removeClass('is-valid')
      phone.addClass('is-invalid')
      evt.preventDefault();
      phone.focus();
      // last.value = '';
    }
    

    // 회원등급 설정
    var whoru = $('#whoru-input > option:checked')
    // console.log(countryselect);
    if(whoru.val() != '') {
      $('span[title="whoru-value"]').show().html('GOOD!').css('color', 'green')
      // countryselect.removeClass('is-invalid')
      // countryselect.addClass('is-valid')
    } else {
      $('span[title="whoru-value"]').show().html('?Who Are You?').css('color', 'red')
      // countryselect.removeClass('is-valid')
      // countryselect.addClass('is-invalid')
    }


    // 주소 동
    var dong = $('#dong-input > option:checked')
    // console.log(countryselect);
    if(dong.val() != '') {
      $('span[title="dong-value"]').show().html('GOOD!').css('color', 'green')
      // countryselect.removeClass('is-invalid')
      // countryselect.addClass('is-valid')
    } else {
      $('span[title="dong-value"]').show().html('몇동인지 선택하시오.').css('color', 'red')
      // countryselect.removeClass('is-valid')
      // countryselect.addClass('is-invalid')
    }


    // 주소 호
    var ho = $('#signup-form input[name="ho-input"]')
    // console.log(ho);
    if(ho.val() < 101 || ho.val() > 4700) {
      $('span[title="ho-value"]').show().html('올바른 호수를 입력하시오.').css('color', 'red')
      ho.removeClass('is-valid')
      ho.addClass('is-invalid')
      evt.preventDefault();
      ho.focus();
    } else {
      $('span[title="ho-value"]').show().html('GOOD!').css('color', 'green')
      ho.removeClass('is-invalid')
      ho.addClass('is-valid')
    }





  });

  



});