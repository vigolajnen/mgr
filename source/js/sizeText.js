$(".product__intro").text(function(i, text) {
  var size = 80;
  if (text.length >= size) {
    text = text.substring(0, size);
    var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела
    text = text.substring(0, lastIndex) + "..."; // обрезаем до последнего слова
  }

  $(this).text(text);
});
