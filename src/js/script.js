var btntel = document.querySelector('.header-contacts__button');
var closemodal = document.querySelector('.popup-close');
var popup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');

  function modal(){
    overlay.style.display = "block"
    console.log(11)
  };
  function modalclose(){
    overlay.style.display = "none"
  };
  
  btntel.addEventListener('click', modal);
  closemodal.addEventListener('click', modalclose);


  $(document).ready(function(){
    var link = $('.menu-link-line');
    var link_active = $('.menu-link_active');
    var menu_mobile = $('.menu-mobile');
    var nav_link = $('.menu-mobile a');

    link.click(function(){
      link.toggleClass('menu-link_active');
      menu_mobile.toggleClass('menu-mobile_active');
    });
    nav_link.click(function(){
      link.removeClass('menu-link_active');
      menu_mobile.toggleClass('menu-mobile_active');
    });

  });