' use strict';

const menuIcon = document.querySelector('.menu-icon'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.list-item'),
      prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dot = document.querySelectorAll('.dots');

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = n => {
  for(dots of dot) {
    dots.classList.remove('active');
  }
  dot[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dot.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index= indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/* const interval = setInterval(nextSlide, 2500);

next.addEventListener('click', () => {
  clearInterval(interval);
}, false); */

/* бургер-меню */

function phoneMenu() {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('clicked');
  });

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('menu-active');
      menuIcon.classList.toggle('change');
    });
  });

  menuIcon.onclick = function() {
    menu.style.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
  };
};

phoneMenu();
