var capital = Number(prompt("Informe o capital inicial:"))
var taxa = Number(prompt("Informe a taxa de juros:"))
var tempo = Number(prompt("Informe a tempo do investimento:"))
let montante = capital * (1 + (taxa/100)) ** tempo
alert("O montante: " + montante . toFixed(2))
