var a = prompt ('Введите первое число')
var b = prompt ('Введите второе число')


function alfa (a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Введите число!!!')
        return;
    }
    console.log(Math.min(a,b))
}
alfa (a,b)



// 2 part
const word = prompt("Что-нибудь напишите, пожалуйста");
function returnFunction(word) {
    console.log(`Длина строки равна ${word.length}`)
}
returnFunction(word)


// 3 part
function calculator() {
    number1 = prompt('Введите первое число')
    operation = prompt('Выберите действие\n+\n-\n/\n*')
    number2 = prompt('Введите второе число')

    switch (operation) {
        case'+':
            alert(number1 + number2)
            break;
        case'-':
            alert(number1 - number2)
            break;
        case'/':
            if (number2 === '0') {
                alert('На ноль делить нельзя')
            } else {
                alert(number1 / number2)
            }
            break;
        case'*':
            alert(number1 * number2)
            break;

        default: ('Введите только числа')
    }
}

calculator()