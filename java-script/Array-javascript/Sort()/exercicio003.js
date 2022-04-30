let itens = [
    {Nome: 'Virgina', idade: 29},
    {Nome: 'Jonas', idade: 27},
    {Nome: 'Maria', idade: 35},
    {Nome: 'Marley', idade: 3}
    
];

itens.sort((a,b) => a.Nome.localeCompare(b.Nome))

console.log(itens)

