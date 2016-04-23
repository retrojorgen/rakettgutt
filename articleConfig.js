
    $(function () {
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
        $(".articles-wrapper").addClass("special-wrapper");
        if(jsSpecialConfig["h1-style"]) $(".article-header h1").css(jsSpecialConfig["h1-style"]);
        if(jsSpecialConfig["h2-style"]) $(".article-header h2").css(jsSpecialConfig["h2-style"]);
        if(jsSpecialConfig["byline-style"]) $(".article-header .byline").css(jsSpecialConfig["byline-style"]);
        if(jsSpecialConfig["paragraph-style"]) $(".article-header p").css(jsSpecialConfig["paragraph-style"]);
        if(jsSpecialConfig["blockquote-style"]) $(".article-header blockquote").css(jsSpecialConfig["blockquote-style"]);
        if(jsSpecialConfig["main-background"]) $(".main").css('background', jsSpecialConfig["main-background"]);
        if(jsSpecialConfig["h3-style"]) $(".main h3").css(jsSpecialConfig["h3-style"]);
        if(jsSpecialConfig["figcaption-style"]) $(".main figcaption").css(jsSpecialConfig["figcaption-style"]);

        if(jsSpecialConfig["video-cover"]) {
          if(jsSpecialConfig["video-cover-fallback"]) {
            $(".article-header").prepend($("<div>").addClass("backdrop-cover").css("background", jsSpecialConfig["video-backdrop-color"]))
          } $(".main").css('background', jsSpecialConfig["main-background"]);
          $(".article-header").prepend($("<div>").addClass('video-cover').append($('<video />', {
            id: 'video',
            src: jsSpecialConfig["video-cover"],
            type: 'video/mp4',
            controls: false,
            loop: true,
            autoplay: true,
            muted: true
          })));
        }
        $(".main").addClass("special");

      }
    });