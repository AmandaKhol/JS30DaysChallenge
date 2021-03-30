'use strict';

const keys = document.querySelectorAll('.key');

function playSound(ev) {
  const keyUp = ev.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyUp}"]`);
  const key = document.querySelector(`div[data-key="${keyUp}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
