const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const container = document.querySelector('.container');

signupBtn.addEventListener('click', () => {
  container.classList.add('signing-up');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('signing-up');
});
