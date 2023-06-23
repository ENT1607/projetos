//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centraliza raquete
var velocidadeRaquete = 5;

//configurar a bola
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;                  //direção de bola em x (esquerda/direita)
var bolaDY = -2;                 //direção de bola em y (acima / abaixo)

var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(event){

    //se o valor = "direita" || ou valor = "setaDireita"
    if(event.key === "Right" || event.key === "ArrowRight"){
        setaDireita = true;//ativa variavel setaDireita

    //se o valor = "esquerda" || ou valor = "setaEsquerda"
    }else if(event.key === "Left" || event.key === "ArrowLeft"){
        setaEsquerda = true;//ativa variavel setaEsquerda
    }
}

function subirDaTecla(){

}

function desenharRaquete(){
    desenho.beginPath();    //inicia desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}


function desenhar(){
    desenho.clearRect(0 ,0 , canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();

    //se setaDireita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete;

    //se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas"
    }else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;  //anda para esquerda
    }

    requestAnimationFrame(desenhar) //atualizar tela de forma suave
}
desenhar(); //chama função desenhar