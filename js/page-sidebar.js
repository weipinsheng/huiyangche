$(".icon-menu").click(function () {
    $(".page-detail").hide();
    $(".page-simple").show();
    $(".page-sidebar")[0].style.width = "3.5%";
    $(".main-container")[0].style.width = "96.5%";
});
$(".simple-menu").click(function () {
    $(".page-detail").show();
    $(".page-simple").hide();
    $(".page-sidebar").removeAttr('style');
    $(".main-container").removeAttr('style');
});