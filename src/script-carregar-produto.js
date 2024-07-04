// Importando o mysql2
var conexao = require("../conectar-banco-dados");

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
      criarItem.setAttribute("class", "item")
      criarItem.id = produto.id

      // Criando a div
      var criarIcones = document.createElement("div");
      criarIcones.id = "icons";

      // Criando os icone de renomear
      var iconRename = document.createElement("img");
      iconRename.id = "icon-rename"
      iconRename.src = "../assets/icons/renomear.png";
      iconRename.addEventListener("click", () => renomearItem(criarItem.id, produto))

      // Criando o icone de deletar
      var iconDelete = document.createElement("img");
      iconDelete.id = "icon-delete";
      iconDelete.src = "../assets/icons/deletar.png";
      iconDelete.addEventListener("click", () => deletarItem(criarItem.id));

      // Criando o conteúdo
      criarItem.innerText = `${produto.nome} - ${produto.quantidade} - ${produto.codigo_produto} - ${produto.marca}`

      // Adicionando os icones
      criarIcones.appendChild(iconRename);
      criarIcones.appendChild(iconDelete);

      // Adicionando os icones ao item
      criarItem.appendChild(criarIcones);

      // Adicionando os itens
      listagemProdutos.appendChild(criarItem);
    }
    );
  }
})

function deletarItem(id) {
  var deletar = id
  var queryDeletar = `DELETE FROM produto WHERE id = ${deletar}`;
  conexao.query(queryDeletar, function (error) {
    if (error) {
      console.log(`Ocorreu um erro ao deletar o item: ${error.code}`);
      console.log(`Ocorreu um erro ao deletar o item: ${error.fatal}`);
    } else {
      console.log("Item deletado com sucesso!");
      location.reload()
    }
  })
}

function renomearItem(id) {

}