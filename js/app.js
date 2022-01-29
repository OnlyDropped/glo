$('.reviews-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  //customPaging:'35px',
  variableWidth: true,
  centerMode: true,
  //centerPadding: '60px',
  //easing: 'easeInOutBack',
  arrows: true,
  //cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
  //cssEase: '4.9s cubic-bezier(.96,.04,.43,.2)'
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});