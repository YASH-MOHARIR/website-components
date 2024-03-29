let cards = document.querySelectorAll(".card");
let icons = document.querySelectorAll(".icon");

const imgs = [
    "https://plus.unsplash.com/premium_photo-1672582776510-048e431afb31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687980976-fec0915c6177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687981807-35e55307a7bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
] 

cards.forEach( (card,i) => {
    
    card.style.backgroundImage  = `url(${imgs[i]})`;

    card.addEventListener('click', (e)=>{
        cards.forEach(card=>{ card.classList.remove("expand") ; card.classList.add("compact") } )

        e.target.classList.remove("compact");
        e.target.classList.add('expand')

        cards.forEach((card,i) =>{
            if(card.classList.contains("compact")){
                
                icons[i].classList.add('icon-shrink')
            }else{
                icons[i].classList.remove('icon-shrink')
            }
        })
    })
})