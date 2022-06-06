$(document).ready(function(){
    $(".menu > #gnb > ul > li:eq(0)").click(function(){
        $("html, body").animate({scrollTop:$("#section01").offset().top},1000);
        return false;
        // 클릭시, 어떠한 값도 돌려주지 않겠다. 본인을 포함한 하위 요소에서 href의 기능을 막겠다
    });
});