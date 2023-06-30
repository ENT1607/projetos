//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 70;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centraliza raquete
var velocidadeRaquete = 7;

//configurar a bola
var bolaRadius = 10;

var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;                  //direção de bola em x (esquerda/direita)
var bolaDY = -2;                 //direção de bola em y (acima / abaixo)

var tijolosPorLinha = 3 ; //3
var tijolosPorColuna = 6; //6
var tijoloLargura = 80; //75
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com os tijolos

//dedicado apena a inicialização dos tijolos
for(var coluna=0; coluna< tijolosPorColuna; coluna++ ){
    tijolos[coluna] = [] //0 1 2 3 4 5

    for(var linha=0; linha < tijolosPorLinha; linha ++){

        tijolos[coluna][linha] = {x:0, y:0, ativo:1 }
        //x é a posição esquerda/direita no canva
        //y é a posição acima/abaixo no canva
        //ativo, determina se o tijolo aparece ou não, 1 ou 0

    }
}



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

function subirDaTecla(tecla){
    //se o valor = "direita" || ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
    setaDireita = false;

    //se o valor = "esquerda" || ou valor = "setaEsquerda"
    }else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = false;
    }
}

function desenharRaquete(){
    desenho.beginPath();    //inicia desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}

function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "white";
    desenho.fill();
    desenho.closePath();
}

function desenharTijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha ++){

            if(tijolos[coluna][linha].ativo == 1){ //verifica se tijolo está ativo para desenha-lo

                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento)+ espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento)+ espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "white";
                desenho.fill();
                desenho.closePath();
            }
        }
    }
}

function detectarColisao(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha <tijolosPorLinha; linha++){

            var tijolo = tijolos[coluna][linha];

            if(tijolo.ativo === 1){

                if(bolaX > tijolo.x
                     && bolaX < tijolo.x + tijoloLargura 
                     && bolaY > tijolo.y
                     && bolaY < tijolo.y + tijoloAltura){
                         bolaDY = -bolaDY;
                         tijolo.ativo = 0;
                     }

            }

        }
    }
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    //analisar colisao eixo X, colisao canto direita/esquerdo
    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = -bolaDX;
    }
    //analisa colisao com parte de cima
    if(bolaY + bolaDY < bolaRadius){

        bolaDY = -bolaDY; //inverte colisao ao bater em cima

    } else if(bolaY + bolaDY > canvas.height - bolaRadius){

        //se for maior que o começo da raquete e menor que o final da raquete
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;           //inverte direção
        }else{

            document.location.reload(); //reinicia
        }
    }

    //se setaDireita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete;

    //se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas"
    }else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;  //anda para esquerda
    }

    bolaX = bolaX + bolaDX; //faz a bola andar para direita
    bolaY = bolaY + bolaDY; //faz a bola andar para cima/baixo
    requestAnimationFrame(desenhar) //atualizar tela de forma suave
}
desenhar(); //chama função desenhar