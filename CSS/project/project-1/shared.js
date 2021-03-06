var backdrop = document.querySelector('.back-drop');
var selectPlanButton = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta')


for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');

    })
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modal.addEventListener('click', closeModal);
}


function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

// can be useful for timing events in javascript
// ctaButton.addEventListener('animationstart', function(event) {
//     console.log('animation started', event);
// })

// ctaButton.addEventListener('animationend', function(event) {
//     console.log('animation ended', event);
// })

// ctaButton.addEventListener('animationiteration', function(event) {
//     console.log('animation iterated', event);
// })