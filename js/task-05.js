const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');


inputElement.addEventListener('input', onInputChange);
function onInputChange (event) {
    outputElement.textContent = event.currentTarget.value
    }
