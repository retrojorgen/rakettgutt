
	var testVariabel = "";
	$(function () {

		$(window).on("scroll", function () {
			if(window.scrollY > 0) {
				$(".header").addClass("small");
			} else {
				$(".header").removeClass("small");
			}
			
		});
		var alignRow = function (selector) {
			var topHeight = 0;
			var otherItems = [];
			
			for(x=0; x <= $(selector).length; x++) {

				var outerHeight = $($(selector)[x]).outerHeight(true);
				if(outerHeight > topHeight) topHeight = outerHeight;
				console.log(outerHeight);
			}

			$(selector).each(function () {
				if($(this).outerHeight(true) > topHeight) {
					topHeight = $(this).outerHeight(true);
				}
			});

			$(selector).each(function () {
				console.log($(this).outerHeight(true));
				if($(this).outerHeight(true) < topHeight) {
					otherItems.push($(this));
				}
			});

			$(selector).each(function () {
				if($(this).outerHeight(true) < topHeight) {
					var difference = topHeight - $(this).outerHeight(true);
					if($(this).hasClass('absolute')) {
						difference -= 20;
					}
					var cover = $(this).find('.cover');
					var currentHeight = cover.outerHeight(true);
					console.log($(this), $(this).outerHeight(true), difference, cover, currentHeight, topHeight);
					cover.css('height', currentHeight + difference);
				}
		
			});
		};
		setTimeout(function () {
			console.log('.row-1');
			alignRow(".row-1 .article");
			console.log('.row-2');
			alignRow(".row-2 .article");
			console.log('.row-3');
			alignRow(".row-3 .article");
		}, 500);
		
	});
