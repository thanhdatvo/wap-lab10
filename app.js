var radius = 50;
var growRate = 1000;
var growAmount = 10;
var numberCircles = 1;
var interval;

function stop() {
  clearInterval(interval);
  $("#circle_wrapper").empty();
}
function start() {
  $("#circle_wrapper").empty();
  $(".circle").css({ visibility: "visible" });
  radius = $("input[name=width]").val();
  if (!radius) radius = 50;
  growAmount = $("input[name=grow_amount]").val();
  if (!growAmount) growAmount = 10;
  growRate = $("input[name=grow_rate]").val();
  if (!growRate) growRate = 1000;
  numberCircles = $("input[name=number_circles]").val();
  if (!numberCircles) numberCircles = 1;
  interval = setInterval(function () {
    try {
      $(".circle").css({
        width: radius + "px",
        height: radius + "px",
      });

      radius = parseInt(radius) + parseInt(growAmount);
    } catch (e) {
      console.error(e);
    }
  }, growRate);
  for (let i = 0; i < numberCircles; i++) {
    $("#circle_wrapper").append("<div class='circle'></div>");
  }
  $("#circle_wrapper")
    .children("div")
    .each(function () {
      var left = Math.random() * 100;
      var top = Math.random() * 100;
      $(this).css({
        top: `${top}%`,
        left: `${left}%`
      });
      $(this).click(stop);
    });
}

$(document).ready(function () {
  $("#start_btn").click(start);
});
