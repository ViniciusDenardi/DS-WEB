
//Criando o contador de itens 
var contadorItem = 0


function adicionar(){

    //Incrementando o contador de itens 
    contadorItem ++
    //crio o item 
    let novoItem = document.createElement("li");
    //adiciono o texto ao meu item 
    novoItem.textContent = contadorItem + "-" + prompt("Digite o nome da tarefa ")
    //atribuo um id
    novoItem.setAttribute("id",contadorItem);

    //cria o botao de removor
    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "remover" //adiciona texto ao botao
    botaoRemover.setAttribute("onclick","remover("+contadorItem+")") //Adiciona uma funcao ao botao

    novoItem.appendChild(botaoRemover)//adciona o botao ao novo item 
    document.getElementById("lista").appendChild(novoItem);
}

function remover(itemLista){
    var Item = document.getElementById(itemLista)
    document.getElementById("lista").removeChild(Item)
}