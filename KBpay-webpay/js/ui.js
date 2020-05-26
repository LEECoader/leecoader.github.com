
// $(function() {
    $(document).ready(function() {
    
        /*
            Form
        */
        // Input : text & number
        $(".form_text").focusin(function () {
            $(this).addClass('on');
        });     
        $(".form_text").focusout(function() {
            var result = $(this).find(".text").val();
            if (result == "") {
                $(this).removeClass('on');
            }else{
                $(this).addClass('out');
            }
        });
        //auto focus
        $('body').on('keyup', 'input.certi-input', function()
        {
            var key = event.keyCode || event.charCode;
            var inputs = $('input.certi-input');
            if(($(this).val().length === this.size) && key != 32) 
            {
            inputs.eq(inputs.index(this) + 1).focus();  
            } 
            if( key == 8 || key == 46 )
            {
            var indexNum = inputs.index(this);
            if(indexNum != 0)
            {
            inputs.eq(inputs.index(this) - 1).val('').focus();
            }
            }
        });
    
        // Checkbox
        $(".f-chk").click(function() {
            if (!$(this).find("input").attr("disabled")) {console.log($(this).find("input").prop("checked"));
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
                $(this).parent().next().slideUp(150);
                $(this).next().removeClass("on");
            } else {
                $(this).parent().next().find("label").removeClass("checked");
                $(this).parent().next().find("input").prop("checked", "");
                $(this).parent().next().slideDown(150);
                $(this).next().addClass("on");
            }
        });
        // 하위내용이 모두 체크 되었을 경우 접히기
        $(".agree-terms .list .f-chk").click(function() {
            var fullChecked = $(this).parents(".list").find(".f-chk").length;
            var cnt = 0;
            $(this).parents(".list").find(".f-chk").each(function() {
                if ($(this).find("input").prop("checked")) {
                    cnt++;
                }
            });
            if (cnt == $(this).parents(".list").find(".f-chk").length) {
                $(this).parents(".list").prev().find("label").addClass("checked");
                $(this).parents(".list").prev().find("label input").prop("checked", "checked");
                $(this).parents(".list").prev().find(".btn").removeClass("on");
                $(this).parents(".list").slideUp(150);
            }
        });
        //약관동의 아코디온
        $(".agree-terms .head button").click(function() {
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
                $(this).parent().next().slideUp(150);
            } else {
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
    
    
        // Tab
        $(".tabType01 li a").click(function(e) {
            e.preventDefault();
            $(this).parents(".tab-list").find("a").removeClass("active");
            $(this).addClass("active");
            $(this).parents(".tabUI").find(".tab-item").hide();
            $($(this).attr("href")).show();
        });


        // Bottom Sheet
        // console.log( "window : " + $(window).height() );
        // console.log( "window - 16 : " + ($(window).height() - 16) );
        // console.log( ".l-bottom : " + $(".l-bottom").height() );
        // console.log( ".l-bottom-wrap .head : " + $(".l-bottom-wrap .head").innerHeight() );
        // console.log( ".l-bottom .btn-group : " + $(".l-bottom .btn-group").innerHeight() );
        // console.log( ".header : " + $(".header").innerHeight() );
        // console.log( ".contents : " + $(".contents").height() );
        // console.log( ".bottom-btn-area : " + $(".bottom-btn-area").height() );
        // console.log( "window - header : " + ($(window).height() - $(".contents").height()) );

        // 윈도우 사이즈 - 16 보다 컨텐츠가 클경우
        if ($(".l-bottom .btn-group").length > 0) {
            if (($(window).height() - 16) < ($(".l-bottom").height() + $(".l-bottom .btn-group").height())) {
                $(".l-bottom-wrap .l-contents").height( $(window).height() - 32 - $(".l-bottom-wrap .head").innerHeight() - $(".l-bottom .btn-group").innerHeight());
                $(".l-bottom-wrap .l-contents").addClass("scroll");
            }
        } else {
            if (($(window).height() - 16) < $(".l-bottom").height()) {
                $(".l-bottom-wrap .l-contents").height( $(window).height() - 32 - $(".l-bottom-wrap .head").innerHeight());
                $(".l-bottom-wrap .l-contents").addClass("scroll");
            }
        }
        // Bottom Sheet close
        $(".l-bottom .head .close").click(function() {
            hideBottomSheet($(this).parents(".l-bottom"), $(this).parents(".l-bottom").height());
        });
        // function : hide Bottom Sheet
        function hideBottomSheet(obj, h) {
            obj.stop().animate({
                bottom: -h
            }, 200, 'swing', function() {
                //after animate
                if ($(".l-pop").css("display") == "none" || $(".l-pop").length < 1) {
                    $(".l-dim").hide();
                }
            });
        }


        // Button half Add
        $(".btn-group").each(function() {
            if ($(this).find("button").length > 1) {
                $(this).addClass("half");
            }
        });
        
        // Contents height fixed
        if ($(".bottom-btn-area.fixed").length > 0) {
            // 윈도우높이 - 헤더 - 하단버튼 = 스크롤 컨텐츠 높이
            $(".contents").height( $(window).height() - $(".header").innerHeight() - $(".bottom-btn-area").height() );
            $(".contents").addClass("scroll");
        }


        /*
            Bottom Button setting
            윈도우h > 컨텐츠높이 + 헤더
        */
        if ($(window).height() > ($(".contents").height() + $(".header").innerHeight())) {
            // console.log('short');
            $(".bottom-btn-area").addClass("float");
        }


        // Tooltip
        $(".tip").click(function () {
            $('.tip-box').fadeIn('fast');
        });     
        $(".tip-box .btn-close").click(function () {
            $('.tip-box').fadeOut('fast');
        });


        // Layer popup
        // close
        $(".l-pop .btn-group button").click(function() {
            $(this).parents(".l-pop").hide();
            $(".l-dim").hide();
        });

    
    
    
        // Except Event 이벤트 제외
        $("body").on("mouseup", function(e) {
            
            // Bottom sheet
            console.log("l-bottom length chk: "+$(e.target).parents(".l-bottom").length);
            if ($(e.target).parents(".l-bottom").length < 1) {
                // hideBottomSheet($(".l-bottom"), $(".l-bottom").height());
            }
            
        });   
        
        
    
    });
    
    
    
    
    // 하단 Bottom sheet 열기
    function opBotSheet(id) {
        $(".l-dim").show();
        $("#" + id).stop().animate({
            bottom: 0
        }, 200, 'swing', function() {
            $(".form_text .text").blur();
            $(".form_text .text").removeClass("on");
        });
    }
    
    
    // Toast popup call
    function showToast(obj, msg) {
        var str = "<p class='msg-toast'><span>" + msg + "</span></p>";
        $("."+obj).after(str).fadeIn(1000);
        setTimeout(function() {
            $(".msg-toast").fadeOut(500);
        }, 2500);
        setTimeout(function() {
            $(".msg-toast").remove();
        }, 4000);
    }


    // Layer popup (알림, 확인)
    function openLayerPop(id) {
        $(".l-dim").show();
        $("#"+id).fadeIn(200);
    }
    

    