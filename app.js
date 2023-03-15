const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const errorMsg = document.querySelector('#error-msg');
const goodMsg = document.querySelector('#good-msg');

let passwordValue = password.value;
let confirmPasswordValue = confirmPassword.value;

const checkPasswordMatch = (password, confirmPassword) => {
    return (password.value === confirmPassword.value);
}

const errorMsgStyle = (password, confirmPassword) => {
    let passwordMatch = checkPasswordMatch(password, confirmPassword);

    while (passwordMatch) {
        errorMsg.classList.toggle('hidden');
        passwordMatch.classList.toggle('hidden');
    }
}

password.addEventListener('input', () => {
    passwordValue = password.value;
    console.log(passwordValue);
})

confirmPassword.addEventListener('input', () => {
    confirmPasswordValue = confirmPassword.value;
    console.log(confirmPasswordValue);
})
