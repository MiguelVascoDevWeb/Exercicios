var nome = [];
var valor = [];
var valori = []
var quant = [];
var quanti = [];
var numeroInteiro;
var text;
var result;
var estado = 0;


function limparinput() {
    document.getElementById("meuinput").value = "";
}

function conversao(x, xi) {

    for (var i = 0; i < x.length; i++) {
        numeroInteiro = parseInt(x[i]);
        xi.push(numeroInteiro); 
    }
    return xi
    
}

function n() {

    nome = document.getElementById('meuinput').value.split(", ");
    limparinput();
    console.log("eu sou o nome " + nome)

}

function v() {

    valor = document.getElementById('meuinput').value.split(", ");
    limparinput();

    valori = conversao(valor, valori);
    console.log('eu sou o valor ' + valori)
    
}

function q() {

    quant = document.getElementById('meuinput').value.split(", ");
    limparinput();

    quanti = conversao(quant, quanti);
    console.log('Eu sou a quantidade ' + quanti)

}

function total() {

    try{
        if(isNaN(quant[0], quant[1], quant[2], valor[0], valor[1], valor[2])) throw "Valores inválidos"
    }

    catch (err) {
        alert(err)
    }

    document.getElementById('nome1').innerHTML = nome[0];
    document.getElementById('nome2').innerHTML = nome[1];
    document.getElementById('nome3').innerHTML = nome[2];

    document.getElementById('valor1').innerHTML = valori[0] * quanti[0];
    document.getElementById('valor2').innerHTML = valori[1] * quanti[1];
    document.getElementById('valor3').innerHTML = valori[2] * quanti[2];

    nome = []
    valor = []
    quant = []
    valori = []
    quanti = []

}
  
function exe() {
    if (estado === 0) {
        
        n();

        document.getElementById('text').innerHTML = 'Digite o valor de cada produto';
        estado = 1;

      } else if (estado === 1) {

        v();

        document.getElementById('text').innerHTML = 'Digite a quantidade de cada produto';
        estado = 2;

      }else if (estado === 2) {

        q();
        document.getElementById('text').innerHTML = 'Digite o nome de cada produto'
        estado = 0

        total();

      }
}
