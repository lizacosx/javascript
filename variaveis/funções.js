function conta(num1, num2, tipo) {
    if (tipo == 'somar') {
        return num1 + num2;
    } else if (tipo == 'multiplicar') {
        return num1 * num2;
    } else if (tipo == 'dividir') {
        return num1 / num2;
    } else {
        return num1 - num2;
    }
}

// console.log(conta(5, 2, 'dividir'))

function conta2(num1, num2, tipo){
    if (tipo != 'somar' && tipo == 'multiplicar') {
        return console.log(num1 + num2);
    }

    return console.log('deu erro 1')
}

// conta2(5, 2)

// console.log(conta2(5, 2))

const num1 = prompt('Fale um numero ?');
const num2 = prompt('Fale outro numero ?');
const qualtipo = prompt('Qual o tipo (somar, multiplicar, dividir) ?');

const resultado = conta(num1, num2, qualtipo);

alert(`Sua conta foi ${resultado} e o tipo escolhido foi ${qualtipo}`);
