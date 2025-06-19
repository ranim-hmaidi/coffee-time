const logreBox =document.querySelector('.logreg-box')
const loginLink =document.querySelector('.login-box')
const registerLink =document.querySelector('.register-link')

registerLink.addEventListener('click',() => {
    logreBox.classList.add('active');
})