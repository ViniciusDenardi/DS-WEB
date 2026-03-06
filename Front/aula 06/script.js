// ================= FORMULÁRIO =================
const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// ================= EMAIL =================
const emailInput = document.getElementById("email");
const emailErro = document.getElementById("erro-email");
function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// ================= NOME =================
const nomeInput = document.getElementById("nome");
const nomeErro = document.getElementById("erro-nome");
function validarNome(nome) {
    return /^[A-Za-zÀ-ÿ\s]{3,}$/.test(nome);
}

// ================= SENHA =================
const senhaInput = document.getElementById("senha");
const confirmaSenhaInput = document.getElementById("confirma-senha");
const senhaErro = document.getElementById("erro-senha");
function validarSenha(senha) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha);
}
function validarConfirmaSenha(senha, confirma) {
    return senha === confirma;
}

// ================= CPF =================
const cpfInput = document.getElementById("cpf");
const cpfErro = document.getElementById("erro-cpf");
function validarCPF(cpf){
    cpf = cpf.replace(/\D/g,""); //tira carac nao numeros
    if(cpf.length!==11) return false; // deixa com maximo 11 carac
    let soma=0;//calcula o primeiro numero verificador
    for(let i=1;i<=9;i++) soma += parseInt(cpf[i-1])*(11-i);
    let r=(soma*10)%11; if(r===10||r===11) r=0;
    if(r!==parseInt(cpf[9])) return false;
    soma=0;//calculo o segundo numero verificador
    for(let i=1;i<=10;i++) soma += parseInt(cpf[i-1])*(12-i);
    r=(soma*10)%11; if(r===10||r===11) r=0;
    return r===parseInt(cpf[10]);
}

// ================= TELEFONE =================
const telefoneInput = document.getElementById("telefone");
const telefoneErro = document.getElementById("erro-telefone");
function validarTelefone(tel) {
    return /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(tel);
}

// ================= CEP =================
const cepInput = document.getElementById("cep");
const cepErro = document.getElementById("erro-cep");
function validarCEP(cep) {
    return /^\d{5}-\d{3}$/.test(cep);
}

// ================= DATA =================
const dataInput = document.getElementById("data-nascimento");
const dataErro = document.getElementById("erro-data-nascimento");
function validarData(data) {
    const p=data.split("/"); if(p.length!==3) return false; //divide a data em 3 partes pela /
    const dia=parseInt(p[0]), mes=parseInt(p[1])-1, ano=parseInt(p[2]); //transforma string em numero e coloca na ordem q aparecem 
    const dt=new Date(ano,mes,dia); 
    return dt.getFullYear()===ano && dt.getMonth()===mes && dt.getDate()===dia; //Compara os valores digitados pelo usuário com os valores reais do objeto
}

// ================= VALOR =================
const valorInput = document.getElementById("valor");
const valorErro = document.getElementById("erro-valor");
function validarValor(valor) {
    return /^\d{1,3}(\.\d{3})*,\d{2}$/.test(valor);
}

// ================= URL =================
const urlInput = document.getElementById("url");
const urlErro = document.getElementById("erro-url");
function validarURL(url) {
    return url.startsWith("http://") || url.startsWith("https://");
}

// ================= CARTÃO =================
const cartaoInput = document.getElementById("cartao");
const cartaoErro = document.getElementById("erro-cartao");
function validarCartao(c){
    c=c.replace(/\s/g,"");
    return /^\d{16}$/.test(c);
}

// ================= SUBMIT =================
form.addEventListener("submit", function(event){
    event.preventDefault(); // evita recarregar a página
    resultado.textContent=""; // limpa o resultado

    // Captura valores
    const email = emailInput.value;
    const nome = nomeInput.value;
    const senha = senhaInput.value;
    const confirmaSenha = confirmaSenhaInput.value;
    const cpf = cpfInput.value;
    const telefone = telefoneInput.value;
    const cep = cepInput.value;
    const data = dataInput.value;
    const valor = valorInput.value;
    const url = urlInput.value;
    const cartao = cartaoInput.value;

    // ================= FEEDBACK =================
    // Email
    if(!validarEmail(email)) emailErro.textContent="E-mail inválido. Ex: usuario@dominio.com";
    else { emailErro.textContent=""; resultado.innerHTML += "Email válido: "+email+"<br>"; }

    // Nome
    if(!validarNome(nome)) nomeErro.textContent="Nome inválido. Apenas letras e mínimo 3 caracteres";
    else { nomeErro.textContent=""; resultado.innerHTML += "Nome válido: "+nome+"<br>"; }
    // Senha
     if(!validarSenha(senha)) senhaErro.textContent="Senha fraca. Mínimo 8 caracteres, letras maiúsculas/minúsculas, números e especiais";
    else if(!validarConfirmaSenha(senha, confirmaSenha)) senhaErro.textContent="Senhas não conferem";
    else { senhaErro.textContent=""; resultado.innerHTML += "Senha válida<br>"; }

    // CPF
   if(!validarCPF(cpf)) cpfErro.textContent="CPF inválido. Ex: 000.000.000-00";
    else { cpfErro.textContent=""; resultado.innerHTML += "CPF válido: "+cpf+"<br>"; }
    // Telefone
  if(!validarTelefone(telefone)) telefoneErro.textContent="Telefone inválido. Ex: (11) 99999-9999";
    else { telefoneErro.textContent=""; resultado.innerHTML += "Telefone válido: "+telefone+"<br>"; }
    // CEP
     if(!validarCEP(cep)) cepErro.textContent="CEP inválido. Ex: 01310-100";
    else { cepErro.textContent=""; resultado.innerHTML += "CEP válido: "+cep+"<br>"; }
    // Data
    if(!validarData(data)) dataErro.textContent="Data inválida. Ex: 31/12/1990";
    else { dataErro.textContent=""; resultado.innerHTML += "Data válida: "+data+"<br>"; }


    // Valor
    if(!validarValor(valor)) valorErro.textContent="Valor inválido. Ex: 1.299,90";
    else { valorErro.textContent=""; resultado.innerHTML += "Valor válido: "+valor+"<br>"; }

    // URL
   if(!validarURL(url)) urlErro.textContent="URL inválida. Precisa começar com http:// ou https://";
    else { urlErro.textContent=""; resultado.innerHTML += "URL válida: "+url+"<br>"; }

    // Cartão
       if(!validarCartao(cartao)) cartaoErro.textContent="Cartão inválido. Deve ter 16 dígitos";
    else { cartaoErro.textContent=""; resultado.innerHTML += "Cartão válido: "+cartao+"<br>"; }
});