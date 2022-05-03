const pessoas = [
    { id : 5, nome: 'Angelica' , idade: 18, Estado: 'Pernambuco' },
    { id: 81, nome: 'Thales', idade: 19, Estado: 'São paulo' },
    { id: 47, nome: 'Ana Carolina', idade: 18, Estado: 'Alagos' },
    { id: 87, nome: 'Felipe', idade: 18, Estado: 'Minas Gerais' },
    { id: 9, nome: 'Gabriel', idade: 20, Estado: 'São Paulo' },
    { id: 73, nome: 'Aline', idade: 19, Estado: 'Brasilia' }
];

const FrenquenciadeIdade = pessoas.reduce((acumulador, {idade}) => {
    acumulador[idade] = acumulador[idade] + 1 || 1

    return acumulador
}, {})

console.log(FrenquenciadeIdade)

//resposta = { '18': 3, '19': 2, '20': 1 }