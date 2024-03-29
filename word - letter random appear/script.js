var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var effect_text = document.querySelector('.effect-text');

effect_text.addEventListener('mouseenter', (e)=>{

    var interval = 0 ;

    const text_interval = setInterval(() => {
        
        e.target.innerText= e.target.innerText.split('')

        .map((letter, index) =>{

            if (index<2) {
            }
            letters[Math.floor(Math.random()*26)])
            .join("")
        }
            
            if(interval>9) clearInterval(text_interval)
            interval++;
            
    }, 50);

})