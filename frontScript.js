$(function () {
	console.log('hello');
	var mousePosX = window.innerWidth / 2;
	var mousePosY = window.innerHeight / 2;
	

	var resetTimeout = function () {
		console.log("resetting");
		TweenMax.to("#rakett-gutt", 1, {x: "0px", y: "0px", rotation: "0deg", ease: Power4.easeOut});
		TweenMax.to("#rakett-gutt-small", 1, {x: "0px", y: "0px", rotation: "0deg", ease: Power4.easeOut});
		TweenMax.to("#rakett-gutt-smaller", 1, {x: "0px", y: "0px", rotation: "0deg", ease: Power4.easeOut});
	};

	var newTimeout = setTimeout(resetTimeout, 2000);
	$(document).on("mousemove", function (event) {
		clearTimeout(newTimeout);
		newTimeout = setTimeout(resetTimeout, 2000);
		if(mousePosX == undefined) mousePosX = event.pageX;
		if(mousePosY == undefined) mousePosY = event.pageY;
		var movePosX = (mousePosX - event.pageX) / 15;
		var movePosY = (mousePosY - event.pageY) / 15;
		$("#rakett-gutt").css('transform', 'translate(' + movePosX + 'px, ' + movePosY + 'px) rotate(' + movePosX/8 + 'deg)');
		$("#rakett-gutt-small").css('transform', 'translate(' + movePosX/2+ 'px, ' + movePosY/2 + 'px) rotate(' + movePosX/8 + 'deg)');
		$("#rakett-gutt-smaller").css('transform', 'translate(' + movePosX/4 + 'px, ' + movePosY/4 + 'px) rotate(' + movePosX/8 + 'deg)');
	});
});