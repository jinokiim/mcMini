

  var checkMenu = () => {
    if (yOffset > 50) {
          document.body.classList.add('local-nav-sticky');
          document.body.classList.add('local-nav-links-sticky');
        } else {
          document.body.classList.remove('local-nav-sticky');
          document.body.classList.add('local-nav-links-sticky');
        }
  };
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    // nav 바 색변경 관련
    checkMenu();

  })

      



