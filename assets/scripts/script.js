/**
 * Music player helper 
 */
const musicHelper = (function () {
  let wrap = document.querySelector('#player');
  let button = wrap ? wrap.querySelector('button') : null;
  // let audio = new Audio('http://prashanth-k-narasimhan.github.io/assets/mp3/1.mp3');
  let audio = new Audio('http://raw.githubusercontent.com/Prashanth-K-Narasimhan/Prashanth-K-Narasimhan.github.io/master/assets/mp3/1.mp3');
  let step = 0.01;
  let active = false;
  let sto = null;

  let fadeIn = () => {
    audio.volume += 0.01;
    if (audio.volume >= 0.2) { audio.volume = 0.2; return; }
    sto = setTimeout(fadeIn, 6);
  };

  let fadeOut = () => {
    audio.volume -= 0.02;
    if (audio.volume <= 0.01) { audio.volume = 0; audio.pause(); return; }
    sto = setTimeout(fadeOut, 100);
  };

  let play = () => {
    if (sto) clearTimeout(sto);
    // audio.currentTime = 24
    audio.currentTime = 24
    active = true;
    button.textContent = 'Stop music';
    audio.loop = true;
    audio.play();
    fadeIn();
  };

  let stop = () => {
    if (sto) clearTimeout(sto);
    active = false;
    button.textContent = 'Play music';
    fadeOut();
  };

  button.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    if (active) {
      stop();
      $('#pepega').hide();
    }
    else {
      play();
      $('#pepega').show();
    }
  });

  audio.preload = 'auto';
  audio.muted = false;
  audio.volume = 0;

  return { play, stop };
})();

// Audio player functionality
const musicPlayer = (function() {
    const audio = new Audio('assets/audio/background-music.mp3');
    const button = document.querySelector('.play');
    const pepega = document.getElementById('pepega');
    let isPlaying = false;
    let fadeTimeout = null;

    function fadeIn() {
        audio.volume += 0.01;
        if (audio.volume >= 0.2) {
            audio.volume = 0.2;
            return;
        }
        fadeTimeout = setTimeout(fadeIn, 6);
    }

    function fadeOut() {
        audio.volume -= 0.02;
        if (audio.volume <= 0.01) {
            audio.volume = 0;
            audio.pause();
            return;
        }
        fadeTimeout = setTimeout(fadeOut, 100);
    }

    function togglePlay() {
        if (fadeTimeout) clearTimeout(fadeTimeout);
        
        if (isPlaying) {
            audio.pause();
            button.textContent = 'Play music';
            if (pepega) pepega.style.display = 'none';
        } else {
            audio.currentTime = 0;
            audio.play();
            button.textContent = 'Pause music';
            if (pepega) pepega.style.display = 'block';
            fadeIn();
        }
        isPlaying = !isPlaying;
    }

    // Initialize audio settings
    audio.preload = 'auto';
    audio.muted = false;
    audio.volume = 0;
    audio.loop = true;

    // Add event listener to button
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            togglePlay();
        });
    }

    return { togglePlay };
})();

// Initialize navigation and UI elements
document.addEventListener('DOMContentLoaded', function() {
    // Fix navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Fix social media links
    const socialLinks = document.querySelectorAll('.share-post a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.open(href, '_blank');
            }
        });
    });

    // Floating animation for the pepega image
    const pepega = document.getElementById('pepega');
    if (pepega) {
        pepega.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        pepega.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Fix back button in other pages
    const backLink = document.querySelector('a[href="../index.html"]');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = this.getAttribute('href');
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

