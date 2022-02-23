

(() => {
  

  // nav 바에 색변경 관련
  // function checkMenu() {
  //   if (yOffset > 50) {
  //     document.body.classList.add('local-nav-sticky')
  //   } else {
  //     document.body.classList.remove('local-nav-sticky')
  //   }
  // }
  
  var checkMenu = () => {
    if (yOffset > 50) {
          document.body.classList.add('local-nav-sticky')
        } else {
          document.body.classList.remove('local-nav-sticky')
        }
  };

  var maintitleAnimation = () => {
    var scrollHeight = $(window).scrollTop();
    // 스크롤 높이 출력
    console.log(scrollHeight)
    if (yOffset<1500) {
      document.body.classList.add('main-title-stiky')
    } else {
      document.body.classList.remove('main-title-stiky')
    }
  }







  // 이미지가 스크롤에 따라 고정되고 작아지면서 사라지는 애니매이션
  var imageAnimation = () => {
    var scrollHeight = $(window).scrollTop();
    // 스크롤 높이 출력
    // console.log(scrollHeight)
    //  (1)1880~2600--------------------------
    //  높이
    //     1 = a * 1880 + b  =>
    //     0 = a * 2600 + b  => y1 = (-1/800) * scrollHeight + 3.25
    //  크기
    //     1 = a * 1880 + b =>    a = -0.2/800   b = 1.47
    //    0.8 = a * 2600 + b => s1 = () * scrollHeight + 1.47
    var y1 = (-1/800) * scrollHeight + 3.25
    var s1 = (-0.2/800) * scrollHeight + 1.47
    $('.card-box').eq(0).css('opacity', y1);
    $('.card-box').eq(0).css('transform', `scale(${s1})`);
    //---------------------------------
  }
    




  
    
  $(window).scroll(function(){
    







    yOffset = window.pageYOffset;

    // nav 바 색변경 관련
    checkMenu();
    imageAnimation();
    maintitleAnimation();
  });



})();