// ===== MENU ==== //
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
});

// HIDE
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
});

// ==== REMOVE MENU ==== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show')
};
navLink.forEach(n => n.addEventListener('click', linkAction));

// ==== SCROLL SECTIONS ACTIVE LINK ==== //
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        };
    });
};

// =====PROJECTS===== //

function projectToggle(target) {
    const projectData = document.getElementById(`projects${target}-data`),

        clickEvent = ('click', () => {
            if (projectData.style.opacity != '0') {
                projectData.style.opacity = '0';
            } else {
                projectData.style.opacity = "1";
            }
        })

    clickEvent();

}

