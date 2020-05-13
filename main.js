console.clear();
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
 //Toggle Nav
    
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    });
  // Fixed an issue here from foreach to forEach.
    navLinks.forEach((link,index) =>{
       if(link.style.animation) {
           link.style.animation=''
        } else {
          //Here there was a small mistake of using normal quotes '' and not back ticks ``.
          //Thats it!
            link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
        }
        console.log(index / 7);
    });
}
navSlide();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}