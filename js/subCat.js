
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.most_readed_items');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();
////////////////////////////////////////////second Slider
let isDown2 = false;
let startX2;
let scrollLeft2;
const slider2 = document.querySelector('.test'); // Using querySelector for class

const end2 = () => {
    isDown2 = false;
    slider2.classList.remove('active');
}

const start2 = (e) => {
    isDown2 = true;
    slider2.classList.add('active');
    startX2 = (e.pageX || e.touches[0].pageX) - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft; // Corrected to scrollLeft
}

const move2 = (e) => {
    if (!isDown2) return;

    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - slider2.offsetLeft;
    const dist = (x - startX2);
    slider2.scrollLeft = scrollLeft2 - dist; 
}

(() => {
    slider2.addEventListener('mousedown', start2);
    slider2.addEventListener('touchstart', start2);

    slider2.addEventListener('mousemove', move2);
    slider2.addEventListener('touchmove', move2);

    slider2.addEventListener('mouseleave', end2);
    slider2.addEventListener('mouseup', end2);
    slider2.addEventListener('touchend', end2);
})();
