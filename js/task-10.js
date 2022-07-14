function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// createBoxes(amount) {
// }

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes')
const buttonCreateEl = document.querySelector ('button[data-create]')


inputEl.addEventListener('change', onInputChange);

buttonCreateEl.addEventListener('click', onButtonCreateChange);

let x = 0;
let number = 0;

function onInputChange (event) {
  number = `${event.currentTarget.value}`
  console.log(number)
  }
  
function onButtonCreateChange (){
 
  for (let i = 0; i < number ; i += 1) {

    let divBox = document.createElement('div');
    x += 10;
    divBox.style.width = `${x}px`;
    divBox.style.height = `${x}px`;
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxesEl.append(divBox)

  }
}





 



// console.log(divBox)