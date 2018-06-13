declare const amdRequire: any;

declare interface selfMonaco extends Window {
    module: undefined;
    process: {
        browser: boolean,
    }

}

export class Editor {
    editor: monaco.editor.IStandaloneCodeEditor;

    constructor() {

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


        this.editor = monaco.editor.create(document.getElementById('editor') as HTMLElement, {
            value: `
import * as layDesc from 'main'
/**
 * layDesc internal
 */
type IRectangleContainerData = layDesc.containers.IRectangleContainerData
type IRectangleContainerSettings = layDesc.containers.IRectangleContainerSettings
type RectangleContainer = layDesc.containers.RectangleContainer
const RectangleContainer = layDesc.containers.RectangleContainer

type Document = layDesc.document.Document
const Document = layDesc.document.Document

type Font = layDesc.elements.Font
const Font = layDesc.elements.Font
type Image = layDesc.elements.Image
const Image = layDesc.elements.Image
type Text = layDesc.elements.Text
const Text = layDesc.elements.Text
type TextStyle = layDesc.elements.TextStyle
const TextStyle = layDesc.elements.TextStyle

type ANCHOR = layDesc.geometry.ANCHOR
const ANCHOR = layDesc.geometry.ANCHOR
type Padding = layDesc.geometry.Padding
const Padding = layDesc.geometry.Padding
type Position = layDesc.geometry.Position
const Position = layDesc.geometry.Position
type Rectangle = layDesc.geometry.Rectangle
const Rectangle = layDesc.geometry.Rectangle
type Size = layDesc.geometry.Size
const Size = layDesc.geometry.Size
type UNIT = layDesc.geometry.UNIT
const UNIT = layDesc.geometry.UNIT

type Horizontal = layDesc.guide.Horizontal
const Horizontal = layDesc.guide.Horizontal
type Vertical = layDesc.guide.Vertical
const Vertical = layDesc.guide.Vertical

type Page = layDesc.page.Page
const Page = layDesc.page.Page
type PageTemplate = layDesc.page.PageTemplate
const PageTemplate = layDesc.page.PageTemplate

const loremIpsum = layDesc.tools.loremIpsum
type RectangleContainerGenerator = layDesc.tools.RectangleContainerGenerator
const RectangleContainerGenerator = layDesc.tools.RectangleContainerGenerator
type TextMetric = layDesc.tools.TextMetric
const TextMetric = layDesc.tools.TextMetric
/** */

const doc: Document = new Document({
    arrayOfPage: [
        {
            containers: [],
            name: "hello",
            pageMargin: {
                bottom: 10,
                left: 10,
                right: 10,
                top: 10,
            },
            pageTemplateName: "hello",
            unit: UNIT.PX,
        }
    ]
});
        `,
            language: 'typescript',
            fontLigatures:  true,
            theme: "myCustomTheme",
        });
    }
}