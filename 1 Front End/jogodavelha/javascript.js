var jogador = "x";

function jogar(celula){
    //alert("funcionou!");

    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador = "o";
            celula.style.background = 'white';
        }else{
            jogador = "x";
            celula.style.background = " rgb(107, 113, 119)";
        }
    }


}

function reiniciar(){
    window.location.reload();
}

const nomes = ['eduardo', "davi", "guilherme", "karolayne", "rose", 'vera', "pedro", 'creuza', "jessica", "duda", 'claudio', ];

function gerarBatalha(){
const nome1 = nomes[Math.floor(Math.random() * nomes.length)];
const nome2 = nomes[Math.floor(Math.random() * nomes.length)];

while(nome1 === nome2){
    gerarBatalha();
}

document.getElementById('jogador1').textContent = nome1;
document.getElementById('jogador2').textContent = nome2;

}

function adicionar() {
    var nome = document.getElementById("nome").value;
    nomes.push(nome)

    listar()

}

function listar(){
    var listagem = document.getElementById("lista");
    listagem.innerHTML = "";                        //limpa a lista em tela

    for(var i = 0; i < nomes.length; i++){         //percorre os itens da lista

        var item = document.createElement("li");   //cria elemento <li> para o HTML
        var nomeItem = nomes[i]                    //guarda na variável NomeItem o nome especifico da lista
        item.innerHTML = nomeItem;                 //colocar valor dentro do <li>
        listagem.appendChild(item);                //adiciona o <li> na lista do html, dentro do <ul>

    }
}    