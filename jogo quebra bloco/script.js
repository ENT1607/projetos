//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 70; //70
var raqueteX = (canvas.width - raqueteLargura) / 2; //centraliza raquete
var velocidadeRaquete = 9; //7

//configurar a bola
var bolaRadius = 10;

var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 4;                  //direção de bola em x (esquerda/direita)
var bolaDY = -4;                 //direção de bola em y (acima / abaixo)

var tijolosPorLinha = 3 ; //3
var tijolosPorColuna = 6; //6
var tijoloLargura = 75; //75
var tijoloAltura = 10;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com os tijolos

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
var pontuacao = 0;

function facil(){
    raqueteLargura = 100;
    tijolosPorLinha = 2;
    tijolosPorColuna = 5;
    tijoloLargura = 90;
    tijoloAltura = 40;
    bolaRadius = 20;
    bolaDX = 2;
    bolaDY = -1;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 40;
    iniciarTijolos();
}

function medio(){
    raqueteLargura = 80;
    tijolosPorLinha = 4;
    tijolosPorColuna = 7;
    tijoloLargura = 65;
    tijoloAltura = 30;
    bolaRadius = 15;
    bolaDX = 3;
    bolaDY = -2;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 40;
    iniciarTijolos();
}

function dificil(){
    raqueteLargura = 70;
    tijolosPorLinha = 6;
    tijolosPorColuna = 11;
    tijoloLargura = 40;
    tijoloAltura = 20;
    bolaRadius = 10;
    bolaDX = 4;
    bolaDY = -3;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 40;
    iniciarTijolos();
}

function impossivel(){
    raqueteLargura = 60;
    tijolosPorLinha = 11;
    tijolosPorColuna = 12;
    tijoloLargura = 35;
    tijoloAltura = 15;
    bolaRadius = 5;
    bolaDX = 3;
    bolaDY = -3;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 40;
    iniciarTijolos();
}


function iniciarTijolos(){
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
}
iniciarTijolos();




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
        for(var linha=0; linha < tijolosPorLinha; linha++){

            var tijolo = tijolos[coluna][linha];

            if(tijolo.ativo === 1){

                if(bolaX + bolaRadius > tijolo.x
                     && bolaX - bolaRadius < tijolo.x + tijoloLargura 
                     && bolaY + bolaRadius > tijolo.y
                     && bolaY - bolaRadius < tijolo.y + tijoloAltura){
                         bolaDY = -bolaDY;
                         tijolo.ativo = 0;
                         tela = document.getElementById("ponto");
                         pontuacao = pontuacao + 10;
                         tela.innerHTML = "Score: " + pontuacao;
                         gerarEfeitoSonoro('mario.mp3');

                         if(pontuacao === totalPontuacao){
                            vitoria();
                         }
                 }
                 
            }

        }
    }
}

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
}

function reiniciar(){
    document.location.reload();
}

//exibir na tela mensagem de vitória
function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
}

function gerarEfeitoSonoro(som){
    //cria contexto de audio
    var contexto = new (window.AudioContext || window.webkitAudioContext)();
    //fazer uma requisição para carregar o arquivo de som
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som,true);
    requisicao.responseType = 'arraybuffer'; //armazenar na memoria

    requisicao.onload = function(){
        //decodificar o arquivo de som
        contexto.decodeAudioData(requisicao.response, function( buffer) {
             //reprodução do som no navegador
             var fonte = contexto.createBufferSource();
             fonte.buffer = buffer;
             //conectar a saida de som
             fonte.connect(contexto.destination);
             fonte.start(0); //executa som
         });
    }
    requisicao.send();
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

    } else if(bolaY + bolaRadius + bolaDY > canvas.height - bolaRadius){

        //se for maior que o começo da raquete e menor que o final da raquete
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;           //inverte direção
        }else{
           
            gameover(); //reinicia
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