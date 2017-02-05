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
