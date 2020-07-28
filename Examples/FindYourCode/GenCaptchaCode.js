//Ex - 產生Captcha Code
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let charsPattern = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
let charLength = charsPattern.length

let captcha = [];
//從charsPattern中亂數取值
captcha.push(charsPattern[getRandom(0, 70)])
captcha.push(charsPattern[getRandom(0, 70)])
captcha.push(charsPattern[getRandom(0, 70)])
captcha.push(charsPattern[getRandom(0, 70)])
captcha.push(charsPattern[getRandom(0, 70)])
captcha.push(charsPattern[getRandom(0, 70)])

//以上請用for迴圈改造

console.log(captcha.join(''));
