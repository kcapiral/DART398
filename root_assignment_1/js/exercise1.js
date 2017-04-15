// JavaScript Document
// A $( document ).ready() block.
$( document ).ready(function() {
	var elem = $(".textContainer");
	var maxScrollTop = elem[0].scrollHeight - elem.outerHeight();
//	alert(maxScrollTop);
//	alert($(".textContainer").scrollTop($(".textContainer").prop("scrollHeight")));
	
	$(".textContainer").scroll(function() {
		if( $(".textContainer").scrollTop() <= maxScrollTop/3) {
			$(".scrollImage").attr('src', "../img/exercise1/1_waark.png");
		}
		
		
		if( $(".textContainer").scrollTop() > maxScrollTop/3 && $(".textContainer").scrollTop() <= 2 * (maxScrollTop/3)) {	
			$(".scrollImage").attr('src', "../img/exercise1/2_thing.png");
		}
		
		if( $(".textContainer").scrollTop() > 2 * (maxScrollTop/3)) {	

			$(".scrollImage").attr('src', "../img/exercise1/3_nacache.png");
		}
	});
});

//With help from Daniel Yoo, a student in Concordia.