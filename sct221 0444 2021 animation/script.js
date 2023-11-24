// Play sound and stop animation on click
document.getElementById("notification").addEventListener("click", function() {
  document.getElementById("alarm").play();
  document.querySelector(".notification img").style.animation = "none";
});
