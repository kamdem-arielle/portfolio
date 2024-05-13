import Swiper from 'swiper';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    speed: 800,

    // Optional parameters
    direction: 'horizontal',

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      horizontalClass :"horizontalClass"
    },
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:true,

  
    modules: [Navigation, Pagination,Autoplay],
  });