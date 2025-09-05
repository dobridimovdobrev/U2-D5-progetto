// Colori definiti
const YELLOW = '#ffc017';
const BLACK = '#191919';
const GREEN = '#1a8917';


function handleScroll() {
  const header = document.querySelector('.my-header');
  const getStartedBtn = document.querySelector('.get-started-btn');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 150) {
   
    header.classList.add('scrolled');
   
    getStartedBtn.style.backgroundColor = GREEN;
  } else {
    
    header.classList.remove('scrolled');
    
    getStartedBtn.style.backgroundColor = BLACK;
  }
}


document.addEventListener('DOMContentLoaded', function() {
 
  window.addEventListener('scroll', handleScroll);
  
 
  handleScroll();
});


window.onload = function() {
  
  window.addEventListener('scroll', handleScroll);
  
  handleScroll();
};