let selectlinguagem
let optionvaluelinguagem
let numeropalavras
let valorportugues
let selectlinguagemorigem

function atualizoulinguagem(){

    selectlinguagem =  document.querySelector('#linguagem');
    optionvaluelinguagem = selectlinguagem.options[selectlinguagem.selectedIndex].text;
    console.log(optionvaluelinguagem)

    return optionvaluelinguagem
}

function atualizoulinguagemorigem(){

    selectlinguagemorigem =  document.querySelector('#linguagemorigem');
    optionvaluelinguagemorigem = selectlinguagemorigem.options[selectlinguagemorigem.selectedIndex].text;
    console.log(optionvaluelinguagemorigem)

    return optionvaluelinguagemorigem
}

function numerodepalavras(){
    numeropalavras =  document.querySelector('#npalavras').value;
    console.log(numeropalavras)
    return numeropalavras
}
function calcularvalor(){
if(optionvaluelinguagem === "Português" ){

    valorportugues= numeropalavras*0.25
    console.log(valorportugues)
    document.getElementById('calculo'). innerHTML = valorportugues + "R$";
}
}
function escolheulinguagem(){
    console.log("deucerto")
}
