var endereço = {
    rua: "AV DO CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: 'cuiaba',
    uf: 'MT',
    cidade : {
        maranhao: 'São Luiz',
        ceara: 'Fortalza',
        bahia: 'Salvador',
    },
    nomes:['Jonas', 'Virginia', 'Maria', 'João']
}

console.log(endereço.nomes.push('Josue'));
console.log(endereço.nomes.unshift('Marley'))
console.log(endereço)
