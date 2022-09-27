$(document).ready(function () {
  $(".catalogueItems").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    rows: 2,
    easing: "ease",
    sliderPerRow: 3,
    draggable: false,
    swipe: false,
    speed: 700,
  });
  $(".reviewsTemplate").slick({
    arrows: true,
    dots: true,
    draggable: false,
    swipe: false,
    rows: 2,
    sliderPerRow: 1,
    infinite: false,
    speed: 700,
  });
});
