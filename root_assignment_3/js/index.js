function hamburgerToggle() {
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.menu-overlay').toggleClass('open');
		$('.menu-overlay').css('z-index', 99);
	});
}

$(document).ready(function() {
	
    hamburgerToggle();
	
	//add click event listener on tiles
	$('.tile').click(function() {
		
	});
});