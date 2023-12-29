document.addEventListener('DOMContentLoaded', function() {
    const themePreference = localStorage.getItem('themePreference');
    const style = document.getElementById('style');

    if (themePreference) {
        if (themePreference === 'modo-escuro') {
            style.href = "../css/standard/extends_night.css";
        } else if (themePreference === 'modo-claro') {
            style.href = "../css/standard/extends_day.css";
        }
    } else {
        console.log('Nenhuma preferência de tema encontrada.');
    }
});

const menuDesktopNight = document.getElementById('buttons_desktop_night');
const menuDesktopDay = document.getElementById('buttons_desktop_day');
const buttonMenuNight = document.getElementById('button_menu_night');
const buttonMenuDay = document.getElementById('button_menu_day');
const buttonModeNight = document.getElementById('button_mode_night');
const buttonModeDay = document.getElementById('button_mode_day');
const buttonModeNightDesktop = document.getElementById('button_mode_night_desktop');
const buttonModeDayDesktop = document.getElementById('button_mode_day_desktop');
const menu = document.querySelector('.menu');
const backMenu = document.getElementById('close_menu');
const menuLinks = document.querySelectorAll('.menu_buttons a');
const style = document.getElementById('style');

let isDayMode = true;


function changeMode(){
    
    if (isDayMode) {
        style.href ="../css/standard/extends_day.css"
    }else {
    style.href ="../css/standard/extends_night.css"
    }

    isDayMode = !isDayMode;
}

var valueScroll = 400;



function showMenuScroll() {
  var navbarMobile = document.querySelector('.navbar_mobile');
  var titleMobile = document.querySelector('.navbar_title');
  var buttonsNight = document.querySelectorAll('.button_night');
  var buttonsDay = document.querySelectorAll('.button_day');
  
  if (window.scrollY > valueScroll) {
    navbarMobile.classList.add('fixed');
    titleMobile.classList.add('fixed');   
    buttonsNight.forEach(function(button) {
      button.classList.add('fixed');
    });
    buttonsDay.forEach(function(button) {
        button.classList.add('fixed');
      });
  } else {
    navbarMobile.classList.remove('fixed');
    titleMobile.classList.remove('fixed');
    buttonsNight.forEach(function(button) {
      button.classList.remove('fixed');
    });
    buttonsDay.forEach(function(button) {
        button.classList.remove('fixed');
      });
  }
}

window.addEventListener('scroll', showMenuScroll);


window.addEventListener('load', function() {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolledPercentage = (scrolled / (fullHeight - windowHeight)) * 100;

    if (scrolledPercentage >= 80 || scrolled > 0) {
        menuDesktopNight.style.display = 'flex';
        menuDesktopDay.style.display = 'flex';
    } else {
        menuDesktopNight.style.display = 'none';
        menuDesktopDay.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolledPercentage = (scrolled / (fullHeight - windowHeight)) * 100;

    if (scrolledPercentage >= 15) {
        menuDesktopNight.style.display = 'flex';
        menuDesktopDay.style.display = 'flex';
    } else {
        menuDesktopNight.style.display = 'none';
        menuDesktopDay.style.display = 'none';
    }
});


function changeMenu(show) {
    menu.classList.toggle('show', show);
}

buttonMenuNight.addEventListener('click', (event) => {
    event.preventDefault();
    changeMenu(true);
});

buttonMenuDay.addEventListener('click', (event) => {
    event.preventDefault();
    changeMenu(true);
});

backMenu.addEventListener('click', (event) => {
    event.preventDefault();
    changeMenu(false);
});

function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
        changeMenu(false);
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}

menuLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

buttonModeNight.addEventListener('click', (event) => {
    event.preventDefault();
    changeMode(style);
})

buttonModeDay.addEventListener('click', (event) => {
    event.preventDefault();
    changeMode(style);
})
buttonModeNightDesktop.addEventListener('click', (event) => {
    event.preventDefault();
    changeMode(style);
})

buttonModeDayDesktop.addEventListener('click', (event) => {
    event.preventDefault();
    changeMode(style);
})

