








// optional
$('#blogCarousel').carousel({
    interval: 5000
});

$(document).ready(function () {
    $('div.carousel-caption').fadeIn(1000).removeClass('carousel-caption');
});


$(document).ready(function(){
    $(".abcimg1").hover(function(){
        $(".abcimg1").animate({width: '450px',height:'450px'});
    },
    function(){
        $(".abcimg1").animate({width: '400px', height:'400px'});
    },
    
    
    
    
    );
});