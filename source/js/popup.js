(function() {
  var popup = document.querySelector(".popup");
  var popupOverlay = document.querySelector(".popup-overlay");
  var popupBtnClose = document.querySelector(".popup-close");
  var wrapper = document.querySelector(".wrapper");
  //var popupOpen = document.querySelector('[data-id=js-popup-btn]');
  var popupOpenmodal = document.querySelector("[data-id=js-popup-btn-mob]");

  // var popupForm = popup.querySelector('form');
  //var inputName = popup.querySelector('[id=name]');
  // var inputPhone = popup.querySelector('[id=phone]');
  // var inputEmail = popup.querySelector('[id=email]');

  // popupOpen.addEventListener('click', function (evt) {
  //   popupOverlay.classList.add('popup-show');
  //   document.querySelector('body').classList.add('overlay');
  //   inputName.focus();
  // });

  if (popupBtnClose) {
    popupBtnClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupOverlay.classList.remove("popup-show");
      document.querySelector("body").classList.remove("overlay");

      // document.querySelector(".navigation").classList.add("navigation--closed");

      // document.querySelector('body').style.overflow = 'visible';
      // document.querySelector('.paranja').style.position = 'relative';
      // document.querySelector('.page-header__right').style.opacity = '1';
    });
  }

  if (popupOpenmodal) {
    popupOpenmodal.addEventListener("click", function(evt) {
      // document.querySelector(".navigation").classList.remove("navigation--opened");

      popupOverlay.classList.add("popup-show");
      document.querySelector("body").classList.add("overlay");
      //inputName.focus();
    });
  }

  $(".popup-order__input--file").change(function() {
    if ($(this).val() != "")
      $(this)
        .prev()
        .text("Выбрано файлов: " + $(this)[0].files.length);
    else
      $(this)
        .prev()
        .text("Прикрепить файл (jpg)");
  });
})();
