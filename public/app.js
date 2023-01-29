var element = document.getElementById('toggleBtn');
var Bod = document.querySelector('.navbar');
var home = document.querySelector('.home');
var skill = document.querySelector('.skill');
var project = document.querySelector('.project');
var freelancer = document.querySelector('.freelancer');
var port = document.querySelector('.polofilo');
var contact = document.querySelector('.contact');
var load = document.getElementById('load');



element.addEventListener('click', () => {
    Bod.classList.toggle('change_night');
    home.classList.toggle('change_night');
    skill.classList.toggle('change_night');
    project.classList.toggle('change_night');
    freelancer.classList.toggle('change_night');
    port.classList.toggle('change_night');
    contact.classList.toggle('change_night')
})

// window.addEventListener('load', function () {
//     load.style.display = "none";
//     home.style.visibility = 'visible';
//     Bod.style.visibility = 'visible';
//     skill.style.visibility = 'visible';
//     project.style.visibility = 'visible';
//     freelancer.style.visibility = 'visible';
//     port.style.visibility = 'visible';
//     contact.style.visibility = 'visible';
// });
