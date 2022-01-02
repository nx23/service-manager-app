const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = false;
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
  mainWindow.removeMenu()
  global.pythonProcessRunning = [];
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

ipcMain.on('LIGAR_PROCESSO', (event, args) => {
  const { scriptName } = args
  const pythonFile = path.join(process.resourcesPath, 'python', `${scriptName}.pyw`)
  let pyshell = new PythonShell(pythonFile)
  pyshell.on('message', function (message) {
    console.log(`${message}`)
  })
  pyshell.end(function (err) {
    if (err) {
      throw err;
    };
  });
  const pythonService = {
    name: args.scriptName,
    childProcess: pyshell.childProcess
  }
  global.pythonProcessRunning = [...global.pythonProcessRunning, pythonService]
})

ipcMain.on('DESLIGAR_PROCESSO', (event, args) => {
  const { scriptName } = args
  const scriptToBeKillIndex = global.pythonProcessRunning.findIndex(script => script.name === scriptName)
  console.log(`${global.pythonProcessRunning[scriptToBeKillIndex].name}`)
  global.pythonProcessRunning[scriptToBeKillIndex].childProcess.kill('SIGINT')
  global.pythonProcessRunning.splice(scriptToBeKillIndex, 1)
  console.log(`${global.pythonProcessRunning}`)
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