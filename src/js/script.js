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