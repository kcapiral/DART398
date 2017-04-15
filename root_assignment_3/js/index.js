var isZoomed = false;
var xPos = 0;
var yPos = 0;

//x y values
var DEFAULT_TRANSFORM_COORDINATES = {
	"0": {
		"0": "0px 0px",
		"1": "0px 238px",
		"2": "0px 475px"
	},
	"1": {
		"0": "353px 0px",
		"1": "353px 238px",
		"2": "353px 475px"
	},
	"2": {
		"0": "705px 0px",
		"1": "705px 238px",
		"2": "705px 475px"
	}
};

function hamburgerToggle() {
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.menu-overlay').toggleClass('open');
	});
}

$(document).ready(function() {
	
    hamburgerToggle();
	
	//add click event listener on tiles
	$('.tile').one('click', function(e) {
		isZoomed = true;

		switch (e.currentTarget.className) {
			case "tile top left":
				xPos = 0;
				yPos = 0;
				break;
			case "tile top center":
				xPos = 1;
				yPos = 0;
				break;
			case "tile top right":
				xPos = 2;
				yPos = 0;
				break;
			case "tile middle left":
				xPos = 0;
				yPos = 1;
				break;
			case "tile middle center":
				xPos = 1;
				yPos = 1;
				break;
			case "tile middle right":
				xPos = 2;
				yPos = 1;
				break;
			case "tile bottom left":
				xPos = 0;
				yPos = 2;
				break;
			case "tile bottom center":
				xPos = 1;
				yPos = 2;
				break;
			case "tile bottom right":
				xPos = 2;
				yPos = 2;
				break;
			default:
				break;
		}

		$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);

		setTimeout(function() {
			$('#tile-wrapper').css("transform", "scale(3.5, 3.6666666666666666");
			displayArrow();
		}, 500);
	});

	//keyboard presses depending on zoomed in tiles.
	$(document).keyup(function (e) {
		keyBoardPressEvent(e);
	});

	$('.arrow').click(function (e) {
		switch (e.currentTarget.id) {
			case "arrow-left":
				if (xPos > 0) {
					xPos--;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far left");
				}
				break;
			case "arrow-right":
				if (xPos < 2) {
					xPos++;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far right");
				}
				break;
			case "arrow-up":
				if (yPos > 0) {
					yPos--;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far up");
				}
				break;
			case "arrow-down":
				if (yPos < 2) {
					yPos++;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far down");
				}
				break;
		}

		displayArrow();
	});

	function keyBoardPressEvent (e) {
		var KEY_LEFT = 37;
		var KEY_RIGHT = 39;
		var KEY_UP = 38;
		var KEY_DOWN = 40;
		
		if (isZoomed) {

			if (e.keyCode === KEY_LEFT) {
				console.log("KEYLEFT!");

				if (xPos > 0) {
					xPos--;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far left");
				}
			}

			if (e.keyCode === KEY_RIGHT) {
				console.log("KEYRIGHT!");

				if (xPos < 2) {
					xPos++;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far right");
				}
			}

			if (e.keyCode === KEY_UP) {
				console.log("KEYUP!");

				if (yPos > 0) {
					yPos--;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far up");
				}
			}

			if (e.keyCode === KEY_DOWN) {
				console.log("KEYDOWN!");

				if (yPos < 2) {
					yPos++;
					$('#tile-wrapper').css("transform-origin", DEFAULT_TRANSFORM_COORDINATES[xPos][yPos]);
				} else {
					console.log("im too far down");
				}
			}

			displayArrow();
		}

	}

	function displayArrow () {
		$('.arrow').css("display", "block");

		if(xPos == 0) {
			$('#arrow-left').css("display", "none");
		}

		if (xPos == 2) {
			$('#arrow-right').css("display", "none");
		}

		if (yPos == 0) {
			$('#arrow-up').css("display", "none");
		}

		if (yPos == 2) {
			$('#arrow-down').css("display", "none");
		}
	}
});