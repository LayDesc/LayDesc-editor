/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import {Editor} from "./script/Editor";
import {MonacoInitializer} from "./script/MonacoInitializer";

require("./index.html");

new MonacoInitializer(() => {
    const editor = new Editor();


    let isNumberIncremental = false;

    editor.editor.onDidChangeCursorPosition((e) => {
        console.log(editor.getWordAtPosition(e.position) );
        console.log(editor.getTokenAtPosition( e.position ));

        isNumberIncremental = editor.getTokenAtPosition(e.position).type === "number.ts";
    });

    editor.editor.onDidChangeModelContent(() => {
        editor.getJavascriptCompiled()
            .then((value) => {
                console.log("value", value);
            });
    });

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
                const newNumber = parseFloat(editor.getWordAtPosition(editor.editor.getPosition()).word) + 1;
                injectNumberAtPosition(
                    newNumber,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtPosition(editor.editor.getPosition()).startColumn,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtPosition(editor.editor.getPosition()).endColumn,
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
                const newNumber = parseFloat(editor.getWordAtPosition(editor.editor.getPosition()).word) - 1;

                injectNumberAtPosition(
                    newNumber,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtPosition(editor.editor.getPosition()).startColumn,
                    editor.editor.getPosition().lineNumber,
                    editor.getWordAtPosition(editor.editor.getPosition()).endColumn,
                );
            }
        }
    });
});
