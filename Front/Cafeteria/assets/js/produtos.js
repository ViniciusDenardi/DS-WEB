
var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getProdutos, carregarCategorias())
 
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getProdutos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.categoria_id}</td>
            <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="4" ><center>Produtos Cadastradas</center></th>
                </tr>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
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


async function carregarCategorias() {
    const resposta = await fetch("http://localhost/cafeteria-api/categorias");
    const resultado = await resposta.json();

    const select = document.getElementById("categoria");

    let options = '<option value="">Selecione...</option>';

    resultado.data.forEach(cat => {
        options += `<option value="${cat.id}">${cat.nome}</option>`;
    });

    select.innerHTML = options;
}

async function postProduto() {
     var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
        method:  "POST",
        body: JSON.stringify({
            nome: nome.value,
            preco: preco.value,
            categoria: categoria.value
        })
    });

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    nome.value = ""
    preco.value = ""
    categoria.value = ""

    getProdutos()
}



async function deleteProduto(id) {
    var requisicao = await fetch(`http://localhost/cafeteria-api/produtos/${id}`, {
        method: "DELETE"
    });

    var resposta = await requisicao.json()
    console.log(resposta)

    getProdutos()
}