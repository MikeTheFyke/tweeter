$(document).ready(function() {
  console.log("Mikey Fykey");
  $( ".textArea" ).keyup(function(e) {
    var tweetlength = e.target.value.length;
    console.log(tweetlength);
    $(".counter").text (140 - tweetlength);
    if (tweetlength > 140 ) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
    console.log(this);
  });
});
