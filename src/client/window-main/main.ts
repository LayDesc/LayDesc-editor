require("./index.html");

import {ipcRenderer} from "electron";

document.addEventListener("click", () => {

    // renderer process (mainWindow)
    let modal = window.open('', 'modal');
});

ipcRenderer.on("message", (event: Event, message: string) => {
    console.log(message);
});
