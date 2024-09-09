
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbars');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}


// bar.addEventListener('click', () => {
//   alert("hello");
//   nav.classList.add('active');
// });