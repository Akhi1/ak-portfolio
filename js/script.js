$(document).ready(function(){

  /* scroll to div on nav element select */
	$("#men1").click(function(){
		$('html, body').animate({
	    'scrollTop': $("header").offset().top},
	    'slow');
			$(this).addClass(".active");
	});
	$("#men2").click(function(){
		$('html, body').animate({
	    'scrollTop': $(".about-me").offset().top},
	    'slow');
	});
	$("#men3").click(function(){
		$('html, body').animate({
	    'scrollTop': $(".my-skills").offset().top},
	    'slow');
	});
	$("#men4").click(function(){
		$('html, body').animate({
	    'scrollTop': $(".my-projects").offset().top},
	    'slow');
	});
	$("#men5").click(function(){
		$('html, body').animate({
	    'scrollTop': $(".contact-me").offset().top},
	    'slow');
	});

	/* fix navbar after scroll */
	$(window).bind('scroll', function(){
    	if($(window).scrollTop() > 450){
        	$('nav').addClass('fixed-nav'); /* you can also use toggleClass() */
    	}
    	else{
        	$('nav').removeClass('fixed-nav');
    	}
	});
	/* changing properties of active menu item */
	
	
	/* profile image toggle */
	$("#profile-img").click(function(){
   		$(this).attr('src', "imgs/profile-pik1.jpg");
 	});

});
