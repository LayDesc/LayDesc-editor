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




