  var navMain = document.querySelector('.header-nav');
  var navToggle = document.querySelector('.header-nav__toggle');
  var contactsMap = document.querySelector('.cooperation__map');

  contactsMap.classList.remove('cooperation__map--nojs');

  navMain.classList.remove('header-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('header-nav--closed')) {
      navMain.classList.remove('header-nav--closed');
      navMain.classList.add('header-nav--opened');
    } else {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--opened');
    }
  });
