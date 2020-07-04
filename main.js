// particlesJS.load('particles-js', 'particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });

var nav = document.querySelector('nav');
window.addEventListener("scroll", function () {
    nav.classList.toggle('sticky', this.window.scrollY > 90);
})

// window.sr = ScrollReveal();
// sr.reveal('.sticky', {
//     duration: 2000,
//     origin: 'top',
//     distance: '300px'
// })

// sr.reveal('.one', {
//     duration: 1000,
//     origin: 'left',
//     distance: '30px'
// })
// sr.reveal('.two', {
//     duration: 1000,
//     origin: 'bottom',
//     distance: '30px'
// })
// sr.reveal('.three', {
//     duration: 1000,
//     origin: 'right',
//     distance: '30px'
// })

// sr.reveal('.card1', {
//     duration: 400,
//     origin: 'top',
//     distance: '30px'
// })
// sr.reveal('.card2', {
//     duration: 400,
//     origin: 'top',
//     delay:100,
//     distance: '30px'
// })
// sr.reveal('.card3', {
//     duration: 400,
//     origin: 'top',
//     delay: 100,
//     distance: '30px'
// })
// sr.reveal('.card4', {
//     duration: 400,
//     origin: 'bottom',
//     delay: 100,
//     distance: '30px'
// })sr.reveal('.card5', {
//     duration: 400,
//     origin: 'bottom',
//     delay: 100,
//     distance: '30px'
// })sr.reveal('.card6', {
//     duration: 400,
//     origin: 'bottom',
//     delay: 100,
//     distance: '30px'
// })
var imgs = document.querySelectorAll('.img')
function photos(e) {
    imgs.forEach((img => {
        if (!(img.classList.contains(e.id))) {
            img.style.display = 'none';
        }
    }))
}

var gallery = document.getElementById('gallery');
gallery.addEventListener(
    'click', (e) => {
        photos(e.target)
    })
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 1;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

var numbs = document.querySelectorAll('.numb');
var five = 20;
function add() {
    numbs.forEach((numb) => {
        var value = +numb.getAttribute('value');
        var inc = value / five;
        if (+numb.innerText < value) {
            numb.innerText = +numb.innerText + inc
            setInterval(add, 20)
        }
        else {
            numb.innerText=value
        }
    })
  
}

add()

var triangle = document.getElementById('nav');
var nav = document.getElementById('items');
nav.addEventListener('mouseenter', (e) => {
    triangle.classList.toggle(e.target.id)
})