function redirecionar() {
    window.location.href = "itens.html"; 
}

window.onload = function() {
    var elementos = document.getElementsByClassName("encontrou");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].onclick = redirecionar;
    }
};
