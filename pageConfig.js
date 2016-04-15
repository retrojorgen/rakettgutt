    $(function () {

      $(window).on('scroll', function () {

      });
      $('figure').each(function () {
        if($(this).find('img').length) {
          $(this).css('width', $(this).find('img').width());
        }
      });

      $('.wp-caption').each(function () {
        if($(this).find('img').length) {
          $(this).css('width', $(this).find('img').width());
        }
      });

      if($("#article-identificator").length) {
        var articleIdentificator = $("#article-identificator");
        var ids = articleIdentificator.attr('attr-ids').split(",");
        console.log(ids);
        if(ids.indexOf("special") > -1) {
          $(".main-article").addClass("special");
          $("body").addClass("special-body");
          
        }

        if(ids.indexOf("special-color") > -1) {
          $("body").css("background-color", $("main").css("background-color"));
        }

        if(ids.indexOf("special-scroll") > -1) {
          $(".main-article").addClass("special-scroll");
          var layers = [];
          $(".layer").each(function () {
            layers.push({
              element: $(this),
              offset: $(this).offset().top,
              top: $(this).offset().top + $(this).outerHeight(true),
              visible: false
            });
          });



          $(window).on('scroll', function () {
            console.log('scroller', window.scrollY);
            layers.forEach(function (element, index) {
              
              if(window.scrollY >= element.offset && window.scrollY <= element.top && !element.visible) {
                element.element.find('.overlay').addClass('visible');
                element.visible = true;
              }
              if(window.scrollY < element.offset || window.scrollY > element.top && element.visible) {
                element.element.find('.overlay').removeClass('visible');
                element.visible = false;
              }
            });
          });

        }
      }


      // fix ratio youtube
      $('iframe').each(function () {
        if($(this).attr("src").indexOf("youtube") > -1) {
          var currentHeight = $(this).attr("height");
          var currentWidth = $(this).attr("width");
          var newWidth = $(".articles-wrapper").width();
          var newHeight = (currentHeight / currentWidth) * newWidth;

          $(this).attr("height", newHeight);
          $(this).attr("width", newWidth);
        }
      });
    });