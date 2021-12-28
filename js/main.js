const openMe = document.querySelector('.menu');
const closeMe = document.querySelectorAll('.close-btn');
const menuMobile = document.querySelector('#navbar');

openMe.addEventListener('click', () => {
  menuMobile.style.height = '100%';
});

closeMe.forEach((element) => {
  element.addEventListener('click', () => {
    menuMobile.style.height = '0%';
  });
});

const hiddenElement = document.querySelectorAll('.hide-cards');
const hideBtn = document.querySelector('.hide-btn');
const show = document.querySelector('.show-items');
const icon = document.querySelector('.hide-btn i');
const caretDown = ('fa', 'fa-chevron-down');
const caretUp = ('fa', 'fa-chevron-up');

 hiddenElement.forEach((item) => {
 hideBtn.addEventListener('click', () => {
 
     if (item.style.visibility === 'visible') {
      item.style.visibility = 'hidden';
      item.style.height = '0';
      show.textContent = 'MORE';
      icon.classList.remove(caretUp);
      icon.classList.add(caretDown);
     } else {
      item.style.visibility = 'visible';
      item.style.height = '100%';
      show.textContent = 'LESS';
      icon.classList.remove(caretDown);
      icon.classList.add(caretUp);
     }
   });
  });




      

