$(function () {
	console.log('hello');
	var mousePosX = window.innerWidth / 2;
	var mousePosY = window.innerHeight / 2;
	$(document).on("mousemove", function (event) {
		
		if(mousePosX == undefined) mousePosX = event.pageX;
		if(mousePosY == undefined) mousePosY = event.pageY;
		console.log(event.pageX, event.pageY, mousePosX, mousePosY);
		var movePosX = (mousePosX - event.pageX) / 15;
		var movePosY = (mousePosY - event.pageY) / 15;
		$("#rakett-gutt").css('transform', 'translate(' + movePosX + 'px, ' + movePosY + 'px) rotate(' + movePosX/8 + 'deg)');
		$("#rakett-gutt-small").css('transform', 'translate(' + movePosX/2+ 'px, ' + movePosY/2 + 'px) rotate(' + movePosX/8 + 'deg)');
		$("#rakett-gutt-smaller").css('transform', 'translate(' + movePosX/4 + 'px, ' + movePosY/4 + 'px) rotate(' + movePosX/8 + 'deg)');
	});
});