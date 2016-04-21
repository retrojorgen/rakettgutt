var yfunc = function (str, p1, offset, s) {
  p1 = p1.replace("http://www.youtube.com/watch?v=", "");
  p1 = p1.replace(" ", "");

  return '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ p1 + '" frameborder="0" allowfullscreen></iframe>';
}


$("main p").each(function () {
  var editString = $(this).html();
  console.log('editString', $(this).position(), $(this).css('margin-left'));
  var newString = editString.replace(/\[embedyt\](.*?)\[\/embedyt\]/ig, yfunc);
  $(this).html(newString);
  $(this).find('iframe').css('margin-left', "-" + $(this).css('margin-left'));
});

