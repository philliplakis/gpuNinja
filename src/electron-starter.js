const { app, BrowserWindow, Menu, Tray } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const gotTheLock = app.requestSingleInstanceLock();

let mainWindow;
let tray = null;
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
      height: 400,
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
  });
}

app.whenReady().then(() => {
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show App",
      click: function () {
        mainWindow.show();
      },
    },
    { type: "separator" },
    {
      label: "Quit",
      click: function () {
        app.isQuiting = true;
        app.quit();
      },
    },
  ]);

  const iconpath = path.join(__dirname, "../build/gpuninja_logo.png");
  console.log(iconpath);
  tray = new Tray(iconpath);
  tray.setToolTip("GPU Ninja | GPU monitoring");
  tray.setContextMenu(contextMenu);
  tray.on("double-click", () => {
    mainWindow.show();
  });
});
