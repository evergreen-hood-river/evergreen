var fixed = document.body;
fixed.addEventListener('touchmove', function (e) {
  e.preventDefault();
}, false);

function showMailingPopUp() {
  require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us10.list-manage.com","uuid":"d4ab9c169567794693d5a21ca","lid":"c9006bbf5c"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};
document.getElementById("open-popup").onclick = function(e) {
  e.preventDefault();
  showMailingPopUp()
};
