// Importando os módulos necessários do Electron
const { app, BrowserWindow } = require('electron')

// Importando o módulo 'path' para manipulação de caminhos de arquivos
const path = require('path')

// Ativando o recarregamento automático do aplicativo durante o desenvolvimento
// Isso permite que o aplicativo seja recarregado automaticamente sem a necessidade de reiniciá-lo manualmente
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const createWindow = () => {
  // Criando uma nova instância de BrowserWindow
  const win = new BrowserWindow({
    // Definindo a largura e altura da janela
    width: 800,
    height: 600,
    // Especificando o ícone da janela
    icon: 'assets/image/icon.png',
    // Configurações de preferências do navegador
    webPreferences: {
      // Habilitando a integração do node para permitir o acesso ao sistema de arquivos e APIs do Node.js
      nodeIntegration: true,
      // Desabilitando o isolamento de contexto para evitar problemas com scripts de terceiros
      // Isso pode ser um risco de segurança, então use com cautela
      contextIsolation: false,
    },
  })

  // Carregando o arquivo HTML principal da aplicação
  win.loadFile('./src/index.html')
}

// Evento que é disparado quando o aplicativo está pronto para iniciar
app.whenReady().then(() => {
  // Chamando a função para criar a janela do navegador
  createWindow()
})

