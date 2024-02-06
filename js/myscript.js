$(function () {

    //메뉴 방법1
    // $(".main > li").hover(function(){
    //     $(this).find(".sub").stop().slideDown();
    // }, function(){
    //     $(this).find(".sub").stop().slideUp();
    // })

    //메뉴 방법2
    $(".main > li").mouseover(function () {
        $(this).find(".sub").stop().slideDown();
    }) //

    $(".main > li").mouseout(function () {
        $(this).find(".sub").stop().slideUp();
    }) //

    //이미지 슬라이드 방법1
    // setInterval(function(){
    //     $(".top_move").animate({top:"-400px"}, 500, function(){
    //         $(".top_move").css({top:"0"});
    //         $(".top_move").append($(".top_move li").eq(0));
    //     })
    // },2000)//

    //이미지 슬라이드 방법2
    var n = 0;
    setInterval(function () {
        if (n == 2) {
            n = 0;
        } else {
            n++;
        }
        pos = n * -400 + "px";
        $(".top_move").animate({
            top: pos
        }, 500);
    }, 2500)


    //탭메뉴
    $(".tap h2").click(function(){
        $(".tap h2").removeClass("on");
        $(this).addClass("on");
        $(".tap ul").hide();
        $(this).next().css({display:"flex"});
    })//


    //pop
    $(".p_click").click(function(){
        $(".pop").show()
    })
    $(".close").click(function(){
        $(".pop").hide()
    })








    // // footer 아래 탭
    // $(".txt h2").click(function(){
    //     $(".txt h2").removeClass("on");
    //     $(this).addClass("on");
    //     i = $(this).index();
    //     $(".content ul").hide();
    //     $(".content ul").eq(i).show();
    // })
}) //jquery