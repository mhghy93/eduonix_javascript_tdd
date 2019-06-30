class SignUp {
    constructor() {

    }

    checkUserName(username) {
        let alphabets = /^[a-zA-Z]+$/;
        if (!username.match(alphabets)) {
            return false;
        } else {
            return true;
        }
    }

    checkUserPassword(password) {
        let numbers = /^[0-9]+$/;
        if (!password.match(numbers)) {
            return false;
        } else {
            return true;
        }
    }

    inputLength(inputValue) {
        return inputValue.length;
    }
}

module.exports = SignUp;
