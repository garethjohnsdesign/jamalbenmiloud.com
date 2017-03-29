$(document).foundation();

$('body').smoothScroll({
  delegateSelector: '.top-bar a',
  offset: -64
});

$('.top-bar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})


wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


$(window).scroll(function() {
	if ($(window).scrollTop() > 100 ){
 		$('.top-bar').addClass('show');
  } else {
    $('.top-bar').removeClass('show');
 	};   	
});