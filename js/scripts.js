// prevent background dragging on mobile
var fixed = document.body;
fixed.addEventListener('touchmove', function (e) {
  e.preventDefault();
}, false);

// set up mailing list button
function showMailingPopUp() {
  require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us14.list-manage.com","uuid":"9ced1de5481219e14964f2cdd","lid":"6cf0551d72"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};
document.getElementById("open-popup").onclick = function(e) {
  e.preventDefault();
  showMailingPopUp()
};

// enter/leave buttons
document.getElementById("enter-btn").onclick = function(e) {
  e.preventDefault();
  document.getElementsByClassName("over-21")[0].style.display = "none";
  document.getElementsByClassName("main-content")[0].style.display = "flex";
};
