let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let HIPER = document.querySelector('.HIPER')

onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + 'px'
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value  + 'px'
    boat.style.top = value  + 'px'
    boat.style.left = value * 3 + 'px'
    HIPER.style.fontSize = value  + 'px'
    if(scrollY >= 77){
        HIPER.style.fontSize = 77  + 'px'
        HIPER.style.position ='fixed'
        if(this.scrollY >= 696){
            HIPER.style.display = 'none'
        }else{
             HIPER.style.display = 'block'
        }
        if(scrollY >= 204){
            document.querySelector('.main').style.background = 'linear-gradient(#003e63, #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }
    }

}
