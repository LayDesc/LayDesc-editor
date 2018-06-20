/// <reference path="../../../static/layDesc.d.ts" />

import loremIpsum from "./script/loremIpsum";
import {ipcRenderer} from "electron";
import {IpcChannels} from "../../_typescript-declarations/IpcChannels";
import {IDocumentData} from "document/IDocumentData";
import {LayDescRenderer} from "./layDescRenderer/LayDescRenderer";

require("./index.html");


let layDescRenderer: LayDescRenderer | null = null;

ipcRenderer.on(IpcChannels.ElectronNode.EMIT_DOC_GENERATED, (event: Event, documentData: IDocumentData) => {
    console.log(documentData);
    if(layDescRenderer === null) {
        layDescRenderer = new LayDescRenderer(document.body, documentData);
    } else {
        layDescRenderer.layDescDocumentData = documentData;
    }
});




let initialeMousePosition = {
    x: 0,
    y: 0,
};
const mouseMouveFunction = (e: MouseEvent) => {
    currentPosition.x = (e.clientX - initialeMousePosition.x);
    currentPosition.y = (e.clientY - initialeMousePosition.y);

    console.log(currentPosition.x);

    document.body.style.transform = `translate(${translateValue.x + currentPosition.x}px, ${translateValue.y + currentPosition.y}px) scale(${currentScale}, ${currentScale})`;
};
const mouseupFunction = () => {
    document.removeEventListener("mousemove", mouseMouveFunction);
    document.removeEventListener("mouseup", mouseupFunction);

    translateValue.x = translateValue.x + currentPosition.x;
    translateValue.y = translateValue.y + currentPosition.y;
};

let currentScale = 1;
const currentPosition= {
    x: 0,
    y: 0,
};

const translateValue = {
    x: 0,
    y: 0,
};

document.addEventListener("mousedown", (e) => {
    initialeMousePosition.x = e.clientX;
    initialeMousePosition.y = e.clientY;

    console.log(e);
    if(e.altKey) {
        currentScale -= 0.1;
        document.body.style.transform = `translate(${translateValue.x}px, ${translateValue.y}px) scale(${currentScale}, ${currentScale})`;
    } else if (e.ctrlKey) {
        currentScale += 0.1;
        document.body.style.transform = `translate(${translateValue.x}px, ${translateValue.y}px) scale(${currentScale}, ${currentScale})`;
    } else {
        document.addEventListener("mousemove", mouseMouveFunction);
        document.addEventListener("mouseup", mouseupFunction);
    }
});

document.body.style.userSelect = "none";
document.body.style.cursor = "default";




