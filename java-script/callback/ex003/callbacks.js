function exebirPrimeiraMensagem (mensagem, callback) {
    console.log(mensagem);
    callback();
} 

function exibirSegundoaMensagem() {
    console.log('Esta é segunda mensagem!')
}
exebirPrimeiraMensagem('Esta é a primeira mensagem do exemplo!' , exibirSegundoaMensagem)
