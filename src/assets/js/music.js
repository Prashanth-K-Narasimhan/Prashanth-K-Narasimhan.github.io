$(document).ready(function () {
  const audio = new Audio('http://raw.githubusercontent.com/Prashanth-K-Narasimhan/Prashanth-K-Narasimhan.github.io/master/src/assets/mp3/give_em_the_love.mp3');
  audio.loop = true;
  audio.volume = 0;
  audio.preload = 'auto';

  let isPlaying = false;
  const musicToggle = $('#musicToggle');
  const musicInfo = $('.music-info');  // Add this line
  let fadeInterval;

  // Fade in audio
  function fadeIn() {
      clearInterval(fadeInterval);
      fadeInterval = setInterval(() => {
          if (audio.volume < 0.2) {
              audio.volume = Math.min(0.2, audio.volume + 0.01);
          } else {
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  // Fade out audio
  function fadeOut() {
      clearInterval(fadeInterval);
      fadeInterval = setInterval(() => {
          if (audio.volume > 0) {
              audio.volume = Math.max(0, audio.volume - 0.01);
          } else {
              clearInterval(fadeInterval);
              audio.pause();
          }
      }, 50);
  }

  // Toggle music on icon click
  function togglePlay() {
      if (!isPlaying) {
          audio.play().then(() => {
              fadeIn();
              musicToggle.removeClass('fa-volume-off').addClass('fa-volume-up');
              // $('#pepega').show();
              musicInfo.show();  // Show marquee text
              isPlaying = true;
          }).catch(e => {
              console.warn('Autoplay blocked or failed:', e);
          });
      } else {
          fadeOut();
          musicToggle.removeClass('fa-volume-up').addClass('fa-volume-off');
          // $('#pepega').hide();
          musicInfo.hide();  // Hide marquee text
          isPlaying = false;
      }
  }

  // Initial state
  musicInfo.hide();  // Hide marquee text initially

  // Mute/unmute handler
  musicToggle.on('click', togglePlay);

  // First user interaction triggers music
  $(document).one('click', function () {
      if (!isPlaying) {
          togglePlay();
      }
  });
});
