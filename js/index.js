document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.book-slide');
  let currentSlide = 3; // Start with the 4th slide as the active one

  function updateSlides() {
      slides.forEach((slide, index) => {
          slide.classList.remove('prev-2', 'prev-1', 'next-1', 'next-2', 'active');

          if (index === currentSlide) {
              slide.classList.add('active');
          } else if (index === (currentSlide - 2 + slides.length) % slides.length) {
              slide.classList.add('prev-2');
          } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
              slide.classList.add('prev-1');
          } else if (index === (currentSlide + 1) % slides.length) {
              slide.classList.add('next-1');
          } else if (index === (currentSlide + 2) % slides.length) {
              slide.classList.add('next-2');
          }
      });
  }

  document.querySelector('.next').addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
  });

  document.querySelector('.prev').addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
  });

  updateSlides();
});

//////////////////////////////// news books slider

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slider-wrapper2 > div');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none'; // Hide all slides
  });

  dots.forEach((dot) => {
    dot.className = dot.className.replace(' active', ''); // Remove 'active' class from all dots
  });

  // Show the current slide
  slides[slideIndex - 1].style.display = 'flex'; 

  // Highlight the current dot
  dots[slideIndex - 1].className += ' active';
}




///////////most Readed Slider

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


////////////////////////////////////////////////////////

let slideIndex2 = 1;
showSlides2(slideIndex2);

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  const slides = document.querySelectorAll('.slider-wrapper3 > div');
  const dots = document.querySelectorAll('.dot1');

  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none'; // Hide all slides
  });

  dots.forEach((dot) => {
    dot.className = dot.className.replace(' active', ''); // Remove 'active' class from all dots
  });

  // Show the current slide
  slides[slideIndex2 - 1].style.display = 'flex'; 

  // Highlight the current dot
  dots[slideIndex2 - 1].className += ' active';
}

//////////////////////////////////////////////////////////


// author slider
function showSlider(slideId) {
  // Remove 'active-slide' class from all slides
  document.querySelectorAll('.card-slide').forEach(slide => {
      slide.classList.remove('active-slide');
  });

  // Add 'active-slide' class to the selected slide
  document.getElementById(slideId).classList.add('active-slide');

  // Remove 'active' class from all buttons
  document.querySelectorAll('.autor_btn').forEach(button => {
      button.classList.remove('active');
  });

  // Add 'active' class to the button that matches the selected slide
  const activeButton = Array.from(document.querySelectorAll('.autor_btn')).find(button => {
      return button.getAttribute('onclick').includes(slideId);
  });
  
  if (activeButton) {
      activeButton.classList.add('active');
  }
}

// Call the function to show the initial slide and set the initial active button
showSlider('slide1');
