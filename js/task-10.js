function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// createBoxes(amount) {
// }

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes')
const buttonCreateEl = document.querySelector ('button[data-create]')


inputEl.addEventListener('change', onInputChange);

buttonCreateEl.addEventListener('click', createBoxes);

let x = 20;
let amount = 0;

function onInputChange (event) {
  amount = `${event.currentTarget.value}`
  }
  
function createBoxes (){
 
  for (let i = 0; i < amount ; i += 1) {

    let divBox = document.createElement('div');
    x += 10;
    divBox.style.width = `${x}px`;
    divBox.style.height = `${x}px`;
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxesEl.append(divBox)

  }
}
const buttonDestroyEl = document.querySelector ('button[data-destroy]')
buttonDestroyEl.addEventListener('click', destroyBoxes)
function destroyBoxes() {
  boxesEl.remove()
}

