document.addEventListener('DOMContentLoaded',function(){
    try{

        new Swiper(".mySwiper", {
            spaceBetween: 30,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            hashNavigation: {
              watchState: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    } catch{

    }
    
})