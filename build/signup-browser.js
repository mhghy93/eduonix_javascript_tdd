let username = document.getElementById('username');
let password = document.getElementById('password');
let signUpButton = document.getElementById('signup');

signUpButton.addEventListener('click', () => {
    checkUserName();
    checkUserPassword();
});

function checkUserName() {
    let alphabets = /^[a-zA-Z]+$/;
    let usernameValue = username.value;
    let str = 'Username';
    if (!usernameValue.match(alphabets)) {
        alert('Only alphabets are allowed in username field');
    }
    inputLength(usernameValue.length, str);
}

function checkUserPassword() {
    let numbers = /^[0-9]+$/;
    let passwordValue = password.value;
    let str = 'Password';
    if (!passwordValue.match(numbers)) {
        alert('Only numbers are allowed in password field');
    }
    inputLength(passwordValue.length, str);
}

function inputLength(inputLength, str) {
    if (inputLength > 10) {
        alert(str + ' cannot have more than 10 characters');
    }
}