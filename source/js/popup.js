(function() {
  var popup = document.querySelector(".popup");
  var popupOverlay = document.querySelector(".popup-overlay");
  var popupOverlayAkt = document.querySelector(".popup-overlay.popup-js-akt");
  var popupBtnClose = document.querySelector(".popup-close");
  var wrapper = document.querySelector(".wrapper");

  var popupOpenmodal = document.querySelector("[data-id=js-popup-btn-mob]");
  var popupOpenmodalakt = document.querySelector("[data-id=js-popup-btn-akt]");


  if (popupBtnClose) {
    popupBtnClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupOverlay.classList.remove("popup-show");
      document.querySelector("body").classList.remove("overlay");

    });
  }

  if (popupBtnClose) {
    popupBtnClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupOverlayAkt.classList.remove("popup-show");
      document.querySelector("body").classList.remove("overlay");
    });
  }

  if (popupOpenmodal) {
    popupOpenmodal.addEventListener("click", function(evt) {

      popupOverlay.classList.add("popup-show");
      document.querySelector("body").classList.add("overlay");
      //inputName.focus();
    });
  }

  if (popupOpenmodalakt) {
    popupOpenmodalakt.addEventListener("click", function(evt) {
      popupOverlayAkt.classList.add("popup-show");
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
