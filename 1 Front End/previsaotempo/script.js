    async function buscarClima(){
        var cidade = document.getElementById("cidade").value   
        var chave = '7ab546aa850c80637013bfe95309f804';
        var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';
   
try{
    var resposta = await fetch(url);
    var dado = await resposta.json();

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = 
    '<h2> Previsão do Tempo Para'+ dado.name +'</h2>'
    +'<p> Temperatura: ' + dado.main.temp + ' C° </p>'
    +'<p> Temperatura máxima: '+ dado.main.temp_max +' C° </p>'
    +'<p> Temperatura mínima: '+ dado.main.temp_min +' C° </p>'
    +'<p> Temperatura Ambiente: '+ dado.main.feels_like +' C° </p>'
    +'<p> Humidade: '+ dado.main.humidity +' % </p>'
    +'<p> Velocidade do vento: '+ dado.main.speed +' km/h </p>'
    +'<p> Nuvens: '+ dado.clouds.all+' % </p>'
    +'<p> Condição: '+ dado.weather[0].description+'</p>'
    +'<img class="img" src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">';



}catch(error){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>Erro ao buscar o clima: "+error+"</p>";

}
}