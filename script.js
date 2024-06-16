let menubar = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}


/**Vehicale preview */

let previewContainer = document.querySelector('.vehicale-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.vehical-container .vehicale').forEach(vehicale => {
    vehicale.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = vehicale.getAttribute('data-name');
        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name === target) {
                preview.classList.add('active');
            } else {
                preview.classList.remove('active');
            }
        });
    };
});


document.querySelectorAll('.preview .fa-times').forEach(closeButton => {
    closeButton.onclick = () => {
        previewContainer.style.display = 'none';
        previewBoxes.forEach(preview => {
            preview.classList.remove('active');
        });
    };
});



/****Footer**** */

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.footer-bottom .year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});




