$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    infinite: false,
    /// waitForAnimate:false,
    variableWidth: true,
  });
});
$(document).ready(function () {
  $(".slider_section_mobile").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,
    initialSlide: 2,
    /// waitForAnimate:false,
    variableWidth: false,

  });
});