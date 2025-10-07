const wrapperEl = document.querySelector(".wrapper");
const sliderEl = document.querySelector('#slider');
const sliderValueEl = document.querySelector('#slider-value');
const bar = document.querySelector('.bar');

sliderEl.addEventListener('input', (event) => {
  const rotation = event.target.value;
  sliderValueEl.textContent = `${rotation}deg`;
});