$(document).ready(function () {
  var scene01Num = 1;

  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 1800 && scene01Num == 1) {
      scene01Num = 0;
      $("#skill .in_box01")
        .stop()
        .delay(0)
        .css({ top: "300px" })
        .animate({ top: "25px" }, 1000);
      $("#skill .in_box02")
        .stop()
        .delay(200)
        .css({ top: "300px" })
        .animate({ top: "25px" }, 1000);
      $("#skill .in_box03")
        .stop()
        .delay(400)
        .css({ top: "300px" })
        .animate({ top: "50px" }, 1000);
      $("#skill .in_box04")
        .stop()
        .delay(600)
        .css({ top: "300px" })
        .animate({ top: "100px" }, 1000);
      $("#skill .in_box05")
        .stop()
        .delay(800)
        .css({ top: "300px" })
        .animate({ top: "140px" }, 1000);
      $("#skill .in_box06")
        .stop()
        .delay(1000)
        .css({ top: "300px" })
        .animate({ top: "125px" }, 1000);
    } else if (scrollTop < 1500 && scene01Num == 0) {
      scene01Num = 1;
      $("#skill .in_box01")
        .stop()
        .css({ top: "150px" })
        .animate({ top: "300px" }, 1000);
      $("#skill .in_box02")
        .stop()
        .css({ top: "30px" })
        .animate({ top: "300px" }, 1000);
      $("#skill .in_box03")
        .stop()
        .css({ top: "120px" })
        .animate({ top: "300px" }, 1000);
      $("#skill .in_box04")
        .stop()
        .css({ top: "100px" })
        .animate({ top: "300px" }, 1000);
      $("#skill .in_box05")
        .stop()
        .delay()
        .css({ top: "300px" })
        .animate({ top: "100px" }, 1000);
    }
  });
});

   $(document).ready(function () {
            $('.con').hide();//초기값으로 모든div숨김
            $('.con').eq(0).show();//첫번째 div보임

            $('.skill_txt >ul>li').click(function () {
                var i = $(this).index();//버튼이벤트가 적용된 대상의 인덱스값
                console.log(i)
                //$('.con').hide();//클릭시 이전에 보이는 div모두숨김
                $('.con').each(function () {
                    if ($(this).show()) {//this each문에 의해서 해당되는 요소
                        $(this).hide();//조건에 해당되는 요소숨김
                    }
                });
                $('.con').eq(i).show();//인덱스값에 해당하는 div보임
            });
        });     
