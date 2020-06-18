$(function() {

    // init
    
    // 컨텐츠 & 레이어내부 컨텐츠 영역 높이 세팅
    pageCtsH = $(".contents").height(); // Page 컨텐츠 높이
    pageBtmH = $(".bottom-group").outerHeight();    // Page 하단영역 높이
    layerCtsH = $(".l-contents").height();  // Layer popup 컨텐츠 높이
    layerBtmH = $(".l-bottom-group").outerHeight(); // Layer popup 하단영역 높이

    setContentsH(); // 페이지 컨텐츠 스크롤 영역 세팅
    
    
    /*
        Form
    */
    // Input : text & number
    $(".form_text").focusin(function () {
        $(this).addClass('on');
    });     
    $(".form_text").focusout(function() {
        $(".form_text").each(function() {
            if ($(this).find(".text").val() == "") {
                // 텍스트 안에 값이 없다면 라벨원위치
                if (!$(this).find("input").hasClass("curInput")) {
                    $(this).removeClass('on');
                }

            } else {
                // 텍스트 안에 값이 있다면 라벨 상단 유지
                $(this).addClass('out');
            }
        });
    });

    // Checkbox
    $(".f-chk").click(function() {
        chkToggle(this);
    });
    $(".f-chk").keydown(function() {
        if (window.event.keyCode == 13) {
            chkToggle(this);
        }
    });
    function chkToggle(obj) {
        if (!$(obj).find("input").attr("disabled")) {
            if ($(obj).find("input").prop("checked")) {
                $(obj).removeClass("checked");
                $(obj).find("input").prop("checked", false);
            } else {
                $(obj).addClass("checked");
                $(obj).find("input").prop("checked", true);
            }
        }
    }


    /*
        약관동의
    */
    // 유형 1 : 하위항목 체크시 상위체크 후 슬라이드 접기
    // 전체동의 click
    $(".agree-terms .checkAll").click(function() {
        checkAll(this);
    });
    $(".agree-terms .checkAll").keydown(function() {
        if (window.event.keyCode == 13) {
            checkAll(this);
        }
    });
    function checkAll(obj) {
        if ($(obj).find("input").prop("checked")) {
            $(obj).parent().next().find("label").addClass("checked");
            $(obj).parent().next().find("input").prop("checked", true);
            $(obj).parent().next().slideUp(150);
            $(obj).next().removeClass("on");
        } else {
            $(obj).parent().next().find("label").removeClass("checked");
            $(obj).parent().next().find("input").prop("checked", false);
            $(obj).parent().next().slideDown(150);
            $(obj).next().addClass("on");
        }
    }
    // 하위내용 체크 click
    $(".agree-terms .list .f-chk").click(function () {
        subCheck(this);
    });
    $(".agree-terms .list .f-chk").keydown(function() {
        if (window.event.keyCode == 13) {
            subCheck(this);
        }
    });
    function subCheck(obj) {
        var cnt = 0;
        $(obj).parents(".list").find(".f-chk").each(function() {
            if ($(this).find("input").prop("checked")) {
                cnt++;
            }
        });

        if (cnt < $(obj).parent().parent().find("> li > .f-chk").length) {
            // 항목 모두 체크되지 않았을때 상위 체크해제
            $(obj).parent().parent().prev().find("label").removeClass("checked");
            $(obj).parent().parent().prev().find("label input").prop("checked", false);
        } else {
            // 항목 모두 체크되었을때 상위 체크
            $(obj).parent().parent().prev().find("label").addClass("checked");
            $(obj).parent().parent().prev().find("label input").prop("checked", true);
            if (!$(obj).parents(".agree-terms").hasClass("noSlide")) {
                $(obj).parent().parent().prev().find(".btn").removeClass("on");
                $(obj).parent().parent().slideUp(150);
            }
        }
        cnt = 0;
    }


    // Tooltip
    $(".tip").click(function () {
        $('.tip-box').fadeIn('fast');
    });     
    $(".tip-box .btn-close").click(function () {
        $('.tip-box').fadeOut('fast');
    });
    
});

/*
    Function
*/

    /*
        페이지 컨텐츠 높이
    */

    var pageCtsH = 0;
    var pageBtmH = 0;
    var layerCtsH = 0;
    var layerBtmH = 0;

    // 페이지 컨텐츠영역
    function setContentsH() {
        if ($(".bottom-group").length > 0) {
            $(".contents").height(pageCtsH - pageBtmH);
        }
    }

    // 레이어팝업 컨텐츠영역
    function setLayerCtsH() {
        if ($(".l-bottom-group").length > 0) {
            $(".l-contents").height(layerCtsH - layerBtmH);
        }
    }


    // open Layer popup
    var callBtnObj;
    function openLayer(id, obj) {
        callBtnObj = $(obj);
        $(".l-dim").show();
        $("#" + id).show();
        setTimeout(function() {
            $(".l-contents").height(layerCtsH - $("#" + id + " .l-bottom-group").outerHeight());
        }, 1);
        setTimeout(function() {
            $("#" + id).find(".l-header .close").focus();
        }, 300);
    }
    function openLayerEnter(id, obj) {
        if (window.event.keyCode == 13) {
            openLayer(id, obj);
        }
    }

    // close Layer popup
    function closeLayer(id) {
        $("#" + id).hide();
        $(".l-dim").hide();
        setTimeout(function() {
            callBtnObj.focus();
        }, 300);
    }

    // 우측 콤보버튼 click
    function agreeCombo(obj) {
        if ($(obj).hasClass("on")) {
            $(obj).removeClass("on");
            $(obj).parent().next().slideUp(150);
        } else {
            $(obj).addClass("on");
            $(obj).parent().next().slideDown(150);
        }
    }