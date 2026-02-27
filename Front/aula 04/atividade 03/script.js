
var contadorItem = 0;

function adicionar(){

    contadorItem++;

    let novoItem = document.createElement("li");
    let Nome = document.getElementById("Nome").value;
    let Telefone = document.getElementById("Telefone").value;
    let Turma = document.getElementById("Turma").value;
    let Email = document.getElementById("Email").value;
    let RM = document.getElementById("RM").value;

 
    novoItem.innerHTML =
    contadorItem + "<br>" +
    "Nome: " + Nome + "<br>" +
    "Telefone: " + Telefone + "<br>" +
    "Turma: " + Turma + "<br>" +
    "Email: " + Email + "<br>" +
    "RM: " + RM;
   
    novoItem.setAttribute("id", contadorItem);

  
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

 
    botaoRemover.setAttribute("onclick", "remover(" + contadorItem + ")");
    let quebraLinha = document.createElement("br");
    novoItem.appendChild(quebraLinha);
    novoItem.appendChild(botaoRemover);

  
    document.getElementById("lista").appendChild(novoItem);
    let linha = document.createElement("hr");
    document.getElementById("lista").appendChild(linha);
}


function remover(id){
    let item = document.getElementById(id);
    document.getElementById("lista").removeChild(item);
}
 