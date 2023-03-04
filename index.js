const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    spaceBetween: -60,
});

// const swiperBrand = new Swiper('.swiper-brand', {
//     pagination: {
//         el: '.swiper-pagination-brand',
//         clickable: true
//     },
//     spaceBetween: -60
// });

const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperWrapperBrand = document.querySelector('.main-repair__swiper-brand--overflow--hidden')
const button = document.querySelector('.main-repair__button');
const buttonText = document.querySelector('.main-repair__button-text')
const buttonBrand = document.querySelector('.button-brand');
const buttonBrandText = document.querySelector('.button-brand-text');

buttonBrand.addEventListener('click', function () {
    if (swiperWrapperBrand.classList.contains('main-repair__swiper-brand--overflow--hidden')) {
        swiperWrapperBrand.classList.remove('main-repair__swiper-brand--overflow--hidden')
        buttonBrandText.textContent = 'Скрыть'
    } else {
        swiperWrapperBrand.classList.add('main-repair__swiper-brand--overflow--hidden')
        buttonBrandText.textContent = 'Показать все'
    }
})

button.addEventListener('click', function () {
    if (swiperWrapper.classList.contains('main-repair__swiper--overflow--hidden')) {
        swiperWrapper.classList.remove('main-repair__swiper--overflow--hidden')
        buttonText.textContent = 'Скрыть'
    } else {
        swiperWrapper.classList.add('main-repair__swiper--overflow--hidden')
        buttonText.textContent = 'Показать все'
    }
})

if (this.window.innerWidth > 767) {
    swiper.destroy();
}
