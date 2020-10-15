import { Loading } from './libraries/Loading';
import { getSVGs } from './utilities/util';

document.addEventListener('DOMContentLoaded', () => {
	getSVGs();
	Loading().then();
	swiperSlider();
});

//swiper
function swiperSlider(){
	let aboutTeam = new Swiper('.ab-2 .swiper-container', {
		autoplay: {
			delay: 4500,
		},
		spaceBetween: 20,
		speed: 500,
		// loop: true,
		navigation: {
			nextEl: '.ab-2 .swiper-next',
			prevEl: '.ab-2 .swiper-prev',
		},
		pagination: {
			el: '.ab-2 .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1025: {
				slidesPerView: 4,
			},
		}
	});
	let imgGallery = new Swiper('.slide-image .swiper-container', {
		autoplay: {
			delay: 4500,
		},
		spaceBetween: 20,
		speed: 500,
		// loop: true,
		navigation: {
			nextEl: '.slide-image .swiper-next',
			prevEl: '.slide-image .swiper-prev',
		},
		pagination: {
			el: '.slide-image .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1025: {
				slidesPerView: 4,
			},
		}
	});
	let raiting = new Swiper('.slide-raiting .swiper-container', {
		autoplay: {
			delay: 4500,
		},
		spaceBetween: 20,
		speed: 500,
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: '.slide-raiting .swiper-next',
			prevEl: '.slide-raiting .swiper-prev',
		},
		pagination: {
			el: '.slide-raiting .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
		}
	});
	//about-slide-year
	let galleryThumbs = new Swiper('.slide-year .gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 9,
		// loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	  let galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		thumbs: {
		  swiper: galleryThumbs,
		},
	  });
}
