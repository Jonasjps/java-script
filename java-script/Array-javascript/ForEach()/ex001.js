let listadedepessoasAprovadas = [
    'ada.lovelace@example.com',
    'maria.lovelace@example.com',
    'margaret.lovelace@example.com',
    'alan.lovelace@example.com'
];

const enviarEmail = ( email ) => {
    console.log(`Email para ${email} foi enviado com sucesso!`);
};

listadedepessoasAprovadas.forEach((item,posicao,array) => { // lembrando que somente o primeiro parâmetro é obrigatorio, ou outros foram colocados apenas para fins de exemplo caso necessario.
    enviarEmail(item)
    console.log(`Sua posição é a de ${posicao}`)
    console.log(`A quantidade de pessoas no proceso seletivo é: ${array.length}`)  
});

console.log(listadedepessoasAprovadas);     