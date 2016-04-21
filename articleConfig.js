
    $(function () {
      console.log(window.jsSpecialConfig);
      var mainArticleContainer = $(".main");
      if(!jsSpecialConfig) {
        if(!mainArticleContainer.hasClass("special")) {

          var possibleFirstImage = mainArticleContainer.children().first();
          if(possibleFirstImage.is("img") || possibleFirstImage.is("figure")) {
            $(".article-header").append(possibleFirstImage);
          }
        }
      }
      else {
        $(".articles-wrapper").addClass("special-wrapper");
        if(jsSpecialConfig["h1-style"]) $(".article-header h1").css(jsSpecialConfig["h1-style"]);
        if(jsSpecialConfig["h2-style"]) $(".article-header h2").css(jsSpecialConfig["h2-style"]);
        if(jsSpecialConfig["main-background"]) $(".main").css('background', jsSpecialConfig["main-background"]);
        if(jsSpecialConfig["video-cover"]) {
          $(".article-header").prepend($("<div>").addClass('video-cover').append($('<video />', {
            id: 'video',
            src: jsSpecialConfig["video-cover"],
            type: 'video/mp4',
            controls: false,
            loop: true,
            autoplay: true,
            mute: true
          })));
        }
        $(".main").addClass("special");

      }
    });