'use strict';

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const hour = now.getHours();
  const min = now.getMinutes();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const hoursDegrees = (12 / 12) * 360 + 90;
  const minDegrees = (360 / 60) * min + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
