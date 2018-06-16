export function testValue() {
    return `
import * as layDesc from 'main'
/**
 * layDesc internal
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
/** */

const doc: Document = new Document({
    arrayOfPage: [
        {
            containers: [
                {
                    position: {
                        x: 10,
                        y: 10,
                    },
                    texts: [
                        {
                            content: "hello"
                        }
                    ]
                }
            ],
            name: "hello",
            pageMargin: {
                bottom: 10,
                left: 10,
                right: 10,
                top: 45,
            },
            pageTemplateName: "hello",
            unit: UNIT.PX,
        }
    ]
});

console.log("coucou");

layDescDocument = [];
layDescDocument.push(doc);
console.log(layDescDocument);
    `
}