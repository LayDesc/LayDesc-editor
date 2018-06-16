import {app, BrowserWindow, ipcMain, BrowserWindowConstructorOptions} from "electron";
import {IpcChannels} from "../_typescript-declarations/IpcChannels";
import {createGeneratorWindow, createMainWindow, createRendererWindow} from "./createWindow";

let mainWindow: BrowserWindow | null = null;
let generatorWindow: BrowserWindow | null = null;

let listOfRendererWindow: { [key: string]: BrowserWindow | null} = {};

function startLayDescEditor() {
    mainWindow = createMainWindow();
    // @todo always show this window over main window
    generatorWindow = createGeneratorWindow();

    mainWindow.on('closed', () => {
        mainWindow = null
    });
    generatorWindow.on('closed', () => {
        generatorWindow = null
    });

    ipcMain.on(IpcChannels.WindowMain.JS_GENERATED, (event: Event, args: IpcChannels.JS_GENERATED_data) => {
        if(generatorWindow === null) generatorWindow = createGeneratorWindow();
        (generatorWindow as BrowserWindow).webContents.send(IpcChannels.ElectronNode.EMIT_JS_GENERATED, args);
    });

    ipcMain.on(IpcChannels.WindowGenerator.DOC_GENERATED, (event: Event, args: IpcChannels.DOC_GENERATED_data) => {

        console.log("—————");
        console.log(args);
        console.log(listOfRendererWindow);
        console.log("—————");

        const windowRendererForThisLayDescDocumentIsOpen = listOfRendererWindow[args.docName] === void 0 || listOfRendererWindow[args.docName] === null;
        if( windowRendererForThisLayDescDocumentIsOpen ) {
            listOfRendererWindow[args.docName] = createRendererWindow();
            (listOfRendererWindow[args.docName] as BrowserWindow).on('closed', () => {
                listOfRendererWindow[args.docName] = null;
            });
        }
    });

    // // https://electronjs.org/docs/api/window-open
    // generatorWindow.webContents.on('new-window', (event: any, url, frameName, disposition, options, additionalFeatures) => {
    //     if (frameName === 'renderer') {
    //
    //         // Ouvre la fenêtre comme fenêtre modale
    //         event.preventDefault();
    //
    //         const windowOptions: BrowserWindowConstructorOptions = {
    //             width: 900,
    //             height: 500,
    //             // parent: (mainWindow as BrowserWindow),
    //             // resizable: false
    //             // show: false,
    //         };
    //
    //         Object.assign(options, windowOptions);
    //
    //         interface INewWindowEvent extends Event {
    //             newGuest: BrowserWindow;
    //         }
    //         const newWindow = (event as INewWindowEvent).newGuest = new BrowserWindow(options);
    //
    //         newWindow.loadFile('dist/client/window-renderer/index.html');
    //
    //         newWindow.webContents.on('did-finish-load', () => {
    //             newWindow.webContents.openDevTools();
    //             newWindow.webContents.send('message', 'Hello second window!');
    //         });
    //     }
    // });
}

app.on('ready', startLayDescEditor);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        startLayDescEditor()
    }
});
