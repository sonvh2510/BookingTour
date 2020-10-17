import { Loading } from './libraries/Loading';
import { getSVGs } from './utilities/util';
import { MoveElement } from './libraries/MoveElement';

const backdrop = document.querySelector('.backdrop');
const headerMobile = document.querySelector('.header__mobile');
const headerToggleMobile = document.querySelector('.header__toggleMobile');
const menuWrapper = document.querySelector('.header__mobile');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const body = document.body;
// window.disableLitepickerStyles = true;

document.addEventListener('DOMContentLoaded', () => {
	getSVGs('.svg');
	Loading().then();
	HeaderResponse();
	HeaderToggle();
	tourSearch();
	openFormSearch();
	backdropClickHandler();
	swiperSlider();
});

//swiper
function swiperSlider() {
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
			1025: {
				slidesPerView: 4,
			},
		},
	});
}

const HeaderResponse = () => {
	const moveMakeMyTrip = new MoveElement('.header__makeMyTrip', {
		desktopNode: '.header__search',
		desktopMethod: 'insertAfter',
		mobileNode: '.header__mobileWrapper',
		mobileMethod: 'appendTo',
	});
	const moveCurrency = new MoveElement('.header__currency', {
		desktopNode: '.header__language',
		desktopMethod: 'insertAfter',
		mobileNode: '.header__mobileWrapper',
		mobileMethod: 'appendTo',
	});
	const moveNav = new MoveElement('.header__nav', {
		desktopNode: '.header__bottom',
		desktopMethod: 'prependTo',
		mobileNode: '.header__mobileWrapper',
		mobileMethod: 'appendTo',
	});
	const moveButtons = new MoveElement('.header__buttons', {
		desktopNode: '.header__bottom',
		desktopMethod: 'appendTo',
		mobileNode: '.header__mobileWrapper',
		mobileMethod: 'appendTo',
	});
};

const HeaderToggle = () => {
	headerToggleMobile.addEventListener('click', () => {
		menuWrapper.classList.add('active');
		backdrop.classList.add('show');
		main.classList.add('pushedRight');
		footer.classList.add('pushedRight');
		body.classList.add('overflow-hidden');
	});
	Array.from(document.querySelectorAll('.header__navItem--hasSub')).forEach(
		(item) => {
			const btnOpen = item.querySelector('.js__toggleNavSub');
			const btnClose = item.querySelector('.js__closeNavSub');
			const navSub = item.querySelector('.header__navSub');
			if (btnOpen) {
				btnOpen.addEventListener('click', (e) => {
					e.preventDefault();
					navSub.classList.add('active');
				});
			}
			if (btnClose) {
				btnClose.addEventListener('click', (e) => {
					e.preventDefault();
					navSub.classList.remove('active');
				});
			}
		},
	);
};

const backdropClickHandler = () => {
	backdrop.addEventListener('click', () => {
		Array.from(document.querySelectorAll('.header__navSub')).forEach(
			(item) => {
				item.classList.remove('active');
			},
		);
		headerMobile.classList.remove('active');
		backdrop.classList.remove('show');
		main.classList.remove('pushedRight');
		footer.classList.remove('pushedRight');
		body.classList.remove('overflow-hidden');
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
		},
	});
	let raiting = new Swiper('.slide-raiting .swiper-container', {
		autoplay: {
			delay: 4500,
		},
		spaceBetween: 20,
		speed: 500,
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
			1024: {
				slidesPerView: 2,
			},
			1500: {
				slidesPerView: 3,
				centeredSlides: true,
				loop: true,
			},
		},
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
};

const tourSearch = () => {
	let searchTourDate = new Litepicker({
		element: document.getElementById('tourSearch__date'),
		format: 'DD/MM/YYYY',
		mobileFriendly: true,
		autoApply: true,
		showTooltip: true,
		allowRepick: true,
		singleMode: false,
		inlineMode: false,
	});
	window.addEventListener('resize', () => {
		searchTourDate.hide();
	});
};

const openFormSearch = () => {
	const btn = document.querySelector('.tourSearch__iconToggle');
	const btnHandler = () => {
		$.fancybox.open({
			src: '#tourSearch__form',
			type: 'inline',
			opts: {
				hash: false,
				closeExisting: true,
			},
		});
	};
	if (btn) {
		btn.addEventListener('click', btnHandler);
	}
};
