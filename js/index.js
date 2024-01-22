$(document).ready(() => {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  scroolDown();
});

function scroolDown() {
  $(window).scroll(function () {
    $(".visible-bottom-to-top").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-bottom-to-top");
      }
    });
    $(".visible-top-to-bottom").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-top-to-bottom");
      }
    });
    $(".visible-left-to-right").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-left-to-right");
      }
    });
    $(".visible-right-to-left").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-right-to-left");
      }
    });
  });
}

// Collapse
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Homepage
$('#homepage .our-specialist .container .left .items .item').hover(function(e) {
  $('#homepage .our-specialist .container .left .items .item').removeClass('active');
  $(this).addClass('active');
  let img = $(this).attr('attr-img');
  let title = $(this).attr('attr-title');
  let content = $(this).attr('attr-content');
  $('#homepage .our-specialist .container .right').css('background-image', `url('${img}')`);
  $('#homepage .our-specialist .container .right .title').text(title);
  $('#homepage .our-specialist .container .right .content').text(content);
});