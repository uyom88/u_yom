window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var mHtml = $("html");
var page = 1;
mHtml.animate({ scrollTop: 0 });

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 6) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop }, "slow");
});

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

// q mn

$(function () {
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() + 300;
    $("#q_mn")
      .stop()
      .animate({ top: windowTop + "px" }, 500);
    //$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);
  });
});
