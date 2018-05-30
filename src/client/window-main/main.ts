import {IpcChannels} from "../../_typescript-declarations/IpcChannels";

require("./index.html");

import {ipcRenderer} from "electron";


let modal: Window | null = null;
(document.querySelector("#generate") as HTMLButtonElement).addEventListener("click", () => {

    if(modal == null || modal.closed) {
        modal = window.open('', 'modal');
        console.log("open modal");
    } else {
        console.log("generate…");
        ipcRenderer.send(IpcChannels.WindowMain.RENDERER);
    }
});

ipcRenderer.on("message", (event: Event, message: string) => {
    console.log(message);
});
