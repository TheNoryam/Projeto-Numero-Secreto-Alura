let listaNumerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTexto (tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function exibirMensagemInicial(){
    exibeTexto('h1', 'Jogo do número secreto');
    exibeTexto('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteNumero) + 1;
    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeNumerosSorteados == limiteNumero){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); 
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
 
exibirMensagemInicial();

function verificarChute(){
    
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute === numeroSecreto){
        exibeTexto('h1', 'Parabéns! Você acertou! O número secreto é ' + numeroSecreto);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = 'Você acertou o número secreto em ' + tentativas + ' ' + palavraTentativa;
        exibeTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibeTexto('h1', 'O número secreto é menor que ' + chute);
        }else{
            exibeTexto('h1', 'O número secreto é maior que ' + chute);
        }
        tentativas++;
        limparCampo();
    }   
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}