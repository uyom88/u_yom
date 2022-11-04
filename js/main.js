$(function () {
  var menu = $(".nav > li");
  var contents = $("#wrap > div");

  $(".nav> li").click(function (event) {
    event.preventDefault();

    var tg = $(this);
    var i = tg.index();

    var section = $("#wrap > div").eq(i);
    var tt = section.offset().top;

    $("html, body").stop().animate({ scrollTop: tt });
  });
});
