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
	// Rating
	rating();
	// price slider
	priceSlider();
	// toggle cart summary
	cartSummaryToggle();
	cartOptionsItemToggle();
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
	//scroll
	// menuSroll();
	//toggle class
	buttonToggle();
	// toggle filter on tour list page
	toggleFilter();
	// scrollspy
	scrollSpy();
	// tour detail slider
	tourDetailSlider();
	questionToggle();
});

//swiper
function swiperSlider() {
	let ourTeam = new Swiper('.ourTeam__slideWrapper .swiper-container', {
		autoplay: {
			delay: 4500,
		},
		spaceBetween: 20,
		speed: 500,
		loop: true,
		navigation: {
			nextEl: '.ourTeam__slideWrapper .swiper__btn--prev',
			prevEl: '.ourTeam__slideWrapper .swiper__btn--next',
		},
		pagination: {
			el: '.ourTeam__slideWrapper .swiper__pagination',
			type: 'bullets',
			clickable: true,
		},
		slidesPerView: 1,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1200: {
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
	let rating = new Swiper('.slide-rating .swiper-container', {
		autoplay: {
			delay: 4500,
		},
		spaceBetween: 20,
		speed: 500,
		navigation: {
			nextEl: '.slide-rating .swiper-next',
			prevEl: '.slide-rating .swiper-prev',
		},
		pagination: {
			el: '.slide-rating .swiper-pagination',
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
	var years = new Swiper('.story__years .swiper-container', {
		spaceBetween: 10,
		slidesPerView: 9,
		freeMode: true,
		// loop: true,
		// loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		init: false,
		on: {
			init: function () {
				itemPerYears.init();
				years.slides[0]
					.querySelector('.yearItem')
					.classList.add('slide-active');
				itemPerYears.slides[0].classList.add('slide-active');
			},
			click: function (e) {
				itemPerYears.slides.forEach((item, index) => {
					if (index == e.clickedIndex) {
						item.classList.add('slide-active');
					} else {
						item.classList.remove('slide-active');
					}
				});
				years.slides.forEach((item, index) => {
					if (index == e.clickedIndex) {
						item.querySelector('.yearItem').classList.add(
							'slide-active',
						);
					} else {
						item.querySelector('.yearItem').classList.remove(
							'slide-active',
						);
					}
				});
			},
		},
	});
	var itemPerYears = new Swiper('.story__itemsPerYear .swiper-container', {
		spaceBetween: 10,
		slidesPerView: 4,
		init: false,
		// loop: true,
		freeMode: true,
		// loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: years,
		},
	});
	if (document.querySelector('.story__itemsPerYear .swiper-container')) {
		years.init();
	}
}
//scroll menu
// function menuSroll() {
// 	function functionScroll() {
// 		var section = document.querySelectorAll('.scroll'),
// 			sections = {},
// 			i = 0;

// 		Array.prototype.forEach.call(section, function (e) {
// 			sections[e.id] = e.offsetTop;
// 		});
// 		for (i in sections) {
// 			if (sections[i] <= window.pageYOffset + 100) {
// 				document.querySelector('.active').classList.remove('active');
// 				document
// 					.querySelector('li a[href*=' + i + ']')
// 					.classList.add('active');
// 			}
// 		}
// 		console.log(123);
// 	}

// 	window.addEventListener('scroll', functionScroll);
// 	window.addEventListener('resize', functionScroll);
// }
function buttonToggle() {
	const btn = document.querySelector('.category__button');
	if (btn) {
		btn.addEventListener('click', () => {
			btn.classList.toggle('active');
		});
	}
}

const scrollSpy = () => {
	const wrapper = document.querySelector('.scrollspyWrapper');
	if (wrapper) {
		const scrollButtons = Array.from(
			wrapper.querySelectorAll('[data-target]'),
		);
		scrollButtons.forEach((btn, btnIndex) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				scrollButtons.forEach((i, iIndex) => {
					if (iIndex == btnIndex) {
						i.parentNode.classList.add('active');
					} else {
						i.parentNode.classList.remove('active');
					}
				});
				const target = btn.getAttribute('data-target');
				const targetDom = document.querySelector(`[data-id=${target}]`);
				window.scrollTo({
					top: targetDom.offsetTop - header.clientHeight,
					left: 0,
					behavior: 'smooth',
				});
			});
		});
	}

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				// console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add('section-in-viewport');
					const btn = document.querySelector(
						`[data-target=${entry.target.getAttribute('data-id')}]`,
					);
					btn.parentNode.classList.add('active');
				} else {
					entry.target.classList.remove('section-in-viewport');
					const btn = document.querySelector(
						`[data-target=${entry.target.getAttribute('data-id')}]`,
					);
					btn.parentNode.classList.remove('active');
				}
			});
		},
		{
			threshold: 0.8,
		},
	);

	const elements = document.querySelectorAll('[data-id]');
	elements.forEach((element) => {
		observer.observe(element);
	});
};

const initCalendar = () => {
	Array.from(document.querySelectorAll('[data-date]')).forEach((input) => {
		const inlineMode = Boolean(input.getAttribute('inline-mode'));
		// console.log(inlineMode);
		return new Litepicker({
			element: input,
			format: 'DD/MM/YYYY',
			mobileFriendly: true,
			autoApply: true,
			showTooltip: true,
			allowRepick: true,
			singleMode: true,
			inlineMode: inlineMode,
		});
	});

	Array.from(document.querySelectorAll('[data-date-inline]')).forEach(
		(picker) => {
			const target = picker.getAttribute('data-date-target');
			const targetDom = document.querySelector(target);
			const pickerObject = new Litepicker({
				element: picker,
				format: 'DD/MM/YYYY',
				mobileFriendly: true,
				autoApply: true,
				showTooltip: true,
				allowRepick: true,
				singleMode: true,
				inlineMode: true,
				onSelect: function (date1, date2) {
					targetDom.value = picker.value;
					if (targetDom) {
						picker.classList.add('dirtied');
					} else {
						picker.classList.remove('dirtied');
						pickerObject.clearSelection();
					}
				},
			});
			// input.addEventListener('change', () => {
			// 	const value = input.value;
			// 	if (value) {
			// 		picker.classList.add('dirtied');
			// 	} else {
			// 		pickerObject.clearSelection();
			// 		picker.classList.remove('dirtied');
			// 	}
			// });
		},
	);
};
const rating = () => {
	Array.from(document.querySelectorAll('[data-rating]')).forEach((item) => {
		const percent = Number(item.getAttribute('data-rating'));
		item.setAttribute('style', `width:${percent * 100}%`);
		const editable = Boolean(item.getAttribute('editable'));
		if (editable) {
			item.addEventListener('mousemove', (e) => {
				const percent = e.layerX / item.clientWidth;
				item.setAttribute('style', `width:${percent * 100}%`);
			});
		}
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
	const matchMedia = window.matchMedia('(max-width: 1199.98px)');
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
			if (actionBtn) {
				actionBtn.addEventListener('click', () => {
					actionBtn
						.querySelector('span')
						.classList.toggle('fa-chevron-down');
					actionBtn
						.querySelector('span')
						.classList.toggle('fa-ellipsis-h');
					detail.classList.toggle('d-flex');
				});
			}
		},
	);
};
const cartSummaryToggle = () => {
	const aside = document.querySelector('.cartAside');
	const btn = document.querySelector('.cartAside__mobileToggle');
	if (btn) {
		btn.addEventListener('click', () => {
			aside.classList.toggle('show');
			if (aside.classList.contains('show')) {
				backdropObserver.next(true);
			} else {
				backdropObserver.next(false);
			}
		});
	}
};
const cartOptionsItemToggle = () => {
	const items = Array.from(
		document.querySelectorAll('.cartAsideOption'),
	).forEach((item) => {
		const title = item.querySelector('.cartAsideOption__iconToggle');
		const content = item.querySelector('.cartAsideOption__list');
		title.addEventListener('click', () => {
			content.classList.toggle('d-block');
		});
	});
};
const priceSlider = () => {
	let slider = document.getElementById('priceSlider__bar');
	if (slider) {
		let inputMin = document.getElementById('priceSlider__result--min');
		let inputMax = document.getElementById('priceSlider__result--max');
		let defaultMin = slider.getAttribute('data-min');
		let defaultMax = slider.getAttribute('data-max');
		let currentMin = slider.getAttribute('data-current-min');
		let currentMax = slider.getAttribute('data-current-max');
		let step = slider.getAttribute('data-step');
		let inputPrices = Array.from(
			document.querySelectorAll('.priceSlider__group input'),
		);
		noUiSlider.create(slider, {
			start: [currentMin, currentMax],
			connect: true,
			step: parseFloat(step),
			range: {
				min: parseFloat(defaultMin),
				max: parseFloat(defaultMax),
			},
		});
		slider.noUiSlider.on('slide', function (e) {
			inputMin.value = e[0];
			inputMax.value = e[1];
		});
		slider.noUiSlider.on('set', function (e) {
			inputMin.value = e[0];
			inputMax.value = e[1];
		});
		inputPrices.forEach((input) => {
			input.addEventListener('change', () => {
				let value = [];
				inputPrices.forEach((t) => {
					value.push(t.value);
				});
				slider.noUiSlider.set(value);
			});
		});
	}
};
const toggleFilter = () => {
	const filterBtn = document.querySelector(
		'.filterContainer .filter__mobileToggle',
	);
	const filterWrapper = document.querySelector(
		'.filterContainer .filter__wrapper',
	);
	const filterClose = document.querySelector(
		'.filterContainer .filter__close',
	);
	if (filterBtn && filterWrapper) {
		filterBtn.addEventListener('click', () => {
			filterWrapper.classList.add('show');
			backdropObserver.next(true);
		});
	}
	if (filterClose && filterWrapper) {
		filterClose.addEventListener('click', () => {
			filterWrapper.classList.remove('show');
			backdropObserver.next(false);
		});
	}
};
const tourDetailSlider = () => {
	let smallSlider = new Swiper('.tourDetail__smallSlider .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 4,
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
			1200: {
				spaceBetween: 30,
				slidesPerView: 4,
			},
		},
	});
	let bigSlider = new Swiper('.tourDetail__bigSlider .swiper-container', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		thumbs: {
			swiper: smallSlider,
		},
	});
};

const questionToggle = () => {
	Array.from(document.querySelectorAll('.questionItem')).forEach((item) => {
		item.addEventListener('click', () => {
			item.classList.toggle('active');
		});
	});
};
