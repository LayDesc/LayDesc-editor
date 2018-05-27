import {app, BrowserWindow, ipcMain} from "electron";

// Gardez une reference globale de l'objet window, si vous ne le faites pas, la fenetre sera
// fermee automatiquement quand l'objet JavaScript sera garbage collected.
let mainWindow: Electron.BrowserWindow | null;

function createWindow () {
    // Créer le browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#82b6ff",
        titleBarStyle: "hidden",
        webPreferences: {
            nativeWindowOpen: true
        }
    });

    // et charge le index.html de l'application.
    mainWindow.loadFile('dist/client/window-main/index.html');

    // Ouvre les DevTools.
    mainWindow.webContents.openDevTools();

    // https://electronjs.org/docs/api/window-open
    mainWindow.webContents.on('new-window', (event: any, url, frameName, disposition, options, additionalFeatures) => {
        if (frameName === 'modal') {

            // Ouvre la fenêtre comme fenêtre modale
            event.preventDefault();

            const windowOptions: Electron.BrowserWindowConstructorOptions = {
                width: 900,
                height: 500,
                parent: (mainWindow as Electron.BrowserWindow),
                // resizable: false
                // show: false,
            };

            Object.assign(options, windowOptions);

            interface INewWindowEvent extends Event {
                newGuest: BrowserWindow;
            }
            const newWindow = (event as INewWindowEvent).newGuest = new BrowserWindow(options);

            newWindow.loadFile('dist/client/window-generator/index.html');

            newWindow.webContents.on('did-finish-load', () => {
                newWindow.webContents.openDevTools();
                newWindow.webContents.send('message', 'Hello second window!');
            });
        }
    });

    ipcMain.on("reply", (event: Event, reply: string) => {
        console.log(reply);
        (mainWindow as Electron.BrowserWindow).webContents.send("message", reply);
    });

    // Émit lorsque la fenêtre est fermée.
    mainWindow.on('closed', () => {
        // Dé-référence l'objet window , normalement, vous stockeriez les fenêtres
        // dans un tableau si votre application supporte le multi-fenêtre. C'est le moment
        // où vous devez supprimer l'élément correspondant.
        mainWindow = null;
    });
}

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.on('ready', createWindow);

// Quitte l'application quand toutes les fenêtres sont fermées.
app.on('window-all-closed', () => {
    // Sur macOS, il est commun pour une application et leur barre de menu
    // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // Sur macOS, il est commun de re-créer une fenêtre de l'application quand
    // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
    if (mainWindow === null) {
        createWindow()
    }
});

// Dans ce fichier, vous pouvez inclure le reste de votre code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.

// https://medium.com/@kahlil/how-to-communicate-between-two-electron-windows-166fdbcdc469