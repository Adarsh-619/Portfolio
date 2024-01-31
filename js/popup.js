const section = document.querySelector('section'),
  overlay = document.querySelector('.overlay'),
  showBtn = document.querySelector('.show-modal'),
  closeBtn = document.querySelector('.close-btn');

showBtn.addEventListener('click', () => section.classList.add('active'));

overlay.addEventListener('click', () => section.classList.remove('active'));

closeBtn.addEventListener('click', () => section.classList.remove('active'));


var myComponent = document.getElementById("myComponent");
console.log(myComponent.querySelector('h2'));
myComponent.querySelector('h2').innerHTML = "This is the updated text.";