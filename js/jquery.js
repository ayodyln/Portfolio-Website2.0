// Jquery
$(document).ready(function () {
    //   example of DRY coding in jquery
    $(".cardBtn").on("click", function () {
      var cardId = $(this).attr("data-panel");
      // $('.card').find('div').toggle()
  
      if ($(this).is(".special")) {
        console.log("yerrr skraaa");
      } else if ($(this).parent().is(".parent")) {
        console.log("skra yerrrp");
      }
      console.log(cardId);
    });
  
    $(".cards").slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 30000,
      cssEase: "ease",
      lazyLoad: "ondemand",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 559,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1027,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  