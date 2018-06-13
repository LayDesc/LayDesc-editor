import {app, BrowserWindow, ipcMain} from "electron";
import {IpcChannels} from "../_typescript-declarations/IpcChannels";

let mainWindow: BrowserWindow | null;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#1e1e1e",
        titleBarStyle: "hidden",
        webPreferences: {
            nativeWindowOpen: false,
        }
    });
    mainWindow.loadURL(`file://${__dirname}/../client/window-main/index.html`);
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
