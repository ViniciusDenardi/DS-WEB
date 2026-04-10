var divResposta = document.getElementById("resposta")

// os inputs var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getPedidos)
 
document.getElementById('botaoEnviar').addEventListener('click', postPedidos)


async function getPedidos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/pedidos")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.cliente}</td>
            <td>${item.total}</td>
            <td>${item.criado_em}</td>
            <td>
            <button onclick="VisualizarPedido"><a href="pedidos_itens.html?id=${item.id}">Visualizar</a></button>
            <button onclick="deletePedido(${item.id})">Deletar</button>
            </td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="5" ><center>Pedidos Cadastradas</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Data</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}




async function postPedidos() {
     var requisicao = await fetch("http://localhost/cafeteria-api/pedidos", {
        method:  "POST",
        body: JSON.stringify({
            cliente: cliente.value,
            //total: total.value,
            //criado_em: criado_em.value
        })
    });

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    cliente.value = ""
    //total.value = ""
    //criado_em.value = ""

    getPedidos()
}



async function deletePedido(id) {
    var requisicao = await fetch(`http://localhost/cafeteria-api/pedidos/${id}`, {
        method: "DELETE"
    });

    var resposta = await requisicao.json()
    console.log(resposta)

    getPedidos()
}