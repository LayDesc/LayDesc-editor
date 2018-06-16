import {app, BrowserWindow, ipcMain} from "electron";

export function createMainWindow() {
    const mainWindow = new BrowserWindow({
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

    return mainWindow;
}


export function createGeneratorWindow() {

    const layDescApiRenderWindow = new BrowserWindow({
        width: 500,
        height: 300,
        backgroundColor: "#1e1e1e",
        titleBarStyle: "hidden",
        webPreferences: {
            nativeWindowOpen: false,
        }
    });
    layDescApiRenderWindow.loadURL(`file://${__dirname}/../client/window-generator/index.html`);
    layDescApiRenderWindow.webContents.openDevTools();

    return layDescApiRenderWindow;
}

export function createRendererWindow() {

    const rendererWindow = new BrowserWindow({
        width: 500,
        height: 300,
        backgroundColor: "#1e1e1e",
        titleBarStyle: "hidden",
        webPreferences: {
            nativeWindowOpen: false,
        }
    });
    rendererWindow.loadURL(`file://${__dirname}/../client/window-renderer/index.html`);
    rendererWindow.webContents.openDevTools();

    return rendererWindow;
}