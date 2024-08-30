const content = document.getElementById('content');
const showMoreBtn = document.getElementById('showMoreBtn');
showMoreBtn.addEventListener('click', function() {

  if (content.style.maxHeight === '100px') {
    content.style.maxHeight = 'none';
    showMoreBtn.textContent = 'اخفاء';
  } else {
    content.style.maxHeight = '100px';
    showMoreBtn.textContent = ' قراءة المزيد';
  }
});

//////////////////////////////////////////////////////////////////


let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.most_readed_items');
const nextBtn = document.querySelector('.next');  
const backBtn = document.querySelector('.back'); 
const item = document.querySelector('.most_readed_item'); 

const end = () => {
  isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const move = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
}

const itemWidth = item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight); 
const scrollMultiplier = 1; 
nextBtn.addEventListener('click', () => {
  slider.scrollLeft -= itemWidth * scrollMultiplier; 
});

backBtn.addEventListener('click', () => {
  slider.scrollLeft += itemWidth * scrollMultiplier; 
});

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
const slider2 = document.querySelector('.test2');
const nextBtn2 = document.querySelector('.next2');  
const backBtn2 = document.querySelector('.back2'); 
const item2 = document.querySelector('.test2'); 

const end2 = () => {
  isDown2 = false;
  slider.classList.remove('active');
}

const start2 = (e) => {
  isDown2 = true;
  slider2.classList.add('active');
  startX2 = (e.pageX || e.touches[0].pageX) - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;
}

const move2 = (e) => {
  if (!isDown2) return;
  e.preventDefault();
  const x2 = (e.pageX || e.touches[0].pageX) - slider2.offsetLeft;
  const dist = x2 - startX2;
  slider2.scrollLeft = scrollLeft2 - dist;
}

const itemWidth2 = item2.offsetWidth + parseInt(window.getComputedStyle(item2).marginRight);
const scrollMultiplier2 = 1; 
nextBtn2.addEventListener('click', () => {
  slider2.scrollLeft -= itemWidth2 * scrollMultiplier; 
});

backBtn.addEventListener('click', () => {
  slider2.scrollLeft += itemWidth2 * scrollMultiplier; 
});

(() => {
  slider2.addEventListener('mousedown', start2);
  slider2.addEventListener('touchstart', start2);

  slider2.addEventListener('mousemove', move2);
  slider2.addEventListener('touchmove', move2);

  slider2.addEventListener('mouseleave', end2);
  slider2.addEventListener('mouseup', end2);
  slider2.addEventListener('touchend', end2);
})();
