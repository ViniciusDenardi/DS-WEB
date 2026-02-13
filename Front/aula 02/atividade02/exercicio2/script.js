function Mudaimagem1(){
    document.getElementById("foto")
    .setAttribute("src","imagem1.png")
}

function MudaImagem2(){
    document.getElementById("foto")
    .setAttribute("src","imagem0.png")
}

function mostrarsrc(){
    let valorsrc = document.getElementById("foto")
    .getAttribute("src")

    console.log(valorsrc)
}