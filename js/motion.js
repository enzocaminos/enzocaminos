var current;
$(document).ready(function(){
    $(document).on("scroll", function (){
        var current = $(document).scrollTop();
        if( current > 160 ) {
            $('#foto').stop().css({ "left": "70px"});
            $('#foto').stop().css({ "position": "fixed",  "top": "38px"});
            $('#presentacion').css({ "padding": "100px 2% 0 2%"});
            $('#foto').stop().css({"width":"50px"});
            $('#top').css({"opacity":"1","transform":"rotate(0deg)"});
            $('nav > ul').stop().css({ "padding-left": "140px"});
            $('#back-photo').stop().css({ "width": "130px"});
        }
        if( current < 150 ) {
            $('#foto').stop().css({ "position": "absolute"});
            $('#foto').stop().css({ "left": "50%"});
            $('#foto').stop().css({ "top":"250px"});
            $('#presentacion').css({ "padding": "40px 2% 0 2%"});
            $('#foto').stop().css({"width":"80px"});
            $('#top').css({"opacity":"0","transform":"rotate(90deg)"});
            $('nav > ul').stop().css({ "padding-left": "0px"});
            $('#back-photo').stop().css({ "width": "0px"});
        }
    });
    $('#foto').click(function(){
        $('html, body').stop().animate({
            scrollTop: $('body').offset().top-50
        }, 500);
    });
     $('#go-work').click(function(){
        $('html, body').stop().animate({
            scrollTop: $('#work').offset().top+200
        }, 500);
    });
    $("#menu > li > a").stop().click(function (){
        var target = $(this).attr('data');
        var targetPlace = $('#'+target);
        $('html, body').animate({
            scrollTop: targetPlace.offset().top+50
        }, 500);            
    });
});