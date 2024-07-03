// Importando o mysql2
var mysql = require("mysql2");

// Configuração para acessar o banco de dados
var conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "produtos",
});

// Conectando ao MySQL
conexao.connect(function (error) {
  if (error) {
    console.log(`Ocorreu um erro ao conectar no banco de dados: ${error.code}`);
    console.log(`Ocorreu um erro ao conectar no banco de dados: ${error.fatal}`);
  } else {
    console.log("Conectado ao banco de dados com sucesso!");
  }
});

// Buscando os dados no MySQL
var queryBuscar = "SELECT * FROM produto";
conexao.query(queryBuscar, function (error, produtos) {
  if (error) {
    console.log(`Ocorreu um erro ao buscar os dados: ${error.code}`);
    console.log(`Ocorreu um erro ao buscar os dados: ${error.fatal}`);
  } else {
    console.log("Os produtos encontrados foram:", produtos);
    var listagemProdutos = document.getElementById("listagem-produtos");

    // Criando os itens
    produtos.forEach(produto => {
      // Criando as li 
      var criarItem = document.createElement("li");
      criarItem.id = "item";

      // Criando a div
      var criarIcones = document.createElement("div");
      criarIcones.id = "icons";

      // Criando os icone de renomear
      var iconRename = document.createElement("img");
      iconRename.id= "icon-rename"
      iconRename.src = "../assets/icons/renomear.png";

      // Criando o icone de deletar
      var iconDelete = document.createElement("img");
      iconDelete.id = "icon-delete";
      iconDelete.src = "../assets/icons/deletar.png";

      // Criando o conteúdo
      criarItem.innerText = `${produto.nome} - ${produto.quantidade} - ${produto.codigo_produto} - ${produto.marca}`

      // Adicionando os icones
      criarIcones.appendChild(iconRename);
      criarIcones.appendChild(iconDelete);

      // Adicionando os icones ao item
      criarItem.appendChild(criarIcones);

      // Adicionando os itens
      listagemProdutos.appendChild(criarItem);
    });
  }
})