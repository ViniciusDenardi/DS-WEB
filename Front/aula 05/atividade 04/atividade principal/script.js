var area = document.getElementById("area")
var mensagem = document.getElementById("mensagem")
var area2 = document.getElementById("area2")

var posicao = document.getElementById("posicao");
area.addEventListener("mousemove", function (event) {
    posicao.textContent = "X:" + event.clientX + " Y:" + event.clientY;
});
area2.addEventListener("click", function () {
    mensagem.textContent = "A -> China (leste da Ásia)";
});

area2.addEventListener("dblclick", function () {
    mensagem.textContent = "B -> Austrália";
})

area2.addEventListener("mouseenter", function () {
    mensagem.textContent = "C -> Estados Unidos";
});

area2.addEventListener("mouseleave", function () {
    mensagem.textContent = "D -> Argentina";
});



 var quadrado = document.getElementById("quadrado")

    window.addEventListener("scroll", () => {
        quadrado.style.left = window.scrollY + "px";
        quadrado.style.top = window.scrollY +50+ "px";
    });

document.addEventListener("keydown", function(event) {
    var campo = document.getElementById("resultado");
    var paisLista = document.getElementById("pais-lista");

    if (['1', '2', '3', '4'].includes(event.key)) {
        campo.textContent = "Número de acertos: " + event.key;
    }
   

   
    if(event.key.toLowerCase() === "h") {
        paisLista.innerHTML = 
        "10 Países:<br>" +
        "1. China<br>" +
        "2. Austrália<br>" +
        "3. Estados Unidos<br>" +
        "4. Argentina<br>" +
        "5. Brasil<br>" +
        "6. Itália<br>" +
        "7. Egito<br>" +
        "8. Japão<br>" +
        "9. Canadá<br>" +
        "10. México";
    }
});