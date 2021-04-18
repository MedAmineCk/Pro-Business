$(".player-btn_container").on("click", function () {
  $(".video_container").removeClass("hidden");
  $(".videoWrapper").append(
    '<iframe width="560" height="349" src="https://www.youtube.com/embed/6Gu2QMTAkEU?autoplay=1&mute=1" frameborder="0"allowfullscreen></iframe>'
  );
});

function close_video() {
  $(".videoWrapper").html("");
  $(".video_container").addClass("hidden");
}
