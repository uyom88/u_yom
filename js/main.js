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

$(".skill-per").each(function () {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
    }
  );
});
