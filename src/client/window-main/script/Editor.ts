import * as ts from "typescript";
import {getEditorValue} from "./getEditorValue";
import {getDescription} from "./layDescDescription";

declare const amdRequire: any;

declare interface selfMonaco extends Window {
    module: undefined;
    process: {
        browser: boolean,
    }

}

export class Editor {
    editor: monaco.editor.IStandaloneCodeEditor;

    get cursorPosition() {
        return this.editor.getPosition() as monaco.Position;
    };

    constructor() {

        this._setPersonalTheme();
        this._addLayDescLibrary();

        this.editor = monaco.editor.create(document.getElementById('editor') as HTMLElement, {
            value: getEditorValue(),
            language: 'typescript',
            fontLigatures:  true,
            theme: "myCustomTheme",
        });

        this._setAutoResizing();
    }

    private _setPersonalTheme() {
        monaco.editor.defineTheme('myCustomTheme', {
            base: 'vs-dark', // can also be vs-dark or hc-black
            inherit: true, // can also be false to completely replace the builtin rules
            rules: [
                { token: 'comment', foreground: 'ffa500', fontStyle: 'italic underline' },
                { token: 'comment.js', foreground: '008800', fontStyle: 'bold' },
                { token: 'comment.css', foreground: '0000ff' } // will inherit fontStyle from `comment` above
            ],
            colors: {}
        });
    }

    private _addLayDescLibrary() {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(getDescription());
    }

    private _setAutoResizing() {
        window.addEventListener("resize", () => {
            this.editor.layout();
        });
    }

    public getJavascriptCompiled() {
        return new Promise((resolve, reject) => {
            this.getTypescriptService()
                .then(
                    service => {
                        return service.getEmitOutput(this.editor.getModel().uri.toString())
                    },
                    reason => {
                        reject(reason)
                    })
                .then(
                    (result: ts.EmitOutput) => {
                        if (result.emitSkipped) {
                            return false;
                        }

                        if (!result.outputFiles || !result.outputFiles[0]) {
                            return false;
                        }

                        return result.outputFiles[0].text;
                    },
                    reason => {
                        reject(reason)
                    })
                .then(
                    text => {
                        if (typeof text === 'string') {
                            text = text.replace(/import[^;|\n]*(;|\n)/gm, "");
                            resolve(text);
                        } else {
                            reject(text);
                        }
                        return !!text;
                    },
                    reason => {
                        reject(reason)
                    })
                .then(
                    updated => {
                        console.log("typescript compilation updated: ", updated);
                    },
                    reason => {
                        console.log("typescript compilation ERROR: ", reason)
                    });
        });
    }

    public getTypescriptService(): monaco.Promise<any> {
        return monaco.languages.typescript.getTypeScriptWorker()
            .then(worker => worker(this.editor.getModel().uri))
    }

    public getTokenAtCursorPosition() {
        let tokenWord: monaco.Token | null = null;
        for(const token of this.getTokensAtLine(this.editor.getPosition().lineNumber)) {
            if(token.offset > this.editor.getPosition().column - 1) {
                break;
            }
            tokenWord = token;
        }
        return tokenWord as monaco.Token;
    }

    public getTokensAtLine(lineNumber: number) {
        return this.getAllTokensInCurrentText()[lineNumber - 1];
    }

    public getAllTokensInCurrentText() {
        return monaco.editor.tokenize(this.editor.getModel().getValue(), "typescript")
    }

    public getWordAtCursorPosition() {
        return this.editor.getModel().getWordAtPosition(this.editor.getPosition());
    }
}