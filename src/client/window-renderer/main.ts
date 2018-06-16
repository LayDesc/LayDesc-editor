import loremIpsum from "./script/loremIpsum";
import {ipcRenderer} from "electron";
import {IpcChannels} from "../../_typescript-declarations/IpcChannels";

require("./index.html");

console.log("coucou coucou");

ipcRenderer.on("message", (event: Event, message: string) => {
    console.log(message);
});

ipcRenderer.on(IpcChannels.ElectronNode.RENDERER, () => {
    console.log("ok");
    test();
});

const page = document.createElement("div");
page.style.width = "1280px";
page.style.border = "solid";
page.style.borderColor = "black";
document.body.appendChild(page);

const pages: Array<string> = [];

loopWord(0, loremIpsum().split(" "), "", page, 500);

function loopWord(index: number, words: Array<string>, text: string, textContainer: HTMLDivElement, height: number) {

    const timeStart = new Date().getTime();

    while (index < words.length) {
        // textContainer.innerText = text.length > 0 ? `${text} ${words[index]}` : words[index];
        const span = document.createElement("span");
        span.innerHTML = text.length > 0 ? ` ${words[index]}` : words[index];
        textContainer.insertBefore(span, null);

        if (textContainer.getBoundingClientRect().height > height) {
            while (textContainer.firstChild) {
                textContainer.removeChild(textContainer.firstChild);
            }
            pages.push(text);
            text  = words[index];
        } else {
            text = text.length > 0 ? `${text} ${words[index]}` : words[index];
        }
        index++;
    }

    const timePageRendered = new Date().getTime() - timeStart;

    for(const page of pages){
        const pageContainer = document.createElement("div");
        pageContainer.innerHTML = page;
        pageContainer.style.border = "solid 1px black";
        pageContainer.style.width = "1280px";
        document.body.insertBefore(pageContainer, document.body.firstChild);
    }
    const timePageDrawEnded = new Date().getTime() - timeStart;

    // https://medium.com/@kahlil/how-to-communicate-between-two-electron-windows-166fdbcdc469
    ipcRenderer.send("reply", {
        pages: pages,
        timeStart: timeStart,
        timePageRendered: timePageRendered,
        timePageDrawEnded: timePageDrawEnded,
    });
}

document.addEventListener("click", () => {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    loopWord(0, loremIpsum().split(" "), "", page, 500);
});

function test() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    loopWord(0, loremIpsum().split(" "), "", page, 500);
}