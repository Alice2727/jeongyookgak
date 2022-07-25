window.onload = function () {
  new Swiper('.sw-event', {
    navigation: {
      prevEl: '.sw-event-prev',
      nextEl: '.sw-event-next'
    },
  
    pagination: {
      el: '.sw-event-pg',
      type: 'fraction'
    }
  });
}

