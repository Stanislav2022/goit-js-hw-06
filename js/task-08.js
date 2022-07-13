const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault()
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
    const formData = {email, password}
    console.log(formData)
   



    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
      }
    
    event.currentTarget.reset();
}
