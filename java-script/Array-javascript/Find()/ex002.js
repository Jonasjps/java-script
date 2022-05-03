
// ENCONTRANDO UM OBJETO EM UM ARRAY POR UMA DE SUAS PROPRIEDADES.

const iventario = [
    {Nome: 'Banana' , Quantidade: 5},
    {Nome: 'Maca' , Quantidade: 2},
    {Nome: 'Pera' , Quantidade: 1}
];

const resultado = iventario.find(fruta => fruta.Nome === 'Maca');

console.log(resultado);

//resposta = { Nome: 'Maca', Quantidade: 2 }