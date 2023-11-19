function pares(){

    let num = parseInt(document.getElementById('num').value);

    try{
        if(isNaN(num)) throw 'Por favor, digite um número'
    }catch(err){
        alert(err)
    }

    var lista = [];
    var soma = 0;

    for(let i = 0; i <= num; i++)
    {
        if(i%2 == 0)
        {
            lista.push(i);
            soma += i ;
        }
    }

    document.getElementById('lista').innerHTML = `Estes são os números pares presentes no intervalo de 0 a ${num}: ${lista}`;
    document.getElementById('resultado').innerHTML = 'Esta é a soma desses valores: ' + soma;
}

