const openMe = document.querySelector('.menu');
const closeMe = document.querySelectorAll('.close');
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
const hideBtn = document.querySelector('.hide-btn a');

hideBtn.addEventListener('click', () => {
  hiddenElement.forEach((item) => {
    if(item.style.visibility === 'hidden') {          
      item.style.visibility = 'visible';
      item.style.height = '100%';
      document.querySelector('.hide-btn a').textContent = 'LESS';
    } else {
      item.style.visibility = 'hidden';
      item.style.height = '0';
      document.querySelector('.hide-btn a').textContent = 'MORE';
    }
  });
});