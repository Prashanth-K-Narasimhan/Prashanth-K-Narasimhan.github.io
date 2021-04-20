/**
 * Music player helper 
 */
const musicHelper = (function () {
  let wrap = document.querySelector('#player');
  let button = wrap ? wrap.querySelector('button') : null;
  let audio = new Audio('https://cf-media.sndcdn.com/JIww42sYRuTW.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSkl3dzQyc1lSdVRXLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MTg4NDQ4ODR9fX1dfQ__&Signature=An7~Q9HqLQe92s6k9Cwreqt1214luWVuw3Xlgq0Q396HEuSrZqYecNoM5kjNqNPrgh0LwCVilVhH8-mNsUK~0KjjVM1weJLxjNHT13B9tyKPYuSGHd0tzYuxPlCfLH0k6MDkE~PekVVwJ1oHBW29iEtGogldAiAcgGkjPqgGp6y7f6LdRNU1PG9JM6tfziRWeq687P70~o71OoHzUGujYLYVrwWsq2fBfjRP97PLxIUYmh58RN59Wp7p~WMGhM6u1O9e0m4vmbW~Ax-I50MWiF2sUidDHBf3XOr8IGlFtPU8nPXsF5evdQVsaC~km6k2E28C3GmQZqvckyr7Zh9fLA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ');
  let step = 0.01;
  let active = false;
  let sto = null;

  let fadeIn = () => {
    audio.volume += 0.01;
    if (audio.volume >= 0.2) { audio.volume = 0.2; return; }
    sto = setTimeout(fadeIn, 100);
  };

  let fadeOut = () => {
    audio.volume -= 0.02;
    if (audio.volume <= 0.01) { audio.volume = 0; audio.pause(); return; }
    sto = setTimeout(fadeOut, 100);
  };

  let play = () => {
    if (sto) clearTimeout(sto);
    audio.currentTime = 22
    active = true;
    button.textContent = 'Stop music';
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
    if (active) { stop(); }
    else { play(); }
  });

  audio.preload = 'auto';
  audio.muted = false;
  audio.volume = 0;
  return { play, stop };
})();
