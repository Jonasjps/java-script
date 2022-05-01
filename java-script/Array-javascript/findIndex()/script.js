const  numeros = [10, 6, 8, 19, 18, 20];
const elementIndex = numeros.findIndex(checkNumber);
function checkNumber (element, index, array) {
    return element === 10;
}
console.log(elementIndex)

