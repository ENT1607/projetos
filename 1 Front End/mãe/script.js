var frase = "Mãe, você não se curva diante das dificuldades, mas as vence! Seu amor me encanta, sua força me orgulha e sou realmente privilegiado por tê-la em minha vida. Feliz Dia das Mães!";

function gerarFrase(){
    var texto = document.getElementById("frase");
    texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}