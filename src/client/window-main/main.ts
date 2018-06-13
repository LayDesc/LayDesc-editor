/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import * as ts from "typescript";

import {EndOfLineState} from "typescript"


// import {IpcChannels} from "../../_typescript-declarations/IpcChannels";
//
//
// import {ipcRenderer} from "electron";
//
import {Editor} from "./script/Editor";
import {getDescription} from "./script/layDescDescription";

require("./index.html");
//
// let modal: Window | null = null;
// (document.querySelector("#generate") as HTMLButtonElement).addEventListener("click", () => {
//
//     if(modal == null || modal.closed) {
//         modal = window.open('', 'modal');
//         console.log("open modal");
//     } else {
//         console.log("generate…");
//         ipcRenderer.send(IpcChannels.WindowMain.RENDERER);
//     }
// });
//
// ipcRenderer.on("message", (event: Event, message: string) => {
//     console.log(message);
// });


declare const amdRequire: any;

declare interface selfMonaco extends Window {
    module: undefined;
    process: {
        browser: boolean,
    }

}

console.log(self);

// require node modules before loader.js comes in
const path = require('path');

function uriFromPath(_path: string) {
    let pathName = path.resolve(_path).replace(/\\/g, '/');
    if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
    }
    return encodeURI('file://' + pathName);
}

amdRequire.config({
    baseUrl: uriFromPath(path.join(__dirname, '../../../node_modules/monaco-editor/min'))
});

// workaround monaco-css not understanding the environment
(self as selfMonaco).module = undefined;
// workaround monaco-typescript not understanding the environment
(self as selfMonaco).process.browser = true;


amdRequire(['vs/editor/editor.main'], () => {
    const editor = new Editor();

    window.addEventListener("resize", () => {
        editor.editor.layout();
    });

    // monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    //     target: monaco.languages.typescript.ScriptTarget.ES5,
    //     allowNonTsExtensions: true
    // });

    monaco.languages.typescript.getTypeScriptWorker().then((value) => {
        console.log(value);
    });


    /***/

    editor.editor.onDidChangeCursorPosition((e) => {
        console.log(e.reason);
        console.log(e.source);
        console.log(e.position);
        console.log(e.secondaryPositions);
        console.log( editor.editor.getModel().getWordAtPosition(e.position) );

        const tokeniz = monaco.editor.tokenize(editor.editor.getModel().getValue(), "typescript");
        console.log(tokeniz);
    });

    editor.editor.onDidChangeModelContent(() => {
        onCodeChange();
    });

    function getService(): monaco.Promise<any> {
        return monaco.languages.typescript.getTypeScriptWorker()
            .then(worker => worker(editor.editor.getModel().uri))
    }

    function onCodeChange() {
        getService()
            .then(service => {
                return service.getEmitOutput(editor.editor.getModel().uri.toString())
            }, reason => {console.log(reason)})
            .then((result: ts.EmitOutput) => {
                if (result.emitSkipped) {
                    return false;
                }

                if (!result.outputFiles || !result.outputFiles[0]) {
                    return false;
                }

                return result.outputFiles[0].text;
            }, reason => {console.log(reason)})
            .then(text => {
                if (typeof text === 'string') {

                    text = text.replace(/import[^;|\n]*(;|\n)/gm, "");

                    console.log(text);
                }

                return !!text;
            }, reason => {console.log(reason)})
            .then(updated => {
                console.log(updated)
            }, reason => {console.log(reason)});
    }

    /***/

    monaco.languages.typescript.typescriptDefaults.addExtraLib(getDescription());
});
