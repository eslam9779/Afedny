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
const nextBtn = document.querySelector('.next');  // This will now scroll backwards
const backBtn = document.querySelector('.back');  // This will now scroll forwards
const item = document.querySelector('.most_readed_item'); // Select a single item

// Handle mouse and touch events
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

const itemWidth = item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight); // Calculate the width of one item including margin
const scrollMultiplier = 30; 
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

const end2 = () => {
    isDown2 = false;
    slider2.classList.remove('active');
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
