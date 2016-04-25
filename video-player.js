        
      // 2. This code loads the IFrame Player API code asynchronously.
      var elementsInMenu = {};

      var items = [];
      var activeSliderElement = {};

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      



          var getVideos = function (playId, nextVideos) {
            var pageString = "";
            var containerWidth = window.innerWidth/2;
            if(!nextVideos) {
              pageString = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playId + "&key=AIzaSyDDX3NC6SvwTbC__R8S1WHvi7wQLy7Q188&maxResults=10"; 
            } else {
              pageString = "https://www.googleapis.com/youtube/v3/playlistItems?pageToken=" + nextVideos + "&part=snippet&playlistId=" + playId + "&key=AIzaSyDDX3NC6SvwTbC__R8S1WHvi7wQLy7Q188"; 
            }
            $.get(pageString, function (data) {
              var videoPlaylist = $("#video-playlist .video-playlist-inner");
              if(!data.nextPageToken) {
                $("#show-more-videos").hide();                
              } else {
                nextVideos = data.nextPageToken;  
              }

              $(".player-wrapper .cover").css('background-image', 'url(' + data.items[0].snippet.thumbnails.maxres.url + ')');
              $(".player-wrapper .headline .kicker span").text(data.items[0].snippet.channelTitle);
              $(".player-wrapper .headline h2").text(data.items[0].snippet.title);
            
              data.items.forEach(function(element) {
                var container = $("<li>").attr("data-video-index", element.snippet.position).addClass("data-video").css('width', containerWidth);
                var image = $("<div>").addClass("image-container").append($("<img>").attr("src", element.snippet.thumbnails.maxres.url).attr("data-video-index", element.snippet.position));
                var playIcon = $("<div>").addClass("play-button-container").append($("<div>").addClass("play-button")).on('click', togglePlayer);
                var newContainerHeight = Math.round((375/668)*(containerWidth));
                var newElement = container.append(image,playIcon);

                videoPlaylist.append(newElement);
                items.push(newElement);
                $(".video-playlist-inner").css('height', newContainerHeight+20);
                elementsInMenu[element.snippet.position] = newElement;
              });
              items.forEach(function (item) {
                TweenMax.to(item, 0, {x: -containerWidth, ease: Linear.easeNone});
              });
              items[0].addClass('active');
              TweenMax.to(items[0], 0, {x: containerWidth-(containerWidth/2)});
              TweenMax.to(items[items.length-1], 0, {x: -containerWidth/2});
              TweenMax.to(items[1], 0, {x: containerWidth+(containerWidth/2)});
              activeSliderElement = items[0];

            });
          };

          //getVideos();

      var togglePlayer = function () {
          if($(this).hasClass('main')) {
            player.playVideoAt(0);

          } else {
            var playIndex = $(this).parent().parent().attr('data-video');
            player.playVideoAt(playIndex);
          }

          $('html, body').animate({
              scrollTop: $("#player").offset().top
          }, 250);

          $(".player-wrapper .cover").hide();
          $(".player-wrapper .headline").hide();
          $(".player-wrapper .play-button-container").hide();
      };   

      $(".play-button-container").on('click', togglePlayer);    

      $(".swiper-arrow-left").on('click', function () {
        var containerWidth = window.innerWidth/2;
        var moveToRightElement = activeSliderElement;
        if(moveToRightElement.next().length) {
          var moveOutElement = moveToRightElement.next();
        } else {
          var moveOutElement = items[0];
        }

        if(moveToRightElement.prev().length) {
          var moveToActiveElement = moveToRightElement.prev();
        } else {
          var moveToActiveElement = items[items.length-1];
        }

        if(moveToActiveElement.prev().length) {
          var moveToLeftElement = moveToActiveElement.prev();
        } else {
          var moveToLeftElement = items[items.length-1];
        }

        moveToRightElement.removeClass('active');
        moveToActiveElement.addClass('active');
        TweenMax.to(moveToRightElement, 0.5, {x: containerWidth+(containerWidth/2), ease: Power4.easeOut});
        TweenMax.to(moveToActiveElement, 0.5, {x: containerWidth-(containerWidth/2), ease: Power4.easeOut});
        TweenMax.to(moveToLeftElement, 0, {x: -containerWidth, ease: Power4.easeOut});
        TweenMax.to(moveToLeftElement, 0.5, {x: -containerWidth/2, ease: Power4.easeOut});
        TweenMax.to(moveOutElement, 0.5, {x: window.innerWidth, ease: Power4.easeOut});

        activeSliderElement = moveToActiveElement;
      });

      $(".swiper-arrow-right").on('click', function () {
        var containerWidth = window.innerWidth/2;
        var moveToLeftElement = activeSliderElement;

        if(moveToLeftElement.next().length) {
          moveToActiveElement = moveToLeftElement.next();
        } else {
          moveToActiveElement = items[0];
        }

        if(moveToActiveElement.next().length) {
          moveInRightElement = moveToActiveElement.next();
        } else {
          moveInRightElement = items[0];
        }

        if(moveToLeftElement.prev().length) {
          moveOutLeftElement = moveToLeftElement.prev();
        } else {
          moveOutLeftElement = items[items.length-1];
        }

        moveToLeftElement.removeClass('active');
        moveToActiveElement.addClass('active');

        TweenMax.to(moveOutLeftElement, 0.5, {x: -containerWidth, ease: Power4.easeOut});
        TweenMax.to(moveInRightElement, 0, {x: window.innerWidth});
        TweenMax.to(moveInRightElement, 0.5, {x: containerWidth+(containerWidth/2), ease: Power4.easeOut});
        TweenMax.to(moveToActiveElement, 0.5, {x: containerWidth-(containerWidth/2), ease: Power4.easeOut});
        TweenMax.to(moveToLeftElement, 0.5, {x: -containerWidth/2, ease: Power4.easeOut});

        activeSliderElement = moveToActiveElement;
      });

      function onYouTubeIframeAPIReady() {

        var nextVideos = undefined;

        var playId = "PLRzWv0E9-drGYd53tPD6OltQH6FZ9L3F5";
        getVideos(playId, nextVideos);

         player = new YT.Player('player', {
          height: '390',
          width: '640',
          playerVars: 
          {
            listType:'playlist',
            list: playId
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

        // calculate new video size

        var videoPlayer = $("#player");
        var currentWidth = window.innerWidth;
        var newHeight = Math.round((390/640)*currentWidth);
        if(newHeight > window.innerHeight) newHeight = window.innerHeight;


        videoPlayer.css({
          'width': currentWidth,
          'height': newHeight
        });

      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
      
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
      }
      function stopVideo() {
        player.stopVideo();
      }




      //AIzaSyDDX3NC6SvwTbC__R8S1WHvi7wQLy7Q188
      //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLSz9QrAyE8NlguDvK1Nvn0RtzfXOVwtEm&key=AIzaSyDDX3NC6SvwTbC__R8S1WHvi7wQLy7Q188