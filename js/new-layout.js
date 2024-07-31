$(document).ready(function () {
  $(".txt-section").click(function () {
    $(".parax").toggle(500);
  });

  $("body").fadeIn(500, function () {
    $(".top-menu").fadeIn(500).css("display","flex");
    $(".main-menu").slideDown(2000).css("display","flex");
    $(".page1").slideDown(3000).css("display","flex");
  });

});
