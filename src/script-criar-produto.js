// Importando o mysql2
var conexao = require("../conectar-banco-dados");

function adicionarProduto(event) {
  event.preventDefault();
  
  var nome = document.getElementById("nome").value;
  var quantidade = document.getElementById("quantidade").value;
  var codigo = document.getElementById("codigo").value;
  var marca = document.getElementById("marca").value;

  // Barrando os campos vazios
  if (nome === "" || quantidade === "" || codigo === "" || marca === "") {
    nome === "" ? document.getElementById("nome").style.border = "1px solid red" : document.getElementById("nome").style.border = "";
    quantidade === "" ? document.getElementById("quantidade").style.border = "1px solid red" : document.getElementById("quantidade").style.border = "";
    codigo === "" ? document.getElementById("codigo").style.border = "1px solid red" : document.getElementById("codigo").style.border = "";
    marca === "" ? document.getElementById("marca").style.border = "1px solid red" : document.getElementById("marca").style.border = "";
    return;
  }

  var queryAdicionar = `INSERT INTO produto (nome, quantidade, codigo_produto, marca) VALUES ('${nome}', '${quantidade}', '${codigo}', '${marca}')`;
  conexao.query(queryAdicionar, function (error) {
    if (error) {
      console.log(`Ocorreu um erro ao adicionar o item: ${error.code}`);
      console.log(`Ocorreu um erro ao adicionar o item: ${error.fatal}`); 
    } else {
      console.log("Item adicionado com sucesso!");
      window.location.href = "index.html";
    }
  })
}
var form = document.getElementById("form");
form.addEventListener("submit", adicionarProduto);

function digitando(event) {
  event.preventDefault();
  document.getElementById("nome").style.border = "";
  document.getElementById("quantidade").style.border = "";
  document.getElementById("codigo").style.border = "";
  document.getElementById("marca").style.border = "";
}

var nome = document.getElementById("nome");
nome.addEventListener("keyup", digitando);
var quantidade = document.getElementById("quantidade");
quantidade.addEventListener("keyup", digitando, mascaraInput);
var codigo = document.getElementById("codigo");
codigo.addEventListener("keyup", digitando);
var marca = document.getElementById("marca");
marca.addEventListener("keyup", digitando);

function mascaraInput(event) {

  // Define o tamanho maximo do campo:
  event.currentTarget.maxLength = 3;

  // Lendo o valor do campo:
  let value = event.currentTarget.value;

  // Formata o campo de cep:
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d)/, '');

  // Atualiza o campo de input:
  event.currentTarget.value = value;

  // Retorna o evento:
  return event
}


