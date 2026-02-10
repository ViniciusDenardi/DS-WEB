//Funções em java script

function somarNumeros(num1,num2){

    return num1 + num2;

}

let resultado = somarNumeros(5,10)
console.log(resultado)               //alert(resultado)           //confirm("Esse é o resultado esperado? " + resultado)


//trabalhando com data e hora 

let dataAtual = new Date()
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

// outro exemplo

let hoje = new Date();
let diasParaAdicionar = 7;

// criar uma nova data a partir de uma data atual

let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);

//let novaData = new Date(hoje); adicionar mais meses 
//novaData.setMonth(novaData.getMonth() + diasParaAdicionar);

//exibir data do jeito brasileiro 
console.log(novaData.toLocaleDateString());

let date1 = new Date('2025-03-10');
let date2 = new Date('2025-03-25');

//diferenca em milissegundos
let diferencaMs = date2 - date1;

//convertendo para dia 
let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);
console.log(`Diferença: ${diferencaDias} dias`);
//saida diferenca: 6 dias 

//manipulando o DOM

document.getElementById("conteudo").innerHTML = "<p> Olá,Mundo! Este texto foi inserido usando Java Script.</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);

//usando o setattibute e o getattibute
document.getElementById("foto").setAttribute("src","imagem.jpg");

console.log(document.getElementById("foto").getAttribute("src"));

//CSS
document.getElementById("conteudo").style.backgroundColor = "red";
document.getElementById("foto").style.width = "500px";

//criando uma funcao para um botao

function MudaTamanho(){
    document.getElementById("foto").style.width = "1000px";
}
