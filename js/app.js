


setTimeout(function(){        
    $('.preloader').fadeOut('slow'); 
}, 2000);

    $(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    
function scrollWaypointInit( items, trigger ) {
  items.each( function() {
    var element = $(this),
        osAnimationClass = element.data("animation"),
        osAnimationDelay = element.attr('data-animation-delay');
 
    element.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var trigger = ( trigger ) ? trigger : element;
 
    trigger.waypoint(function() {
        element.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '80%'
    });
  });
}

//Call the init

$(document).ready(function(){

scrollWaypointInit( $('.animateMe') );

});

$('.menu, .overlay').click(function () {
    $('.menu').toggleClass('clicked');
    
    $('#nav').toggleClass('show');
    
});


//Smooth scroll Effect
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});


    
