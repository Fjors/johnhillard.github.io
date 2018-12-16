$(document).ready(function(){

particlesJS.load('particles-js', 'particles.json', 
	function(){
            console.log('particles.json loaded...')
        });

$(window).scroll(function(){
  var top = $(this).scrollTop();
  var nav = $('.nav-container');
  if (top === 0){
    nav.removeClass('opacityMenu');
 
  }
  else if (top >=100){
    nav.addClass('opacityMenu');
    
  }
  });

$(window).scroll(function(){
  var top = $(this).scrollTop();
  var navi = $('.logo');
  if (top === 0){
   
    navi.removeClass('deletelogo');
  }
  else if (top >=100){
   
    navi.addClass('deletelogo');
  }
  });

	$('.nav-container a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('.nav-container').on('click', function(){
    $('.nav-open').trigger('click');
});


// 
// var sec1 = "white",
// 		sec2 = "white",
// 		sec3 = "black",
// 		sec4 = "white";
		// five = "#bb6774";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#sec1").position().top) {
				$('body').css('background', $("#sec1").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#sec2").position().top) {
				$('body').css('background', $("#sec2").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#sec3").position().top) {

				$('body').css('background', $("#sec3").attr("data-color"))
		};
		// if ($(document).scrollTop() > $("#sec4").position().top) {

		// 		$('body').css('background', $("#sec4").attr("data-color"))
		// };
		// if ($(document).scrollTop() >= $("#five").position().top) {
		// 		$('body').css('background', $("#five").attr("data-color"))
		// };
});

     var show = 5;
    var w = $('#slidercontainer').width() / show;
    var l = $('.sliderlogo').length;
    
    $('.sliderlogo').width(w);
    $('#slide-container').width(w * l)
    
    function slidercontainer() {
        $('.sliderlogo:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slidercontainer, 2000);
    
    $('#slidercontainer').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slidercontainer, 2000);
    });

});


