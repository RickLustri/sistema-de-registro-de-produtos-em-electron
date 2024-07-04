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

// Exportando a conexão do MySQL
module.exports = conexao