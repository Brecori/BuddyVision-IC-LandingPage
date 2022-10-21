let mediaPhone = window.matchMedia('(max-width: 768px)');
let imgCorona = document.getElementById('corona-img');
let future = document.getElementById('future');
let ambulance = document.getElementById('ambulance-img');
let cloud = document.getElementById('cloud');
let metrics = document.getElementById('metrics-img');
let socorro = document.getElementById('socorro');
let iot = document.getElementById('iot');
let cyborg = document.getElementById('cyborg');
let fiap = document.getElementById('fiap');
let logo = document.getElementById('logo');
let logoWhite = document.getElementById('logo-white');
let scrollUp = document.getElementById('scroll-up');
let funcionaPls = document.getElementById('carouselExampleIndicators')


if (window.matchMedia ('(max-width:768px)').matches) {
    imgCorona.classList.add('py-5');
    imgCorona.classList.add('container-bg-img-alt');
    imgCorona.classList.add('container-bg-img');

    future.classList.remove('container-bg-img');
    ambulance.classList.add('container-bg-img');
    ambulance.classList.add('py-5');

    cloud.classList.remove('container-bg-img-alt');
    metrics.classList.add('container-bg-img-alt');
    metrics.classList.add('py-5');

    socorro.classList.remove('w-75');
    socorro.classList.add('w-100');
    socorro.classList.remove('px-5');
    socorro.classList.remove('py-2');
    funcionaPls.classList.remove('w-75')

    iot.classList.remove('container-bg-img');
    cyborg.classList.add('container-bg-img');
    cyborg.classList.add('py-5');

    fiap.classList.remove('h-50');
    fiap.classList.add('h-75');

    logo.classList.add('d-none');    
    logoWhite.classList.remove('d-none');
    
    scrollUp.classList.remove('up-button')
    scrollUp.classList.add('d-none')
}

window.onscroll = function() {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
        scrollUp.classList.add('right-1');
    }
    else {
        scrollUp.classList.remove('right-1');
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}




