import loremIpsum from "./script/loremIpsum";

require("./index.html");

import {ipcRenderer} from "electron";

console.log("coucou coucou");

ipcRenderer.on("message", (event: Event, message: string) => {
    console.log(message);
});

const page = document.createElement("div");
page.style.width = "1280px";
page.style.border = "solid";
page.style.borderColor = "black";
document.body.appendChild(page);

const reply = {
    height: page.getBoundingClientRect().height,
    width: page.getBoundingClientRect().width,
    top: page.getBoundingClientRect().top,
    left: page.getBoundingClientRect().left,
};

// https://medium.com/@kahlil/how-to-communicate-between-two-electron-windows-166fdbcdc469
ipcRenderer.send("reply", reply);

const pages: Array<string> = [];

loopWord(0, loremIpsum().split(" "), "", page, 500);

function loopWord(index: number, words: Array<string>, text: string, textContainer: HTMLDivElement, height: number) {

    const time = new Date().getTime();

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

    console.log(new Date().getTime() - time);
    console.log(pages);

    for(const page of pages){
        const pageContainer = document.createElement("div");
        pageContainer.innerHTML = page;
        pageContainer.style.border = "solid 1px black";
        pageContainer.style.width = "1280px";
        document.body.insertBefore(pageContainer, document.body.firstChild);
    }
    console.log(new Date().getTime() - time);
}
