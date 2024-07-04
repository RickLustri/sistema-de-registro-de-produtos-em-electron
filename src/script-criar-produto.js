// Importando o mysql2
var conexao = require("../conectar-banco-dados");

var nome = document.getElementById("nome");
var quantidade = document.getElementById("quantidade");
var codigo = document.getElementById("codigo");
var marca = document.getElementById("marca");
var form = document.getElementById("form");

function adicionarProduto(event) {
  event.preventDefault();


  // Barrando os campos vazios
  if (nome.value === "" || quantidade.value === "" || codigo.value === "" || marca.value === "") {
    nome.value === "" ? nome.style.border = "1px solid red" : nome.style.border = "1px solid green";
    quantidade.value === "" ? quantidade.style.border = "1px solid red" : quantidade.style.border = "1px solid green";
    codigo.value === "" ? codigo.style.border = "1px solid red" : codigo.style.border = "1px solid green";
    marca.value === "" ? marca.style.border = "1px solid red" : marca.style.border = "1px solid green";
    return;
  }

  var queryAdicionar = `INSERT INTO produto (nome, quantidade, codigo_produto, marca) VALUES ('${nome.value}', '${quantidade.value}', '${codigo.value}', '${marca.value}')`;
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
form.addEventListener("submit", adicionarProduto);


function digitando(event) {
  event.preventDefault();
  nome.style.border = "";
  quantidade.style.border = "";
  codigo.style.border = "";
  marca.style.border = "";
}
nome.addEventListener("keyup", digitando);
codigo.addEventListener("keyup", digitando);
quantidade.addEventListener("keyup", digitando);
marca.addEventListener("keyup", digitando);


function inputNumero(event) {
  event.currentTarget.maxLength = 3;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  event.currentTarget.value = value;
}
quantidade.addEventListener("keyup", inputNumero);


function mascaraInput(event) {
  event.currentTarget.maxLength = 6;
  let value = event.currentTarget.value.toUpperCase();
  event.currentTarget.value = value;
}
codigo.addEventListener("keyup", mascaraInput);

