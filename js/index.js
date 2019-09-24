window.addEventListener("load",carregada); 
function carregada(evento){
    alert("Página carregada completamente")

    var btn = document.getElementById("botaoIndex");
    btn.addEventListener("click",executaClick);    
}


function executaClick(evento){
    var paragrafo = document.getElementById("articleLorem");
    paragrafo.remove();
    
    var botao = document.getElementById("botaoIndex");
    botao.remove();

    document.body.style.backgroundColor = "#FFFFFF";   
}
