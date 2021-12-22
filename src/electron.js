const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = true;
const { PythonShell } = require('python-shell');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      sandbox: true
    }
  });
  //mainWindow.removeMenu()
  global.pythonProcessRunning = [];
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../public/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

ipcMain.on('LIGAR_PROCESSO', (event, args) => {
  const { scriptName } = args
  let pyshell = new PythonShell(`${__dirname}/python/${scriptName}.py`)
  pyshell.on('message', function (message) {
    const pythonService = {
      name: args.scriptName,
      pid: message,
      childProcess: pyshell.childProcess
    }
    global.pythonProcessRunning = [...global.pythonProcessRunning, pythonService]
  })
  pyshell.end(function (err) {
    if (err) {
      throw err;
    };
  });
})

ipcMain.on('DESLIGAR_PROCESSO', (event, args) => {
  const { scriptName } = args
  const scriptToBeKill = global.pythonProcessRunning.find(script => script.name === scriptName)
  //console.log(scriptToBeKill.name)
  scriptToBeKill.childProcess.kill('SIGINT')
})

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});