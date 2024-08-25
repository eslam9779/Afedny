document.addEventListener('DOMContentLoaded', function() {
    var firstNavLink = document.querySelector('.navbar-nav .nav-link');
    if (firstNavLink) {
        setActive(firstNavLink);
    }
});

function setActive(element) {
    
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
}



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
