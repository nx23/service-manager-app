const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 900,
    webPreferences: {
      nodeIntegration: true
    }
  });
  //mainWindow.removeMenu()
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../public/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

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