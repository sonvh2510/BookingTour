import { Loading } from './libraries/Loading';
import { getSVGs } from './utilities/util';
import { MoveElement } from './libraries/MoveElement';
import { Subject } from 'rxjs';
// import Swiper from 'swiper';

const headerMobile = document.querySelector('.header__mobile');
const headerToggleMobile = document.querySelector('.header__toggleMobile');
const menuWrapper = document.querySelector('.header__mobile');
const backdrop = document.querySelector('.backdrop');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');
const body = document.body;

const backdropObserver = new Subject();
backdropObserver.subscribe((isActive) => {
	if (isActive) {
		backdrop.classList.add('show');
		body.classList.add('overflow-hidden');
	} else {
		backdrop.classList.remove('show');
		body.classList.remove('overflow-hidden');
	}
});

// window.disableLitepickerStyles = true;
document.addEventListener('DOMContentLoaded', () => {
	getSVGs('.svg');
	Loading().then();
	// Quantity add remove
	quantityGroup();
	// init calendar
	initCalendar();
	formTourDateChoose();
	// Raing
	rating();
	// Header
	HeaderResponse();
	HeaderToggle();
	backdropHandler();
	// Form search at head of page
	// tourSearch();
	openFormSearch();
	// Index
	homeSliders();
	// Make my trip
	makeMyTripSlider();
	formTourItemToggle();
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
}

const initCalendar = () => {
	Array.from(document.querySelectorAll('[data-date]')).forEach((input) => {
		return new Litepicker({
			element: input,
			format: 'DD/MM/YYYY',
			mobileFriendly: true,
			autoApply: true,
			showTooltip: true,
			allowRepick: true,
			singleMode: true,
			inlineMode: false,
		});
	});

	Array.from(document.querySelectorAll('[date-picker]')).forEach((picker) => {
		const input = picker.querySelector('.datePicker__input');
		const label = picker.querySelector('.datePicker__label');
		const pickerObject = new Litepicker({
			element: input,
			format: 'DD/MM/YYYY',
			mobileFriendly: true,
			autoApply: true,
			showTooltip: true,
			allowRepick: true,
			singleMode: false,
			inlineMode: false,
			onSelect: function (date1, date2) {
				const value = input.value;
				if (value) {
					picker.classList.add('dirtied');
				} else {
					picker.classList.remove('dirtied');
					pickerObject.clearSelection();
				}
			},
		});
		input.addEventListener('change', () => {
			const value = input.value;
			if (value) {
				picker.classList.add('dirtied');
			} else {
				pickerObject.clearSelection();
				picker.classList.remove('dirtied');
			}
		});
	});
};

const rating = () => {
	Array.from(document.querySelectorAll('[data-rating]')).forEach((item) => {
		const percent = Number(item.getAttribute('data-rating'));
		item.setAttribute('style', `width:${percent * 100}%`);
	});
};

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
		main.classList.add('pushedRight');
		footer.classList.add('pushedRight');
		backdropObserver.next(true);
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

const backdropHandler = () => {
	backdrop.addEventListener('click', () => {
		Array.from(document.querySelectorAll('.header__navSub')).forEach(
			(item) => {
				item.classList.remove('active');
			},
		);
		backdropObserver.next(false);
		headerMobile.classList.remove('active');
		main.classList.remove('pushedRight');
		footer.classList.remove('pushedRight');
	});
};

const openFormSearch = () => {
	const clickHandler = () => {
		$.fancybox.open({
			src: '#tourSearch__form',
			type: 'inline',
			opts: {
				hash: false,
				closeExisting: true,
				touch: false,
			},
		});
	};
	const openSearchTourFormOnClick = (e) => {
		if (btn) {
			if (e.matches) {
				btn.addEventListener('click', clickHandler);
			} else {
				btn.removeEventListener('click', clickHandler);
				document
					.querySelector('#tourSearch__form')
					.removeAttribute('style');
			}
		}
	};
	const btn = document.querySelector('.tourSearch__iconToggle');
	const matchMedia = window.matchMedia('(max-width: 1024.98px)');
	openSearchTourFormOnClick(matchMedia);
	matchMedia.addEventListener('change', openSearchTourFormOnClick);
};

const homeSliders = () => {
	let homeBanner = new Swiper('.homeBanner__slider .swiper-container', {
		slidesPerView: 1,
		loop: true,
		speed: 1200,
		effect: 'fade',
		simulateTouch: false,
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.homeBanner__slider .swiper__pagination--banner',
			type: 'bullets',
			clickable: true,
		},
		// on: {
		// 	init: function (e) {
		// 		e.$el[0].setAttribute(
		// 			'style',
		// 			`height: ${window.innerHeight - header.clientHeight}px`,
		// 		);
		// 	},
		// },
	});

	let homePopularDestination = new Swiper(
		'.homePopularDestination__slideWrapper .swiper-container',
		{
			slidesPerView: 2,
			spaceBetween: 10,
			loop: true,
			pagination: {
				el: '.homePopularDestination__slideWrapper .swiper__pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				prevEl: '.homePopularDestination .swiper__btn--prev',
				nextEl: '.homePopularDestination .swiper__btn--next',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3.5,
				},
				1360: {
					spaceBetween: 40,
					slidesPerView: 3.7,
				},
			},
		},
	);

	let charmingSlider = new Swiper(
		'.charmingDestination__slideWrapper .swiper-container',
		{
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			simulateTouch: false,
			navigation: {
				prevEl: '.charmingDestination__slideWrapper .swiper__btn--prev',
				nextEl: '.charmingDestination__slideWrapper .swiper__btn--next',
			},
			pagination: {
				el: '.charmingDestination__slideWrapper .swiper__pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		},
	);
	let testimonialsSlider = new Swiper(
		'.testimonials__slideWrapper .swiper-container',
		{
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			simulateTouch: false,
			navigation: {
				prevEl: '.testimonials__slideWrapper .swiper__btn--prev',
				nextEl: '.testimonials__slideWrapper .swiper__btn--next',
			},
			pagination: {
				el: '.testimonials__slideWrapper .swiper__pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		},
	);
	let indexNewsSlider = new Swiper(
		'.indexNews__slideWrapper .swiper-container',
		{
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			simulateTouch: false,
			navigation: {
				prevEl: '.indexNews__slideWrapper .swiper__btn--prev',
				nextEl: '.indexNews__slideWrapper .swiper__btn--next',
			},
			pagination: {
				el: '.indexNews__slideWrapper .swiper__pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		},
	);
};

const makeMyTripSlider = () => {
	let makeMyTripSlider = new Swiper('.destinationSelect .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 10,
		loop: false,
		navigation: {
			prevEl: '.destinationSelect__slideWrapper .swiper__btn--prev',
			nextEl: '.destinationSelect__slideWrapper .swiper__btn--next',
		},
		pagination: {
			el: '.destinationSelect__slideWrapper .swiper__pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
		},
	});
};

const quantityGroup = () => {
	Array.from(document.querySelectorAll('.quantityGroup')).forEach((item) => {
		const btnMinus = item.querySelector('.quantity__minus');
		const btnPlus = item.querySelector('.quantity__plus');
		const input = item.querySelector('.quantity__number');
		let inputValue = 0;
		const inputSubject = new Subject();
		inputSubject.subscribe({
			next: function (e) {
				input.value = e;
			},
		});
		inputSubject.next(inputValue);
		btnPlus.addEventListener('click', () => {
			inputValue += 1;
			inputSubject.next(inputValue);
		});
		btnMinus.addEventListener('click', () => {
			inputValue -= 1;
			if (inputValue < 0) {
				inputValue = 0;
			}
			inputSubject.next(inputValue);
		});
	});
};

const formTourDateChoose = () => {
	Array.from(document.querySelectorAll('.checkInOut')).forEach((item) => {
		const input = item.querySelector('.dateChoose__input');
		const dateDisplay = item.querySelector('.dateChoose__display');
		let cld = new Litepicker({
			element: input,
			format: 'DD/MM/YYYY',
			mobileFriendly: true,
			autoApply: true,
			showTooltip: true,
			allowRepick: true,
			singleMode: true,
			inlineMode: false,
			onSelect: function (e) {
				dateDisplay.innerHTML = input.value;
			},
		});
	});
};

const formTourItemToggle = () => {
	Array.from(document.querySelectorAll('.formTourSearchItem')).forEach(
		(item) => {
			const actionBtn = item.querySelector('.formTourSearchItem__action');
			const detail = item.querySelector('.formTourSearchItem__detail');
			actionBtn.addEventListener('click', () => {
				actionBtn
					.querySelector('span')
					.classList.toggle('fa-chevron-down');
				actionBtn
					.querySelector('span')
					.classList.toggle('fa-ellipsis-h');
				detail.classList.toggle('d-flex');
			});
		},
	);
};
