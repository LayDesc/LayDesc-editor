export function experimentation() {
    return `


import * as layDesc from 'main'
/**
 * layDesc internal HEADER
 */

declare let layDescDocument: Document[];

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

const FONT_USER = layDesc.tools.FONT_USER

/** 
 * end HEADER
 */


const A3: layDesc.page.IPageSettings = {
    pageMargin: {
        bottom: 10,
        left: 10,
        right: 10,
        top: 10,
    },
    size: {
        height: 420,
        width: 297,
    }
}

const A4: layDesc.page.IPageSettings = {
    pageMargin: {
        bottom: 10,
        left: 10,
        right: 10,
        top: 10,
    },
    size: {
        height: 297,
        width: 210,
    }
}

const A5: layDesc.page.IPageSettings = {
    pageMargin: {
        bottom: 10,
        left: 10,
        right: 10,
        top: 10,
    },
    size: {
        height: 148.5,
        width: 105,
    }
}

// DOCUMENTS
const docA3 = new Document({
    name: "docA3",
});
const docA4 = new Document({
    name: "docA4"
});
const docA5 = new Document({
    name: "docA5"
});

const page1 = new Page({
    size: A3.size,
    pageMargin: A3.pageMargin,
    unit: UNIT.MM,
});

window.localStorage.clear();
const autoContaintHeight = 60;
const autoContainer = new layDesc.tools.RectangleContainerGenerator({
    texts: [
        {
            content: \`The Xerox Star has significantly affected the computer industry. In this retrospective, several of Star’s designers describe its Important features, antecedents, design and development, evolution, and some lessons learned.\`,
        }
    ],
    height: autoContaintHeight,
    width: 150,
    unit: UNIT.PX,
});

console.log("autoContainer", autoContainer.getTextLinesOfTexts()[0]); 


const arrayOfNewPage: Page[] = [];
let newPage = new Page({});
let newContainer = new RectangleContainer({texts: []});
for(const linesOfText of autoContainer.getTextLinesOfTexts()) {
    let lineHeight = linesOfText.style.font.lineHeight;
    let newLine = "";
    let heightOfText = 0;

    for(const line of linesOfText.lines) {
        console.log(line);
        heightOfText += lineHeight;
        if(heightOfText > autoContaintHeight) {
            newPage.addArrayOfContainers([
                newContainer,
            ]);
            arrayOfNewPage.push(newPage);
            newLine = "";
            heightOfText = 0;

            newPage = new Page({});
            newContainer = new RectangleContainer({texts: []});
        }
        newLine = (newLine === "") ? line : newLine + " " + line;
    }
    newContainer.texts.push(new layDesc.elements.Text({
        content: newLine,
        style: linesOfText.style,
    }));
}

console.log(arrayOfNewPage);

page1.addArrayOfContainers([
    {
        texts: [
            {
                content: "hello"
            }
        ]
    }
])
 
docA3.addPage(page1);

/**
 * layDesc internal FOOTER
 */

layDescDocument = [];
layDescDocument.push(docA3);
// layDescDocument.push(newDocument);

/**
 * end FOOTER
 */

    
`}
