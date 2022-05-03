const foguetes = [
    { Pais: 'Russia', Lançamentos: 32 },
    { Pais: 'US', Lançamentos: 23 },
    { Pais: 'China', Lançamentos: 16 },
    { Pais: 'Europa', Lançamentos: 7 },
    { Pais: 'India', Lançamentos: 4 },
    { Pais: 'Japão', Lançamentos: 3 }
];

const totaldelancamentos = foguetes.reduce((prevVal, elem) => prevVal + elem.Lançamentos, 0);

console.log(totaldelancamentos);