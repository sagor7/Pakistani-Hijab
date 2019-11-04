//search button
$(document).ready(function(){
  $('.search-open').click(function(){
      $('.search-toggle').toggle();
      
  });
});

// sleder
$('.slide').slick({
  dots: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
  ]
});

