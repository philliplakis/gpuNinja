const { app, BrowserWindow, Menu, Tray, ipcMain, dialog } = require("electron");

const gotTheLock = app.requestSingleInstanceLock();
// const appFolder = path.dirname(process.execPath);
// const updateExe = path.resolve(appFolder, "..", "Update.exe");
// const exeName = path.basename(process.execPath);

let mainWindow;
let isDev = true;
let log = console;

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (e, argv) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
      mainWindow.show();
    }
  });

  app.on("ready", function () {
    log.info(`I N I T I A T I N G`);
    log.info(`Running V ${app.getVersion()}`);

    mainWindow = new BrowserWindow({
      transparent: true,
      frame: false,
      width: 500,
      height: 700,
      center: true,
      hasShadow: true,
      resizable: false,
      maximizable: false,
      closable: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    });

    if (isDev) {
      mainWindow.loadURL(`http://localhost:3000`);
      mainWindow.webContents.openDevTools({
        mode: "undocked",
      });
    } else {
      mainWindow.loadURL(`${path.join(__dirname, "../build/index.html")}`);
    }

    mainWindow.webContents.on("did-finish-load", () => {
      mainWindow.show();
      mainWindow.focus();
    });

    mainWindow.on("close", function (event) {
      if (!app.isQuiting) {
        event.preventDefault();
        mainWindow.hide();
      }
      return false;
    });

    mainWindow.on("closed", function () {
      mainWindow = null;
    });

    app.setAsDefaultProtocolClient("gpuNinja");

    app.on("window-all-closed", function () {
      app.quit();
    });

    app.on("activate", function () {
      if (mainWindow === null) {
        createWindow();
      }
    });
  });
}
