
var btn = document.getElementById('btn');
var btn_text = document.getElementById('btn_text');
var btn_text2 = document.getElementById('btn_text2');


btn.addEventListener("mouseenter", ()=>{
    btn_text.classList.add('btn-hover')
    btn_text2.classList.add('btn-hover-reveal')
})
btn.addEventListener("mouseleave", ()=>{
    btn_text.classList.remove('btn-hover')
    btn_text2.classList.remove('btn-hover-reveal')
})

btn.addEventListener("click", ()=>{
    btn_text.classList.toggle('btn-hover')
    btn_text2.classList.toggle('btn-hover-reveal')
})