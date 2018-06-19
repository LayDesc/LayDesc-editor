import {Editor} from "../Editor";

interface NewPosition {
    x: number,
    y: number,
}

export class PositionParser {
    private isEnabled = false;
    private readonly _cursorLinePosition: number;
    private readonly _linesInformation = new LinesInformation();
    private readonly _editor: Editor;

    private _precedenteEvent = new Date().getTime();

    private _cursorPositionOnClick = {
        x: 0,
        y: 0,
    };
   newPostion: NewPosition | null = null;
    private _UIControl: HTMLDivElement | null = null;
    private _mouseDownEventFunction = (e: MouseEvent) => {
        console.log("down");
        this._cursorPositionOnClick = {
            x: e.clientX,
            y: e.clientY,
        };
        document.addEventListener("mouseup", this._mouseUpEventFunction);
        document.addEventListener("mousemove", this._mouseMoveFunction);
    };
    private _mouseUpEventFunction = () => {

        if(this.newPostion !== null) {
            this._linesInformation.set_x_ValueIsString(this.newPostion.x.toString());
            this._linesInformation.set_y_ValueIsString(this.newPostion.y.toString());
        }

        document.removeEventListener("mouseup", this._mouseUpEventFunction);
        document.removeEventListener("mousemove", this._mouseMoveFunction);
        if(this._UIControl !== null) this._UIControl.style.transform = "";
    };
    private _mouseMoveFunction = (e: MouseEvent) => {

        const UIPosition = {
            x: e.clientX - this._cursorPositionOnClick.x,
            y: e.clientY - this._cursorPositionOnClick.y,
        };

        if(this._UIControl !== null) this._UIControl.style.transform = `translate(${UIPosition.x}px, ${UIPosition.y}px)`;

        this.newPostion = {
            x: UIPosition.x + this._linesInformation.indexProperties.x.value,
            y: UIPosition.y + this._linesInformation.indexProperties.x.value,
        };


        const timing = new Date().getTime() - this._precedenteEvent;
        if(timing > 250) {

            console.log(timing);

            this._precedenteEvent = new Date().getTime();

            this._editor.editor.executeEdits(
                "set x y value",
                [
                    {
                        range: new monaco.Range(
                            (this._linesInformation.indexProperties.x.indexInLines as number),
                            0,
                            (this._linesInformation.indexProperties.x.indexInLines as number),
                            1000),
                        text: `x: ${this.newPostion.x},`,
                    },
                    {
                        range: new monaco.Range(
                            (this._linesInformation.indexProperties.y.indexInLines as number),
                            0,
                            (this._linesInformation.indexProperties.y.indexInLines as number),
                            1000),
                        text: `y: ${this.newPostion.y},`,
                    }
                ]
            )
        }
    };

    constructor(editor: Editor) {
        this._editor = editor;
        this._cursorLinePosition = editor.cursorPosition.lineNumber;

        this._initLinesInformations();
    }

    public createUserInterface(): Promise<string | HTMLElement> {
        return new Promise((resolve, reject) => {
            if(this.isEnabled) {
                resolve( this._initUserInterface() );
            } else {
                reject(`PoistionParser.isEnable is ${this.isEnabled}. indexProperties.x.indexInLines or indexProperties.y.indexInLines is null`);
            }
        });
    }

    private _initUserInterface() {
        const UIContainer = document.createElement("div");
        UIContainer.style.backgroundColor = "white";
        UIContainer.style.width = "400px";
        UIContainer.style.height = "250px";
        UIContainer.style.position = "absolute";
        UIContainer.style.top = "22px";
        UIContainer.style.left = "50%";
        UIContainer.style.transform = "translate(-50%)";
        UIContainer.style.boxShadow = "black 0px 4px 50px 20px";

        const UIControl = document.createElement("div");
        UIControl.style.backgroundColor = "blue";
        UIControl.style.width = "40px";
        UIControl.style.height = "40px";
        UIControl.style.borderRadius = "100%";
        UIControl.style.position = "absolute";
        UIControl.style.left = `${400 / 2}px`;
        UIControl.style.top = `${250 / 2}px`;

        this._UIControl = UIControl;
        UIContainer.appendChild(this._UIControl);

        this._UIControl.addEventListener("mousedown", this._mouseDownEventFunction);

        return UIContainer;
    }

    private _initLinesInformations() {
        let linePosition = this._cursorLinePosition;
        while( linePosition < this._editor.editor.getModel().getLineCount() ) {
            const newLine = this._editor.editor.getModel().getLineContent(linePosition);

            console.log("newLine", newLine);

            this._linesInformation.addLine({
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

        console.log("_linesInformation", this._linesInformation);
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
        let new_x_Value = parseFloat(x);
        if(Number.isNaN(new_x_Value)) new_x_Value = 0;
        this.indexProperties.x.value = new_x_Value;
    }
    set_y_ValueIsString(y: string) {
        let new_y_Value = parseFloat(y);
        if(Number.isNaN(new_y_Value)) new_y_Value = 0;
        this.indexProperties.y.value = new_y_Value;
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