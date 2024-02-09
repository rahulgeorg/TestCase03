$('.fm-banner__posters').slick({
    prevArrow: $('.fm-banner__left-arw'),
    nextArrow:$('.fm-banner__right-arw'),
    dots: true,
});
$('.fm-testimonials__outer').slick({
    prevArrow: $('.fm-testimonials__ltarw'),
    nextArrow:$('.fm-testimonials__rtarw'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });