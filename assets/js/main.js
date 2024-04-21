// Función para mostrar el menú
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
};

// Función para quitar el menú en dispositivos móviles
const removeMenuMobile = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

// Función para activar los enlaces de sección al desplazarse
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};

// Función para cambiar el fondo del encabezado al desplazarse
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 200) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
};

// Función para mostrar el botón de desplazamiento superior
const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top');
    if (window.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
};

// Función para alternar entre temas claro y oscuro
const toggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
};

// Función para inicializar el tema según la preferencia del usuario almacenada en el almacenamiento local
const initTheme = () => {
    if (localStorage.getItem('selected-theme')) {
        document.body.classList[localStorage.getItem('selected-theme') === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[localStorage.getItem('selected-icon') === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }
};

// Configuración de animación de revelación de desplazamiento
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

// Revelar elementos con animación al desplazarse
sr.reveal(`
    .home__data, .home__img,
    .about__data, .about__img,
    .services__content, .menu__content,
    .app__data, .app__img,
    .contact__data, .contact__button,
    .footer__content
`, {
    interval: 200
});

// Asignar eventos de desplazamiento y tema
window.addEventListener('scroll', () => {
    scrollActive();
    scrollHeader();
    scrollTop();
});

themeButton.addEventListener('click', toggleTheme);

// Inicializar tema
initTheme();

// Asignar eventos para mostrar/ocultar el menú en dispositivos móviles
showMenu('nav-toggle', 'nav-menu');
navLinks.forEach(navLink => navLink.addEventListener('click', removeMenuMobile));
