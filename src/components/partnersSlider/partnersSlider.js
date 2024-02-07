$(".partnersSlider__inner").slick({
  dots: false,
  infinite: true,
  arrows: true,
  draggable: true,

  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 2000,
  autoplay: false,
  prevArrow:
    '<button class="slider__btn slider__btnprev"><img src="./images/ico/arrow-right.svg" loading="lazy" alt="" /></button>',
  nextArrow:
    '<button class="slider__btn slider__btnnext"><img src="./images/ico/arrow-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1401,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 2,
      },
    },
  ],
});
