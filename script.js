$(document).ready(function(){
  $('.sl_slide').slick({
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   //  autoplay: true,
 		// autoplaySpeed: 2000,
  	pauseOnHover:true,
  	pauseOnFocus:true
  });
});

$(document).ready(function(){
  $('.header_burger').click(function(event) {
    $('.header_burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
});