var img = document.getElementById('image');
var img_comtainer = document.getElementById('image-container');
var music_trigger = document.getElementById('music_trigger');
music_trigger.style.display = 'none';

var audio = new Audio('./Resourses/cameraFocus.wav');

img_comtainer.addEventListener('mousemove',(e)=>{

    img.style.transform = `translate(${e.offsetX/50}px , ${e.offsetY/50}px)`;
  

})
img.addEventListener('mouseenter',()=>{
    music_trigger.click()
})

 