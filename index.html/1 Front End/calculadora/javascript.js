var num1;
var num2;
var total;

function converterParaNumero(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}

function entrada() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    //converte o texto para números
    converterParaNumero();
    total = document.getElementById("resultado")
}

function somar() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //converte o texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //pega a div que vai exibir o resultado
    var total = document.getElementById("resultado");
    //escreve nessa div o resultaddo num1+num2
    total.innerHTML = num1 + num2;
}

function subtrair() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //converte o texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //pega a div que vai exibir o resultado
    var total = document.getElementById("resultado");
    //escreve nessa div o resultaddo num1+num2
    total.innerHTML = num1 - num2;
}

function multiplicar() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //converte o texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //pega a div que vai exibir o resultado
    var total = document.getElementById("resultado");
    //escreve nessa div o resultaddo num1+num2
    total.innerHTML = num1 * num2;
}

function dividir() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    //converte o texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //pega a div que vai exibir o resultado
    var total = document.getElementById("resultado");
    //escreve nessa div o resultaddo num1+num2
    total.innerHTML = num1 / num2;
}

function limpar() {
    var total = document.getElementById("resultado");
    total.innerHTML = " NaN ";
}