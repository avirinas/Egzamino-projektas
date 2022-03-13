
var swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
//   autoplay: {
//       delay: 2000,
//   },
//   speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

swiper1.on('slideChange', function () {
  var activeButton = buttons[swiper1.activeIndex];
  for(var x of buttons){
    x.classList.remove("active");
  }
  activeButton.classList.add("active");
})



var swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      0:{
        slidesPerView:1
      },
    650:{
      slidesPerView:2,
    },
    1060: {
      slidesPerView: 3,
    },
  }
});
 
