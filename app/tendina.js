
const menuTendina = document.querySelector('.burger');
const nav = document.querySelector('.nav-responsive');
const navLinks = document.querySelectorAll('.nav li');

 // apertura menu a tendina
menuTendina.addEventListener('click', () => {
   nav.classList.remove('nav')
   nav.classList.toggle('nav-active');
   
  
    //animazione menuTendina

     menuTendina.classList.toggle('toggle');

   });


