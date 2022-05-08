const  numeros = [10, 6, 8, 19, 18, 20];
function checkNumber (element, index, array) {
    return element === 10;
}

const elementIndex = numeros.findIndex(checkNumber);

console.log(elementIndex)

// resposta = 0