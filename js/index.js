let tap = document.getElementById("tap");

window.addEventListener("touchstart", function (e) {
  tap.style.background = "#333";
});

window.addEventListener("touchmove", function (e) {
  tap.style.left = e.targetTouches[0].pageX + "px";
  tap.style.top = e.targetTouches[0].pageY + "px";
});

window.addEventListener("touchend", function (e) {
  tap.style.background = "#eee";
});
