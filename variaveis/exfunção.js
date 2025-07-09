// escreva uma função que recebe 2 numeros e retorne o valor maior dele 
function name(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }

    // if (num1 > num2) return num1

    // return num2

    // return num1 > num2 ? num1 : num2;
}

// console.log(name(1,2));

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).

function ePaisagem(largura, altura) {
    if (largura > altura) {
        return 'Está em modo Paisagem'
    } else {
        return 'Está condição não é valida'
    }
}

// console.log(ePaisagem(1920, 1080))


// Escreva uma funcao q recebe o valor de 1000 se for maior, o usuario é um usuario vip, se for menor ele é um usuario normal
// se ele tiver valor maior ou igual a 900 ele é um usuario premium, se for menor ele continua sendo um usuario normal

function verificarUsuario(valor) {
    // if (valor >= 1000) {
    //     return 'Usuario vip';
    // } else if (valor >= 900) {
    //     return 'Usuario premium'
    // } else {
    //     return 'Usuario normal'
    // } 
 
    // if (valor >= 1000) {
    //     return 'Usuario vip';
    // } 
    
    // if (valor >= 900) {
    //     return 'Usuario premium'
    // } 

    // return 'Usuario normal'

    // if (valor >= 900) {
    //     if (valor >= 1000) {
    //         return 'Usuario vip';
    //     } else {
    //         return 'Usuario premium'
    //     } 
    // } 

    // return 'Usuario normal'

    return valor >= 1000 ? 'Usuario vip' : (valor >= 900 ? 'Usuario premium' : 'Usuario normal') ;
}

console.log(verificarUsuario(500))
