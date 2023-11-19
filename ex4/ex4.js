var km;
var l;
var kp;
var estado = 0;

function limparinput() {
    document.getElementById("input").value = "";
}

function kmf(){

    kp = parseFloat(document.getElementById("input").value);

    document.getElementById('text').innerHTML = "Digite quantos quilometros serão percorridos com o carro:";
    limparinput();  
    
}

function litrosgastos(){

    km = parseFloat(document.getElementById('input').value);

    l = km/kp;

    limparinput();
    document.getElementById('resultado').innerHTML = `Serão gastos ${l} litros na viagem.`;
    document.getElementById('text').innerHTML = "Digite quantos Km/Litro o carro percorre:";

    kp = 0;
    km = 0;
    l = 0;
    

}

function exe() {
    if (estado === 0) {
        
        kmf();
        estado = 1;

      }else if (estado === 1) {

        litrosgastos();
        estado = 0

      }
}