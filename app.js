const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const errorMsg = document.querySelector('#error-msg');
const goodMsg = document.querySelector('#good-msg');

const checkPasswordMatch = (password, confirmPassword) => {
    return (password === confirmPassword);
}

const errorMsgStyle = (password, confirmPassword) => {
    let passwordMatch = checkPasswordMatch(password, confirmPassword);

    while (passwordMatch) {
        errorMsg.classList.toggle('hidden');
        passwordMatch.classList.toggle('hidden');
    }
}

password.addEventListener('focus', () => {
    console.log('Focusing');
})

