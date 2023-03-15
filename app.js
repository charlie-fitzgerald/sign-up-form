const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const errorMsg = document.querySelector('#error-msg');
const goodMsg = document.querySelector('#good-msg');

let passwordValue = '';
let confirmPasswordValue = '';

const matchPasswordStyle = (passwordValue, confirmPasswordValue) => {    
    
    if (passwordValue === confirmPasswordValue) {
        errorMsg.classList.toggle('hidden');
        goodMsg.classList.toggle('hidden');
        password.classList.toggle('green');
        password.classList.toggle('error');
        confirmPassword.classList.toggle('green');
        confirmPassword.classList.toggle('error');
    } else {
        errorMsg.classList.remove('hidden');
        goodMsg.classList.add('hidden');
        password.classList.add('error');
        password.classList.remove('green');
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('green');
    }

    if (!passwordValue || !confirmPasswordValue) {
        errorMsg.classList.remove('hidden');
        goodMsg.classList.add('hidden');
        password.classList.add('error');
        password.classList.remove('green');
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('green')
    }
}

password.addEventListener('input', () => {
    passwordValue = password.value;
    matchPasswordStyle(passwordValue, confirmPasswordValue);
})

confirmPassword.addEventListener('input', () => {
    confirmPasswordValue = confirmPassword.value;
    matchPasswordStyle(passwordValue, confirmPasswordValue);
})
