
var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getItem, carregarCategorias())
 
document.getElementById('botaoEnviar').addEventListener('click', postItem)

async function getItem() {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td><input type="checkbox"
        ${item.feito == 1 ? "checked" : ""} onchange="Status(${item.id}, this.checked)"></td>
            <td>${item.nome}</td>
            <td>${item.categoria_nome}</td>
            <td><button onclick="deleteItem(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="4" ><center>Itens Cadastradas</center></th>
                </tr>
                <tr>
                    <th>Status</th>
                    <th>Nome do Item</th>
                    <th>Categoria</th>
                    <th>Deletar</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}

//fetch permite q o java converse com API
async function carregarCategorias() {
    const resposta = await fetch("http://localhost/meus-planos-api/categorias"); //fetch faz a requisicao http
    const resultado = await resposta.json(); //JSON = uma forma de escrever dados como texto estruturado

    const select = document.getElementById("categoria");

    let options = '<option value="">Selecione...</option>';

    resultado.data.forEach(cat => { //pra cada categoria que ele capturar ele cria uma opção
        options += `<option value="${cat.id}">${cat.nome}</option>`;
    });

    select.innerHTML = options;
}

async function postItem() {
     var requisicao = await fetch("http://localhost/meus-planos-api/itens", {
        method:  "POST",
       body: JSON.stringify({
         nome: nome.value,
        categoria_id: categoria.value
})
    });

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    nome.value = ""
    categoria.value = ""

    getItem()
}

async function Status(id, feito) {
    await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "PUT",
        body: JSON.stringify({
            feito: feito ? 1 : 0
        })
    });

    getItem()
}

async function deleteItem(id) {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "DELETE"
    });

    var resposta = await requisicao.json()
    console.log(resposta)

    getItem()
}