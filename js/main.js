
const menuIcon = document.querySelector('.menu-icon'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.list-item');

function phoneMenu() {
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('menu-active');
      menuIcon.classList.toggle('change');
    });
  });
};
phoneMenu();

$('.menu-icon').click(function(){
  $(this).toggleClass('clicked');
});
