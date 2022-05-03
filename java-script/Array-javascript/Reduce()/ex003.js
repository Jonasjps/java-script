/*TRANFORMANDO UM ARRAY DE OBJETOS EM UMA LISTA DE STRINGS.*/

const cart = [
    { Pais: 'Russia', Lancamento: 32 },
    { Pais: 'US', Lancamento: 23 },
    { Pais: 'China', Lancamento: 16 },
    { Pais: 'Europa', Lancamento: 7 },
    { Pais: 'India', Lancamento: 4 },
    { Pais: 'Japão', Lancamento: 3}
];

const productList = cart.reduce((acumulador, {pais}) => `${acumulador} ${pais}`, '');

console.log(productList);