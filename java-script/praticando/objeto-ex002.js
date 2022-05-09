//ARRAY DE OBJETOS

let onibus = [
    { nome: 'Marechal', quantidade: 10 },
    { nome: 'São jose', quantidade: 5 },
    { nome: 'Urbi', quantidade: 15}
];

onibus.forEach( (  onibus) => {
    alert(onibus.nome + ' tem ' + onibus.quantidade + ' Onibus.' )
})