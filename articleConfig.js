
    $(function () {

      $('img').on('load',function(){
        console.log($(this).width(), ' bredde');

      });

      $('#container').imagesLoaded( function() {
        $('img').each(function () {
          if($(this).width() > 0) {
            $(this).parent().css('width', $(this).width());
          }
        });
      });

      var mainArticleContainer = $(".main");
      if(!window['jsSpecialConfig']) {
        if(!mainArticleContainer.hasClass("special")) {

          var possibleFirstImage = mainArticleContainer.children().first();
          if(possibleFirstImage.is("img") || possibleFirstImage.is("figure")) {
            $(".article-header").append(possibleFirstImage);
          }
        }
      }
      else {
        $(".main-article").addClass("special");
        $(".main").addClass("special");
        $(".articles-wrapper").addClass("special-wrapper");
        if(jsSpecialConfig["h1-style"]) $(".article-header h1").css(jsSpecialConfig["h1-style"]);
        if(jsSpecialConfig["h2-style"]) $(".article-header h2").css(jsSpecialConfig["h2-style"]);
        if(jsSpecialConfig["title-style"]) $(".article-header .title").css(jsSpecialConfig["title-style"]);
        if(jsSpecialConfig["byline-style"]) $(".article-header .published-byline").css(jsSpecialConfig["byline-style"]);
        if(jsSpecialConfig["paragraph-style"]) $(".main p").css(jsSpecialConfig["paragraph-style"]);
        if(jsSpecialConfig["blockquote-style"]) $(".article-header blockquote").css(jsSpecialConfig["blockquote-style"]);
        if(jsSpecialConfig["main-background"]) $(".main").css('background', jsSpecialConfig["main-background"]);
        if(jsSpecialConfig["h3-style"]) $(".main h3").css(jsSpecialConfig["h3-style"]);
        if(jsSpecialConfig["figcaption-style"]) $(".main figcaption").css(jsSpecialConfig["figcaption-style"]);


        if(jsSpecialConfig["video-cover"]) {
          var videoCoverContainer = $("<div>").addClass('video-cover');

          var videoCoverVideo = $('<video />', {
            id: 'video',
            src: jsSpecialConfig["video-cover"],
            type: 'video/mp4',
            controls: false,
            loop: true,
            autoplay: true,
            muted: true
          });

          videoCoverVideo.on('loadedmetadata', function () {
            console.log(videoCoverVideo, videoCoverVideo[0].videoHeight);

            var currentHeight = videoCoverVideo[0].videoHeight;
            var currentWidth = videoCoverVideo[0].videoWidth;
            var newWidth = window.innerWidth;
            var newHeight = (currentHeight / currentWidth) * newWidth;
            videoCoverVideo.css({
              width: newWidth,
              height: newHeight
            });
          });

          videoCoverContainer.append(videoCoverVideo);

          if(jsSpecialConfig["video-backdrop-color"]) {
            var videoCoverBackdrop = $("<div>").addClass("backdrop-cover").css("background", jsSpecialConfig["video-backdrop-color"]);
            videoCoverContainer.append(videoCoverBackdrop);
          };

          if(jsSpecialConfig["video-cover-fallback"]) {
            videoCoverContainer.css("background", jsSpecialConfig["video-cover-fallback"]);
          };

          $(".article-header").prepend(videoCoverContainer);

        }
      }
    });