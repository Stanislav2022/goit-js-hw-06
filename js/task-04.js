const reduceItsValue = document.querySelector('[data-action="decrement"]');
const increaseItsValue = document.querySelector('[data-action="increment"]');
const actionCounter = document.querySelector('#value');

let counterValue = 0;
actionCounter.textContent = `${counterValue}`;

increaseItsValue.addEventListener('click', () => {
    counterValue += 1
    actionCounter.textContent = `${counterValue}`;
})
reduceItsValue.addEventListener('click', () => {
    if (counterValue > 0){
        counterValue -= 1
        actionCounter.textContent = `${counterValue}`; 
    }
    
})