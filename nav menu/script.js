var nav_menu = document.getElementById("nav_menu");
var nav_btn = document.getElementById("nav_btn");
var nav_overlay = document.getElementById("nav_overlay");
var projects_menu = document.getElementById("projects_menu");
var dots = document.getElementById("dots");

nav_btn.addEventListener('mouseenter', ()=>{
dots.style.rotate = '90deg';
})
nav_btn.addEventListener('mouseleave', ()=>{
    dots.style.rotate = '0deg';
})

nav_btn.addEventListener('click', ()=>{
    nav_menu.classList.toggle("menu-show")
    projects_menu.classList.toggle("projects-show")

    nav_overlay.classList.toggle('overlay-show')
    // nav_overlay.style.background =  'linear-gradient(90deg, rgba(242, 242, 242, 0) 0%, rgba(0, 0, 0, 0.436) 100%)'
    // nav_overlay.style.display = 'block';

})
