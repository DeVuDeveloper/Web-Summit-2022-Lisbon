function openMe () {
  document.getElementById('navbar').style.height = '100%'
}
function closeMe () {
  document.getElementById('navbar').style.height = '0%'
}



 function hideShow () {
  let hiddenElement = document.querySelectorAll('#hide-cards');
  hiddenElement.forEach((item) =>{
    if(item.style.visibility === 'hidden') {
     item.style.visibility = 'visible'
    } else {
      item.style.visibility = 'hidden'
    }
  });
}
