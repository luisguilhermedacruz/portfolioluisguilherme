const sun = document.getElementById('button_sun');
const moon = document.getElementById('button_moon');
const body = document.querySelector('body');
const text = document.querySelectorAll('.text_principal, .logomarca, .copyright, .loading_circle, .logo_static');
const bra = document.getElementById('pt-br');
const usa = document.getElementById('en-us');



function toggleColors(backgroundGradient, sunDisplay, moonDisplay, addClass) {
    body.style.backgroundImage = backgroundGradient;
    sun.style.display = sunDisplay;
    moon.style.display = moonDisplay;

    text.forEach(element => {
        if (addClass) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

sun.addEventListener('click', () => {
    toggleColors('linear-gradient(to bottom right, var(--bg_white1) 0%, var(--bg_white1) 50%, var(--bg_white2) 50%, var(--bg_white2) 100%)', 'none', 'block', true, 'none');
});

moon.addEventListener('click', () => {
    toggleColors('linear-gradient(to bottom right, var(--bg_black1) 0%, var(--bg_black1) 50%, var(--bg_black2) 50%, var(--bg_black2) 100%)', 'block', 'none', false , 'block');
});

function toggleLoading(show) {
    const loading = document.querySelector('.loading_container');
    loading.style.display = show ? 'block' : 'none';
}

function verificarEArmazenarPreferencia() {
    const languageSelector = document.querySelector('.moon_day');

    if (window.getComputedStyle(languageSelector).display === 'none') {
        localStorage.setItem('themePreference', 'modo-escuro');
        
    } else {
        localStorage.setItem('themePreference', 'modo-claro');
        
    }
}

bra.addEventListener('click', (event) => {
    event.preventDefault(); 
    toggleLoading(true);

    const textPrincipal = document.querySelector('.text_principal');
    const nations = document.querySelector('.nations');
    const logomarca = document.querySelector('.logomarca')
    textPrincipal.style.display = 'none';
    nations.style.display = 'none';
    logomarca.style.display = 'none';

    setTimeout(() => {
        verificarEArmazenarPreferencia();
        window.location.href = './pt-br/portfoliopt-br.html';
    }, 2000);
});

usa.addEventListener('click', (event) => {
    event.preventDefault(); 
    toggleLoading(true);

    const textPrincipal = document.querySelector('.text_principal');
    const nations = document.querySelector('.nations');
    const logomarca = document.querySelector('.logomarca')
    textPrincipal.style.display = 'none';
    nations.style.display = 'none';
    logomarca.style.display = 'none';

    setTimeout(() => {
        verificarEArmazenarPreferencia(); 
        window.location.href = './english/portfolio-en.html';
    }, 2000);
});