function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');



btnChangeColorEl.addEventListener('click', changeColorFunction);
function changeColorFunction() {
  getRandomHexColor();
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorValueEl.textContent = `${getRandomHexColor()}`;
}