const swiper = new Swiper('.swiper', {
  slidesPerView: 4.2,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

// ====================================================

let lastScrollTop = 0;
const headerTop = document.querySelector('.header__top');
const hideOffset = 100; // Порог для скрытия шапки
const showOffset = 130; // Порог для показа шапки

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > hideOffset) {
    // Скроллим вниз и прошли 100px - скрываем шапку
    headerTop.classList.add('header__top--hidden');
  } else if (scrollTop < lastScrollTop && scrollTop > showOffset) {
    // Скроллим вверх и прошли 200px - показываем шапку
    headerTop.classList.remove('header__top--hidden');
  }

  lastScrollTop = scrollTop; // Обновляем последнее значение скролла
});
