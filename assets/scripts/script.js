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
let audioPlayer = document.getElementById('audioPlayer');
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        document.querySelector('.play').textContent = 'Play music';
    } else {
        audioPlayer.play();
        document.querySelector('.play').textContent = 'Pause music';
    }
    isPlaying = !isPlaying;
}

// Floating animation for the pepega image
document.addEventListener('DOMContentLoaded', function() {
    const pepega = document.getElementById('pepega');
    if (pepega) {
        pepega.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        pepega.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

