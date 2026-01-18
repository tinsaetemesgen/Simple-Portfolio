const body = document.body

// Page Loading Animation
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1600);
});


// Dark Mode  
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  document.querySelector('.themeToggle').textContent = '☀️';
}

const toggleTheme = document.querySelector('.themeToggle')
toggleTheme.addEventListener('click', ()=> {
    body.classList.toggle('dark')
    const isDark = body.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    toggleTheme.textContent = isDark ? '☀️' : '🌙'
})


// Scroll Down to About Section
const scrollDownBtn = document.getElementById('scroll-down')
const aboutSection = document.getElementById('about')
scrollDownBtn.addEventListener('click', ()=> {
    aboutSection.scrollIntoView({behavior: "smooth"})
})

// Scroll Up to Top
const scrollUpBtn = document.getElementById('scroll-up')
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})


// Thankyou Message on form submission
function showThankYou() {
  setTimeout(() => {
    document.querySelector('form').style.display = 'none'
    document.getElementById('formMessage').style.display = 'block'
    document.getElementById('formMessage').style.color = 'green'
    document.getElementById('formMessage').style.fontSize = 'large'
  }, 500);
}


// Hire Me button click toggle with loader
const hireMeBtn = document.querySelector('.hire-me-btn');
const mainArticle = document.querySelector('#main article');
const projectSection = document.getElementById('projects');
const hireSection = document.getElementById('hire');
const preloader = document.getElementById('preloader');

let hireVisible = false;

hireMeBtn.addEventListener('click', ()=> {

    // Show loader first
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';

    setTimeout(() => {
        hireVisible = !hireVisible; 

        if (hireVisible) {
            mainArticle.style.display = 'none';
            projectSection.style.display = 'none'
            aboutSection.style.display = 'none';
            hireSection.style.display = 'block';
            hireSection.scrollIntoView({behavior: "smooth"});
            hireMeBtn.textContent = "Back";
        } else {
            mainArticle.style.display = 'flex';
            aboutSection.style.display = 'flex';
            hireSection.style.display = 'none';
            mainArticle.scrollIntoView({behavior: "smooth"});
            hireMeBtn.textContent = "Hire Me";
        }

        // Hide loader after animation
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300); 
    }, 400);
});
