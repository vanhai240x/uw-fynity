$(".header .right .burger").click(() => {
  $(".header .menu-fixed").addClass("active");
});

$(".header .menu-fixed .close").click(() => {
  $(".header .menu-fixed").removeClass("active");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".header.header-white").addClass("active");
  } else {
    $(".header.header-white").removeClass("active");
  }
});
