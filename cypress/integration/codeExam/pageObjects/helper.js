/// <reference types="Cypress" />

class helper {

    getRandomAlphaNumString(len) {
        return generateAlphaNumString(len);
    }

    getRandomString(len) {
        return generateString(len);
    }

    getRandomEmail(len) {
        return generateString(len); + "@fake.net";
    }

    getRandomPhone() {
        return generatePhone();
    }


}

function generateAlphaNumString(len) {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function generateString(len) {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

}

function generatePhone() {

    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

}



module.exports = new helper();


