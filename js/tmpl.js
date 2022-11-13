function wrapWindowByMask(){
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();  

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({'width':maskWidth,'height':maskHeight});  

    //애니메이션 효과 
    $('#mask').fadeIn(100);      

    //윈도우 같은 거 띄운다.
    $('.window').show();
}

$(document).ready(function(){
    //검은 막 띄우기
    $('.openMask').click(function(e){
        e.preventDefault();
        wrapWindowByMask();
    });

    //닫기 버튼을 눌렀을 때
    $('.window .bn_close').click(function (e) {  
        //링크 기본동작은 작동하지 않도록 한다.
        e.preventDefault();  
        $('#mask, .window').hide();  
    });       

});


$( document ).ready(function() {
  $('.openMask').on('click', function() {
    $('.wrapper').toggleClass('open');
    return false;
  });

});



$(function(){
	tab();
});

function tab(){
    $("#tab .tab-nav_link").on("click", function (e) {
        var $this = $(this);
        e.preventDefault();
        var selector = $this.attr("href");
        $("#tab .tab-nav_link").removeClass("active");
        $("#tab .tab-body").hide();
        $this.addClass("active");
        $(selector).show();
    });	
}