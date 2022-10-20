let mediaPhone = window.matchMedia('(max-width: 768px)');
let imgCorona = document.getElementById('corona-img');
let future = document.getElementById('future');
let ambulance = document.getElementById('ambulance-img');
let cloud = document.getElementById('cloud');
let metrics = document.getElementById('metrics-img');
let socorro = document.getElementById('socorro')

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
}





