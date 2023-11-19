var num;
var result;

function erro(){
    try {
        if (isNaN(num)) throw 'Por favor, digite um número'
    }catch (err){
        alert(err)
    }
}

function convertf() {

    num = parseInt(document.getElementById('num').value);
    result = parseFloat((num - 32)/1.8);
    
    document.getElementById('resultado').innerHTML = `${num}°F é igual a ${result}°C`;
    erro();
}

function convertc() {

    num = parseInt(document.getElementById('num').value);
    result = parseFloat(num * 1.8 + 32);
    
    document.getElementById('resultado').innerHTML = `${num}°C é igual a ${result}°F`;
    erro();
}