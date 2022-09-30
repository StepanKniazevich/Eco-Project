let swiper = new Swiper(".ecoCards", {
    slidesPerView: 2,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".ecoCards__next",
      prevEl: ".ecoCards__prev",
    },
    grabCursor: true,
    autoplay: {
        delay: 2000,
      }
  });