window.addEventListener("load", carregada);
function carregada(evento) {
    var linkIndex = document.querySelectorAll('a');
    for (let index = 0; index < linkIndex.length; index++) {
        const element = linkIndex[index];
        element.addEventListener("mouseenter", function (e) {
            element.style.fontWeight = 'bold';
        })
        element.addEventListener("mouseleave", function (e) {
            element.style.fontWeight = 'normal';
        })

    }
}

