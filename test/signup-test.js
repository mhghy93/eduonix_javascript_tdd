var assert = require('chai').assert;
var SignUp = require('../build/signup.js');

var alphabetInput = 'abcdefghijklmn';
var numberInput = '123456789002334';

describe("SignUp", function() {
    before(function() {
        this.signup = new SignUp();
    });

    after(function() {
        delete this.signup;
    });

    it("Only alphabets allowed", function() {
        assert.isNotFalse(this.signup.checkUserName(alphabetInput), 'Numbers not allowed in this field');
    });

    it("Only numbers allowed", function() {
        assert.isNotFalse(this.signup.checkUserPassword(numberInput), 'Alphabets not allowed in this field');
    });

    it("UserName can have a maximum of 10 characters", function() {
        assert.isBelow(this.signup.inputLength(alphabetInput), 11, 'UserName has more than 10 characters');
    });

    it("Password can have a maximum of 10 characters", function() {
        assert.isBelow(this.signup.inputLength(numberInput), 11, 'Password has more than 10 characters');
    });
});