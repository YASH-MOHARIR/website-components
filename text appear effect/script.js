var texts = document.querySelectorAll('.text')

var delay = 300;
texts.forEach(text => {
 
   text.style.transitionDuration = 200+ delay + "ms";
   text.style.transitionDelay = delay + "ms";
   delay+=200;
   text.classList.add("text-appear")
});
 
 
