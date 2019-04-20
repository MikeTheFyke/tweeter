$(document).ready(function() {
  console.log('DOM Content Loaded');

    $("#composeTweet").click(function() {
    $(".new-tweet").slideToggle("slow")
    });

  function renderTweets(data) {
    data[0].tweets.forEach( (tweet) => {
      $('#tweets-container').prepend(createTweetElement(tweet));
    })
  }

  function createTweetElement(tweetData) {
    const tweet = tweetData.content.text;
    const name = tweetData.user.name;
    const avatarsImg = tweetData.user.avatars.small;
    const tweeHandle = tweetData.user.handle;

    const $createAvatar = $('<img>').addClass("avatar").attr("src",avatarsImg);
    const $createName = $('<div>').addClass("tweeterName").text(name);
    const $createTweet = $('<div>').addClass("tweeBody").text(tweet);
    const $createHandle = $('<p>').addClass("userTwee").text(tweeHandle);

    const $iconContainer = $("<div>").addClass("icons");
    const $flag = $("<i>").addClass("fas fa-flag");
    const $retweet = $("<i>").addClass("fas fa-retweet");
    const $heart = $("<i>").addClass("fas fa-heart");

    const $tweetData = $("<article>").addClass("tweet");
    const $header = $("<header>");
    const $footer = $("<footer>");
    const $content = $("<div>").addClass("content");

    $iconContainer.append($flag, $retweet, $heart);
    $header.append($createAvatar, $createName, $createHandle);
    $content.append($createTweet);
    $footer.append($iconContainer);
    $tweetData.append($header, $content, $footer);

    return $tweetData;
  }
  //renderTweets(data);

    $('#incomingTweet').submit( function () {
      var $button = $("#submitTweet");
      event.preventDefault();
      console.log("Button clicked");

      if(!$('textarea', this).val()){
       $(".error").slideDown("slow");
       $('#specific-message').text('Empty input');
      };

      if($('textarea', this).val().length > 140){
        $(".error").slideDown("slow");
      $('#specific-message').text('Too many characters')
      };

      if(($('textarea', this).val()) && ($('textarea', this).val().length < 140)){
      $(".error").slideUp("slow");
      let text =$(this).serialize();

          $.ajax({
          type: "POST",
          url: '/tweets',
          data: text,
          }).done(function(response){
          loadTweets();
          })

      }
    })
      function loadTweets () {
        $.ajax({
          type: 'GET',
          url: "/tweets",
          dataType: 'JSON'
        })
        .done( data => {
          console.log(data);
            renderTweets(data)
        })
      }
    loadTweets()
});
