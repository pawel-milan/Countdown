let countdown = document.querySelector('#countdown')
let date = new Date();
let year = date.getFullYear() 
let newDate = new Date(`January 22, ${year} 00:00:01`).getTime()

setInterval(function(){

    date = new Date();
    year = date.getFullYear()
    let now = new Date().getTime();
    let distance = newDate - now
    
    let seconds = Math.floor((distance%(1000*60))/1000)
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    if (distance > 0) {
        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    }
    else{
        newDate = new Date(`January 22, ${year+1} 00:00:01`).getTime()
    }
}, 1000)