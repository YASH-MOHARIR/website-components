
const main_section = document.querySelector('#main_section');

const overlay = document.querySelector('.overlay');
const t_overlay = document.querySelector('#t_overlay');
const overlay_close_btn = document.querySelector('#overlay_close_btn');

const track = document.querySelector('.img-track');
const images = document.querySelectorAll('.image');

const overlay_text_BGcolors =['#DAD4FF','#EDEAF5','#9CB6F5',"#AFD135"]
const overlay_text_colors =['#7962C2','#434039','#FFF9BD', "#3978CB"]


var overlay_text_contents = document.querySelectorAll('#overlay_text_content'); 
var ghost_texts = document.querySelectorAll('#ghost_text'); 

// image track movement logic
main_section.onmousedown = e =>{
    track.dataset.mousedown = e.clientX;  
}

main_section.onmousemove = e =>{

    if(track.dataset.mousedown == "0") return ;

    const mouseDelta = parseFloat(track.dataset.mousedown) -  e.clientX,
    maxDelta = window.innerWidth/2;

    let percentage = (mouseDelta/maxDelta)*-100;

    let nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained,0),-100)

    track.dataset.percentage = nextPercentage; 

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of images) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

main_section.onmouseup = e =>{
    track.dataset.mousedown = 0;
    track.dataset.prevPercentage=track.dataset.percentage;
} 

images.forEach(image => image.animate({
    height : "56vmin"
  }, { duration: 100, fill: "forwards", easing: 'ease-in' })
);

 
//Image Hover - shutter audio
var audio = new Audio("./Resources/cameraFocus.wav");
var music_trigger = document.getElementById('music_trigger');

images.forEach(image =>image.addEventListener('mouseenter',()=>{ music_trigger.click();  }))


//Image ON-Click logic
images.forEach((image,i) => image.addEventListener('click' , (e)=>{
 
  ghost_texts.forEach(ghost_text=>
    ghost_text.style.display = "block"
  )


  overlay_text_contents.forEach( overlay_text_content =>{

    overlay_text_content.classList.toggle('text-reveal') ;
    overlay_text_content.style.color = overlay_text_colors[i];
     
    overlay_text_content.style.backgroundColor = overlay_text_BGcolors[i] +"80" 
  })
    
  overlay_close_btn.style.backgroundColor = overlay_text_BGcolors[i] + "80"  ;
  overlay_close_btn.style.color = overlay_text_colors[i]  +"80";
  

  e.target.classList.add('image-expand')

  track.animate({
    transform: `translate(${0}%, -50%)`
  },            { duration: 1200, fill: "forwards" });
  track.style.left = `3vw`;

  overlay.animate({
    display:'block', 
    backgroundColor : overlay_text_BGcolors[i] + "4D"
  },               { duration: 300, fill: "forwards" });

  t_overlay.animate({
    display:'block',
    opacity: 1 
  },                    { duration: 100, fill: "forwards" });
  t_overlay.style.display = 'block';

  track.style.left = `3vw`;  
 
}));


// Image Close
t_overlay.addEventListener('click',()=>{
  
  overlay_text_contents.forEach( overlay_text_content =>{
    overlay_text_content.classList.toggle('text-reveal')  
    // overlay_text_content.style.backgroundColor = "transparent"  
  })
  setTimeout(() => {
    ghost_texts.forEach(ghost_text=>
      ghost_text.style.display = "none"
    ) 
  }, 1000);
  
  images.forEach(image => {

    image.classList.remove('image-expand');

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    },            { duration: 1200, fill: "forwards" });
    
  });

  track.style.left = "50%"

  t_overlay.animate({
    display:'none',
    opacity: 0 
  },                    { duration: 1200, fill: "forwards" }); 
  t_overlay.style.display = 'none';

  overlay.animate({
    display:'none', 
    backgroundColor : 'transparent'
  },               { duration: 500, fill: "forwards" });
 

})
   