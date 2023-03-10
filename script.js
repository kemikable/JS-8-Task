//2.8.1


function calc(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calc(3, 2, '+'));
console.log(calc(3, 2, '-'));
console.log(calc(3, 2, '*'));
console.log(Math.round(calc(3, 2, '/')));



//2.8.2

function isLucky(number) {




    let numberToString = String(number);
    let firstHalfSum = +(numberToString[0]) + +(numberToString[1]) + +(numberToString[2]);
    let secondHalfSum = +(numberToString[3]) + +(numberToString[4]) + +(numberToString[5]);
    return firstHalfSum === secondHalfSum;
}

console.log(isLucky(234801));
console.log(isLucky(123456));

//2.8.3
// function capitalizeWords(string) {
//     const words = string.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }
// console.log(capitalizeWords('Hello my name is Harry'));

//2.8.4


function isEven(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(6));
console.log(isEven(9));

//2.8.5

function fourth(a) {
    console.log(a ** 4);
}
fourth(2);
fourth(3);
//2.8.6

function isValidNumber(phoneNumber) {
    if (phoneNumber.length !== 12 || phoneNumber.split('')[0] !== "+" || phoneNumber.split('')[1] !== "1") {
        return false;
    }
    return true;
}

console.log(isValidNumber("+10502091903"));
console.log(isValidNumber("+994502091903"));
console.log(isValidNumber("994501231212"));

//2.8.7
