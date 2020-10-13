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
		loop: true,
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
}