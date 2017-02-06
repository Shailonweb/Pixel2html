 $(document).ready(function () {
                var height = window.innerHeight;
                var width = window.innerWidth;
                //alert(width);
var options = { direction: 'left' };
	var effect = 'slide';
	var duration = 500;
	$(".navbar-toggle").click(function(e){
		e.stopPropagation();
    // Set the options for the effect type chosen
    

    // Set the duration (default: 400 milliseconds)
    
		$("#navbar").toggle(effect, options, duration);
		
		$('html').toggleClass('killscroll');
		
		})
if(width<768)
{
$(document).click(function(){
	$('html').removeClass('killscroll');
	$("#navbar").hide(effect, options, duration);
	});
}
else
{
	$(window).resize(function(){
		
		$(document).click(function(){
	$('html').removeClass('killscroll');
	$("#navbar").hide();
	});
		
		});
	
}

$(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scrolltop').fadeIn(); 
    } else { 
        $('#scrolltop').fadeOut(); 
    } 
});
$("#scrolltop").click(function(){
	
	  $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
	});
});	


var spinner = {
    index: 0,
    auto: function(currentIndex) {
		
      if (currentIndex != undefined) {
        spinner.index = currentIndex % spinner.quotes.length;
      } else {
        spinner.index = (spinner.index + 1) % spinner.quotes.length;
      }
      spinner.quotes.removeClass("active-box");
      $(spinner.quotes[spinner.index]).addClass("active-box");
      spinner.dots.removeClass('active_item');
      $(spinner.dots[spinner.index]).addClass('active_item');
	  //$('.slider-wrap').height($('.active-box').height());
    },

    initial: function(){
		
		
      this.quotes = $(".item");
      this.images = $(".quote-image");
      spinner.quotes.first().addClass("active-box");
      //dots
      for (i = 0; i < spinner.quotes.length; i++) {
        $('.nav-dots').append('<li class="nav-dot"></div>');
      }
      this.dots = $(".nav-dot");
      $(spinner.dots).first().addClass('active_item');
	  
    },

    dotnav: function(){
      $(spinner.dots).on("click", function(e){
		 
        var currentIndex = $(spinner.dots).index(this);
        spinner.auto(currentIndex);
        window.clearInterval(interval);
        interval = window.setInterval(spinner.auto, 6500);
		
      });
    },
	btn: function(){
      $('.slide_navigation').on("click", function(e){
		 
        var currentIndex = $(spinner.dots).next.index(spinner.dots);
        spinner.auto(currentIndex);
        window.clearInterval(interval);
        interval = window.setInterval(spinner.auto, 6500);
		
      });
    }
  }

$(document).ready(function() {
  spinner.initial();
  spinner.dotnav();
  spinner.btn();
  interval = window.setInterval(spinner.auto, 3000);
 
});
