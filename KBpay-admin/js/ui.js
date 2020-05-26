$(function() {

    //Accordion menu
    $(".accordion.type01 .head a").click(function(e) {
        e.preventDefault();

        if ($(this).hasClass("on")) {console.log('has');
            $(this).removeClass("on");
            $(this).parents(".head").next().slideUp(150);
        } else {console.log('non-has');
            $(this).addClass("on");
            $(this).parents(".head").next().slideDown(150);
        }
    });


    /*
        Form
    */
    // input : text / with Delete button
    $(".f-ipt-txt.delete input").focus(function() {
        $(this).parent().find(".ico-del").css("display", "block");
    });
    $(".f-ipt-txt.delete .ico-del").click(function() {
        $(this).prev().val("");
        $(this).css("display", "none");
    });
    $(".f-ipt-txt.delete input").blur(function() {
        $(this).parents().find(".ico-del").css("display", "none");
    });

    // Checkbox
    $(".f-chk").click(function() {
        if (!$(this).find("input").attr("disabled")) {
            if ($(this).find("input").prop("checked")) {
                $(this).removeClass("checked");
                $(this).find("input").prop("checked", false);
            } else {
                $(this).addClass("checked");
                $(this).find("input").prop("checked", true);
            }
        }
    });

    //약관동의 전체동의
    $(".agree-terms .checkAll").click(function() {
        if ($(this).find("input").prop("checked")) {
            $(this).parent().next().find("label").addClass("checked");
            $(this).parent().next().find("input").prop("checked", "checked");
        } else {
            $(this).parent().next().find("label").removeClass("checked");
            $(this).parent().next().find("input").prop("checked", "");
        }
    });
    //약관동의 아코디온
    $(".agree-terms.type02 .head .btn").click(function() {
        if ($(this).hasClass("on")) {console.log(1);
            $(this).removeClass("on");
            $(this).parent().next().slideUp(150);
        } else {console.log(2);
            $(this).addClass("on");
            $(this).parent().next().slideDown(150);
        }
    });


    // Radio
    $(".f-rdo").click(function() {
        if (!$(this).find("input").attr("disabled")) {
            if ($(this).find("input").prop("checked")) {
                $(this).removeClass("checked");
                $(this).find("input").prop("checked", false);
            } else {
                $(this).addClass("checked");
                $(this).find("input").prop("checked", true);
            }
        }
    });
    $(".rdoGroup .f-rdo").click(function() {
        $(this).parents(".rdoGroup").find(".f-rdo").removeClass("checked");
        $(this).addClass("checked");
    });


    // bottom sheet
    $(".btnOpenBot").on("click", function() {
        $(".l-dim").show();
        $(".layerBottom").stop().animate({
            bottom: 0
        }, 200, 'swing', function() {
        });
    });

    $("body").on("mouseup", function(e) {
        var ctn = $(".layerBottom");
        var h = $(".layerBottom").height();
        if (ctn.has(e.target).length === 0) {
            $(".l-dim").hide();
            ctn.stop().animate({
                bottom: -h
            }, 200, 'swing', function() {
                //after animate
            });
        }
    });


    // Tab
    $(".tabType01 li a").click(function(e) {
        e.preventDefault();

        $(this).parents(".tab-list").find("a").removeClass("active");
        $(this).addClass("active");

        $(this).parents(".tabUI").find(".tab-item").hide();
        $($(this).attr("href")).show();
    });
    

    

});


