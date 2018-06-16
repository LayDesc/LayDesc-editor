/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import {Editor} from "./script/Editor";
import {MonacoInitializer} from "./script/MonacoInitializer";
import {LIBRARY_WORD} from "./script/LIBRARY_WORD";
import {PositionParser} from "./script/lexer/PositionParser";

import {ipcRenderer} from "electron";
import {IpcChannels} from "../../_typescript-declarations/IpcChannels";

require("./index.html");

new MonacoInitializer(() => {
    const editor = new Editor();


    let isNumberIncremental = false;

    editor.editor.onDidChangeCursorPosition((e) => {
        console.log(editor.getWordAtCursorPosition() );
        console.log(editor.getTokenAtCursorPosition());

        isNumberIncremental = editor.getTokenAtCursorPosition().type === "number.ts";

        cleanUIPlugin();
        UIPlugin();
    });

    editor.editor.onDidChangeModelContent(() => {
        editor.getJavascriptCompiled()
            .then((value) => {
                console.log("value", value);
                ipcRenderer.send(IpcChannels.WindowMain.JS_GENERATED, [value]);
            });
    });


    let _userInterface: HTMLElement | null = null;
    function UIPlugin() {
        if (editor.getTokenAtCursorPosition().type === "identifier.ts") {
            if(editor.getWordAtCursorPosition().word === LIBRARY_WORD.POSITION) {
                new PositionParser(editor)
                    .createUserInterface()
                    .then((value) => {
                        if( typeof value === "string") {
                            console.error(value);
                        } else {
                            console.log("OK");
                            _userInterface = (value as HTMLElement);
                            document.body.appendChild(_userInterface );
                        }
                    });
            }
        }
    }
    function cleanUIPlugin() {
        if(_userInterface !== null) {
            document.body.removeChild(_userInterface);
            _userInterface = null;
        }
    }

    function injectNumberAtPosition(value: number, startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number) {
        editor.editor.executeEdits("float-incrementation-source", [
            {
                text: value.toString(),
                range: new monaco.Range(
                    startLineNumber,
                    startColumn,
                    endLineNumber,
                    endColumn,
                ),
            }
        ]);
    }

    const incrementalNumberAction = editor.editor.addAction ({
        id: "increment-number",
        label: "increment-number",
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.UpArrow,
        ],
        run: () => {
            if (isNumberIncremental) {
                const newNumber = parseFloat(editor.getWordAtCursorPosition().word) + 1;
                injectNumberAtPosition(
                    newNumber,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtCursorPosition().startColumn,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtCursorPosition().endColumn,
                );
            }
        }
    });
    const decrementalNumberAction = editor.editor.addAction ({
        id: "decremental-number",
        label: "decremental-number",
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.DownArrow,
        ],
        run: () => {
            if (isNumberIncremental) {
                const newNumber = parseFloat(editor.getWordAtCursorPosition().word) - 1;

                injectNumberAtPosition(
                    newNumber,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtCursorPosition().startColumn,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtCursorPosition().endColumn,
                );
            }
        }
    });
});
