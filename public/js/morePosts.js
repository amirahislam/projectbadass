$(document).ready(function() {
  $("#loadMore").on("click", function() {
    // Get last displayed posts id
    var allPosts = $(".posts-wrap");
    var lastDisplayPost = allPosts[allPosts.length - 1];
    var lastDisplayPostId = $(lastDisplayPost).attr("post-id");

    // send request to get 6 more posts or less
    $.ajax("/api/posts/more/" + lastDisplayPostId, {
      type: "GET"
    }).then(function(data) {
      data = data.slice(data.indexOf("</title>") + 8);

      $(".posts-container").append(data);
      $(".posts-container").append($("#loadMore"));
      $("#loadMore").remove();
    });
  });
});
