import loremIpsum from "./script/loremIpsum";

require("./index.html");

import {ipcRenderer} from "electron";

console.log("coucou coucou");

ipcRenderer.on("message", (event: Event, message: string) => {
    console.log(message);
});

const page = document.createElement("div");
page.style.width = "100px";
page.style.border = "solid";
page.style.borderColor = "black";
page.innerHTML = loremIpsum();
document.body.appendChild(page);

const reply = {
    height: page.getBoundingClientRect().height,
    width: page.getBoundingClientRect().width,
    top: page.getBoundingClientRect().top,
    left: page.getBoundingClientRect().left,
};

// https://medium.com/@kahlil/how-to-communicate-between-two-electron-windows-166fdbcdc469
ipcRenderer.send("reply", reply);

const canvas = document.createElement("canvas");