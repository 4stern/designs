$(function(){
    
    $('#page_home').height($(window).height());
    
    $( document ).scroll(function(e){
        var viewportHeight  = $(window).height(),
            documentHeight  = $(document.body).height(),
            offsetTop       = $(document).scrollTop(),
            scrollPercent = ~~((offsetTop*100) / (documentHeight - viewportHeight));
        document.body.style.backgroundPosition= "0px -"+scrollPercent+"px";
    });
});