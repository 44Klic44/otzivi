


//POPUP
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});



		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}


	
});



//SLAIDER
let position = 0; //начальная позиция
let slidesToShow = 4; //сколько показываеться элементов
const mq = window.matchMedia('(max-width: 1200px)')

if (mq.matches) {
    slidesToShow = 3;
    
}

const m = window.matchMedia('(max-width: 960px)')

if (m.matches) {
    slidesToShow = 2;
   
} ;

const c = window.matchMedia('(max-width: 640px)')

if (c.matches) {
    slidesToShow = 1;
    
} ;
const slidesToScroll = 1; // на сколько скролим элементов
const container = document.querySelector('.slider-container');//контэйнер слайдера
const track = document.querySelector('.slider-track');//трекслайдера
// const item = document.querySelector('.slider-item');//слайд
const btnPrev = document.querySelector('.btn-prev'); //кнопканазад
const btnNext = document.querySelector('.btn-next');//кнопкавперед
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;//сумма количества элементов
const itemWidth = container.clientWidth / slidesToShow; //Ширина одного элемента слайда ( берем ширину контейнреа делим на количество показываемых слайдов)
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
 item.style.minWidth = `${itemWidth}px`;
});
 

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
});


btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
setPosition();
checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
      
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position  <= -(itemsCount - slidesToShow) * itemWidth;      
};

checkBtns();



