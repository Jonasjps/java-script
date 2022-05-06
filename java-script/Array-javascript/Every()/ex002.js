,//Verifica se todos são maiores de idade.

const lista = [
    { id: 12, nome: 'Frederico', Idade: 18 },
    { id: 47, nome: 'Francisca', Idade: 19 },
    { id: 77, nome: 'Ramon', Idade: 48 },
    { id: 85, nome: 'Jonas', Idade: 30 }
];

const resultado = lista.every(item => item.Idade >= 18);

console.log(resultado);

// resposta = true