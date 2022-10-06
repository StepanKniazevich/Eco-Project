//-----------------ecoSlider-----------------------------
let createSwiper = (slidesPerViewCount,spaceBetweenCout,slidesPerGroupCout) => {
  let swiper = new Swiper(".ecoCards", {
    slidesPerView: slidesPerViewCount,
    spaceBetween: spaceBetweenCout,
    slidesPerGroup: slidesPerGroupCout,
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
}


if ( document.documentElement.clientWidth <= 900) { 
  createSwiper(1,2,1);
 }
else {
  createSwiper(2,50,1);
}

//--------------hambMenu--------------------------

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector(".menu__list").cloneNode(1);

const hambHandler = (e) => {
  e.preventDefault();
  popup.classList.toggle("open");
  renderPopup();
}

const renderPopup = () => {
  popup.appendChild(menu);
  console.log(popup);

}
hamb.addEventListener("click", hambHandler );


