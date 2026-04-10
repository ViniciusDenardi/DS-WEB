var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', () => {
    getPedidos_itens()
    carregarProdutos()
})
 
document.getElementById('botaoEnviar').addEventListener('click', postPedidos_itens)

const params = new URLSearchParams(window.location.search)
const pedido_id = params.get("id")

var produto_id = document.getElementById("produto_id")
var quantidade = document.getElementById("quantidade")


async function getPedidos_itens() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedido_itens")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.pedido_id}</td>
            <td>${item.produto_id}</td>
            <td>${item.quantidade}</td>
            <td>${item.preco}</td>
            <td>${item.quantidade * item.preco}</td>
            <td>
            <button onclick="deletePedido_itens(${item.id})">Deletar</button>
            </td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="7" ><center>Itens Cadastradas</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Pedido</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Preço total</th>
                    <th>Deletar</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;

     // Calcula o total geral
    let totalGeral = resposta.data.reduce((soma, item) => soma + (item.quantidade * item.preco), 0);

    // Atualiza a div fora da tabela
    document.getElementById("total").innerHTML = `
        <h3>Total Geral dos Pedidos: R$ ${totalGeral.toFixed(2)}</h3>
    `;
}



async function carregarProdutos() {
    const resposta = await fetch("http://localhost/cafeteria-api/produtos");
    const resultado = await resposta.json();

    const select = document.getElementById("produto_id");

    let options = '<option value="">Selecione...</option>';

    resultado.data.forEach(cat => {
        options += `<option value="${cat.id}">${cat.nome}</option>`;
    });

    select.innerHTML = options;
}

carregarProdutos();

async function postPedidos_itens() {
     var requisicao = await fetch("http://localhost/cafeteria-api/pedido_itens", {
        method:  "POST",
        body: JSON.stringify({
            pedido_id: pedido_id,
            produto_id: produto_id.value,
            quantidade: quantidade.value
           
        })
    });

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    
    produto_id.value = ""
    quantidade.value = ""
    
   
    getPedidos_itens()
}



async function deletePedido_itens(id) {
    var requisicao = await fetch(`http://localhost/cafeteria-api/pedido_itens/${id}`, {
        method: "DELETE"
    });

    var resposta = await requisicao.json()
    console.log(resposta)

    getPedidos_itens()
}