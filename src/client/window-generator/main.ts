/// <reference path="../../../static/layDesc.d.ts" />

import {ipcRenderer} from "electron";
import {IpcChannels} from "../../_typescript-declarations/IpcChannels";
import {Document} from "document/Document";
import {IDocumentData} from "document/IDocumentData";

require("./index.html");

console.log("window generator");

declare let layDescDocument: Document[];
let jsGeneratedFunction: Function;

const arrayOfWindowRender: Window[] = [];

ipcRenderer.on(IpcChannels.ElectronNode.EMIT_JS_GENERATED, (event: Event, args: IpcChannels.JS_GENERATED_data) => {

    jsGeneratedFunction = new Function(args[0]);

    try {
        console.log(layDescDocument);
        layDescDocument = [];
        jsGeneratedFunction();

        for (const doc of layDescDocument) {
            doc.generate().then( (value: IDocumentData) => {
                const valueToSend: IpcChannels.DOC_GENERATED_data = {
                    docName: value.name,
                    value: value,
                };
                ipcRenderer.send(IpcChannels.WindowGenerator.DOC_GENERATED, valueToSend);
            });
        }
    } catch (e) {
        console.log("js generated isn't ready to use");
    }
});
