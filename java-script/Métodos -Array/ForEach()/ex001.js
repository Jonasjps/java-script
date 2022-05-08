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

/*
                        RESPOSTA
Email para ada.lovelace@example.com foi enviado com sucesso!
Sua posição é a de 0
A quantidade de pessoas no proceso seletivo é: 4
Email para maria.lovelace@example.com foi enviado com sucesso!
Sua posição é a de 1
A quantidade de pessoas no proceso seletivo é: 4
Email para margaret.lovelace@example.com foi enviado com sucesso!
Sua posição é a de 2
A quantidade de pessoas no proceso seletivo é: 4
Email para alan.lovelace@example.com foi enviado com sucesso!
Sua posição é a de 3
A quantidade de pessoas no proceso seletivo é: 4 

*/