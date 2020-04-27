$(function() {
    
    const menu = $(".menu");
    const btn = menu.find("> button");
    const list = menu.find(".list");
    let state = 0;
    let angle = 0;

    btn.click(function(e){

        if(state == 1){
            angle -= 45;
            $(this).stop().css({
                "transform": "rotate(" + angle + "deg)" 
            }, 500);
            list.stop().slideUp(500);
            state = 0;
        }else if(state == 0){
            angle += 45;
            $(this).stop().css({
                "transform": "rotate(" + angle + "deg)" 
            }, 500);
            list.stop().slideDown(500);
            state = 1;
        }
    });


    const graph = $(".graph");
    const item = graph.find(".list > li");

    item.each(function(){
        let itemH = $(this).text();
        $(this).css("height", itemH);

        console.log(itemH);
    });


    setTimeout(function(){
        $(".loader").hide();
    }, 5000);
    



});