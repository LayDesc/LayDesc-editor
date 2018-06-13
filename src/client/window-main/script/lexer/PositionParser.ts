import {Editor} from "../Editor";

export class PositionParser {
    private isEnabled = false;
    private readonly _cursorLinePosition: number;
    private readonly _linesInformation = new LinesInformation();
    private readonly _editor: Editor;

    constructor(editor: Editor) {
        this._editor = editor;
        this._cursorLinePosition = editor.cursorPosition.lineNumber;

        this._initLinesInformations();
    }

    public createUserInterface(): Promise<string | HTMLElement> {
        return new Promise((resolve, reject) => {
            if(this.isEnabled) {
                resolve( PositionParser._initUserInterface() );
            } else {
                reject(`PoistionParser.isEnable is ${this.isEnabled}. indexProperties.x.indexInLines or indexProperties.y.indexInLines is null`);
            }
        });
    }

    private static _initUserInterface() {
        const UIContainer = document.createElement("div");
        UIContainer.style.backgroundColor = "white";
        UIContainer.style.width = "100px";
        UIContainer.style.height = "100px";
        UIContainer.style.position = "absolute";
        UIContainer.style.top = "50px";
        UIContainer.style.left = "50%";
        UIContainer.style.transform = "translate(-50%)";

        return UIContainer;
    }

    private _initLinesInformations() {
        let linePosition = this._cursorLinePosition;
        while( linePosition < this._editor.editor.getModel().getLineCount() ) {
            const newLine = this._editor.editor.getModel().getLineContent(linePosition);

            this._linesInformation.lines.push({
                value: newLine,
                linePosition: linePosition,
            });

            const x_PropertyParsed = newLine.match(/\s*x\s*:\s*([-.0-9]*)/);
            if(x_PropertyParsed !== null) this._init_x_LinesInformation(linePosition, x_PropertyParsed[1]);

            const y_PropertyParsed = newLine.match(/\s*y\s*:\s*([-.0-9]*)/);
            if(y_PropertyParsed !== null) this._init_y_LinesInformation(linePosition, y_PropertyParsed[1]);

            // @todo regex with ";"
            if(newLine.indexOf("}") > 0) break;
            linePosition++;
        }

        this.isEnabled = this._linesInformation.indexProperties.x.indexInLines !== null && this._linesInformation.indexProperties.y.indexInLines !== null;
    }

    private _init_x_LinesInformation(linePosition: number, x_StringValue: string) {
        this._linesInformation.set_x_IndexLines(linePosition);
        this._linesInformation.set_x_ValueIsString(x_StringValue);
    }
    private _init_y_LinesInformation(linePosition: number, y_StringValue: string) {
        this._linesInformation.set_y_IndexLines(linePosition);
        this._linesInformation.set_y_ValueIsString(y_StringValue);
    }
}

class LinesInformation {
    lines: ILines[] = [];
    indexProperties: IIndexProperties = {
        x: {
            indexInLines: null,
            value: 0,
        },
        y: {
            indexInLines: null,
            value: 0,
        }
    };

    constructor() {
    }

    set_x_ValueIsString(x: string) {
        this.indexProperties.x.value = parseFloat(x);
    }
    set_y_ValueIsString(y: string) {
        this.indexProperties.y.value = parseFloat(y);
    }

    set_x_IndexLines(indexLine: number) {
        this.indexProperties.x.indexInLines = indexLine;
    }
    set_y_IndexLines(indexLine: number) {
        this.indexProperties.y.indexInLines = indexLine;
    }

    addLine(line: ILines) {
        this.lines.push(line);
    }
}

interface IIndexProperties {
    x: IIndexPropertiesData;
    y: IIndexPropertiesData;
}

interface IIndexPropertiesData {
    indexInLines: number | null;
    value: number;
}

interface ILines {
    value: string;
    linePosition: number;
}