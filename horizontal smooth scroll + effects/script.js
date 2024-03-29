const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
width = scrollWrap.getBoundingClientRect().width -1 ,
speed = 0.1;

var offset = 0;

body.style.height = Math.floor(width) + "px";

function smoothScroll() {
offset += (window.scrollY - offset) * speed;

var scroll = "translateX(-" + offset + "px) translateZ(0)";
scrollWrap.style.transform = scroll;

callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

///////////////////////////////////////

var main_container = document.getElementById("smooth-scroll-wrapper")

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry =>{
        
    if(entry.isIntersecting){
            entry.target.classList.add('show');
            
            // if (entry.target.classList.contains('image-windowed')) {
            //     entry.target.classList.add('show');
                
            // }
        }else{
            entry.target.classList.remove('show')

        }
    })

})

const images = document.querySelectorAll('.image')
.forEach(el => observer.observe(el) )