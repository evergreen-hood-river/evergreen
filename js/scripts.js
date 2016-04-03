$(function() {
    $(".logo").click(function() {
        $(".logo").toggle();
    });
    $("body").click(function() {
        $("body").toggleClass("old-back");
    });
});
