const { ipcRenderer } = require('electron');

process.once('loaded', () => {
  window.addEventListener('message', evt => {
    if (evt.data.type === 'LIGAR_PROCESSO') {
      ipcRenderer.send(
        'LIGAR_PROCESSO',
        {
          mensagem: `Esta ligando ${evt.data.scriptName}`,
          scriptName: evt.data.scriptName
        }
      )
    }
  })

  window.addEventListener('message', evt => {
    if (evt.data.type === 'DESLIGAR_PROCESSO') {
      ipcRenderer.send(
        'DESLIGAR_PROCESSO',
        {
          mensagem: `Esta desligando ${evt.data.scriptName}`,
          scriptName: evt.data.scriptName
        }
        )
    }
  })
})
