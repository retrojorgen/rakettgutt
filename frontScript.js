$(function () {
	console.log('hello');
	var mousePosX = window.innerWidth / 2;
	var mousePosY = window.innerHeight / 2;
	

	var resetTimeout = function () {
		console.log("resetting");
		TweenMax.to("#rakett-gutt", 0.25, {x: 0, y: 0, rotation: "0deg", ease: Power4.easeOut});
		TweenMax.to("#rakett-gutt-small", 0.25, {x: 0, y: 0, rotation: "0deg", ease: Power4.easeOut});
		TweenMax.to("#rakett-gutt-smaller", 0.25, {x: 0, y: 0, rotation: "0deg", ease: Power4.easeOut});
	};

	var timeout = setTimeout(resetTimeout, 1000);
	$(document).on("mousemove", function (event) {
		
		if(mousePosX == undefined) mousePosX = event.pageX;
		if(mousePosY == undefined) mousePosY = event.pageY;
		var movePosX = (mousePosX - event.pageX) / 15;
		var movePosY = (mousePosY - event.pageY) / 15;
		$("#rakett-gutt").css('transform', 'translate(' + movePosX + 'px, ' + movePosY + 'px) rotate(' + movePosX/8 + 'deg)');
		$("#rakett-gutt-small").css('transform', 'translate(' + movePosX/2+ 'px, ' + movePosY/2 + 'px) rotate(' + movePosX/8 + 'deg)');
		$("#rakett-gutt-smaller").css('transform', 'translate(' + movePosX/4 + 'px, ' + movePosY/4 + 'px) rotate(' + movePosX/8 + 'deg)');
	});
});