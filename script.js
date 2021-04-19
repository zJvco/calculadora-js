var firstDigit = '';
var secondDigit = '';
var currentOperator = '';
var isSecondDigit = false;

const screen = document.querySelector('.txtScreen');

function insertNumber(num) {
    if (screen.innerText.length < 15) {
        if (currentOperator.length > 0) {
            isSecondDigit = true;
            secondDigit += num;

            if (secondDigit.length <= 0) {
                clearScreen();
            }

            screen.innerText += num;
        }
        else {
            firstDigit += num;
            screen.innerText += num;
        }
    }
    else return
}

function insertOperator(operator) {
    currentOperator = operator;

    clearScreen();
}

function insertReset() {
    firstDigit = '';
    secondDigit = '';
    currentOperator = '';
    isSecondDigit = false;

    clearScreen();
}

function clearScreen() {
    screen.innerText = '';
}

function insertResult() {
    if (isSecondDigit) {
        const strToNumberFisrtDigit = Number(firstDigit);
        const strToNumberSecondDigit = Number(secondDigit);

        let calc = null;

        switch (currentOperator) {
            case '+':
                calc = strToNumberFisrtDigit + strToNumberSecondDigit;
                break;
            case '-':
                calc = strToNumberFisrtDigit - strToNumberSecondDigit;
                break;
            case '*':
                calc = strToNumberFisrtDigit * strToNumberSecondDigit;
                break;
            case '/':
                calc = strToNumberFisrtDigit / strToNumberSecondDigit;
                break;
            case '%':
                calc = strToNumberFisrtDigit % strToNumberSecondDigit;
                break;
            default:
                window.alert('Operador Inválido');
        }

        screen.innerText = calc;
    }
    else return
}