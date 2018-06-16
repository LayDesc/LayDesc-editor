export function getEditorValue() {
    return `import * as layDesc from 'main'
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
                top: 10,
            },
            pageTemplateName: "hello",
            unit: UNIT.PX,
        }
    ]
});
`
}

export function concept(){
    return `
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
type ITextStyleSettings = layDesc.elements.ITextStyleSettings

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


enum USER_FONT {
    GT_AMERICA_COMPRESSED_MEDIUM = "GT-America-Compressed-Medium",
    GT_AMERICA_CONDENSED_MEDIUM  = "GT-America-Condensed-Medium",
    GT_AMERICA_MEDIUM            = "GT-America-Medium",
    GT_AMERICA_EXTENDED_MEDIUM   = "GT-America-Extended-Medium",
    GT_AMERICA_EXPANDED_MEDIUM   = "GT-America-Expanded-Medium",
}

const titleFontSetting: ITextStyleSettings = {
    font: {
        fontFamily: USER_FONT.GT_AMERICA_EXPANDED_MEDIUM,
        fontSize: 50,
    }
}

const card: Document = new Document({
    arrayOfPage: [
        {
            name: "card",
            containers: [
                {
                    position: {
                        x: 10,
                        y: 10,
                    },
                    texts: [
                        {
                            content: "LayDesc",
                            style: titleFontSetting,
                        }
                    ]
                }
            ]
        }
    ]
});

const a4: Document = new Document({
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
                top: 10,
            },
            pageTemplateName: "hello",
            unit: UNIT.PX,
        }
    ]
});
`
}

function menu() {
    return `
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
type ITextStyleSettings = layDesc.elements.ITextStyleSettings

type ANCHOR = layDesc.geometry.ANCHOR
const ANCHOR = layDesc.geometry.ANCHOR
type Padding = layDesc.geometry.Padding
const Padding = layDesc.geometry.Padding
type Position = layDesc.geometry.Position
const Position = layDesc.geometry.Position
type Rectangle = layDesc.geometry.Rectangle
const Rectangle = layDesc.geometry.Rectangle
type Size = layDesc.geometry.Size
type ISizeSettings = layDesc.geometry.ISizeSettings
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


enum USER_FONT {
    GT_AMERICA_COMPRESSED_MEDIUM = "GT-America-Compressed-Medium",
    GT_AMERICA_CONDENSED_MEDIUM  = "GT-America-Condensed-Medium",
    GT_AMERICA_MEDIUM            = "GT-America-Medium",
    GT_AMERICA_EXTENDED_MEDIUM   = "GT-America-Extended-Medium",
    GT_AMERICA_EXPANDED_MEDIUM   = "GT-America-Expanded-Medium",
}

const pageWidth = 210;

const pageSize: ISizeSettings = {
    width: pageWidth,
    height: pageWidth * (297/210),
}

const doc: Document = new Document({
    arrayOfPage: [
        {
            name: "menu example",
            containers: [
                {
                    texts: [
                        {
                            style: {
                                font: {
                                    fontFamily: USER_FONT.GT_AMERICA_MEDIUM,
                                    fontSize: 50,
                                },
                            },
                            content: "The Xerox Star:a retrospective",
                        },
                        {
                            style: {
                                font: {
                                    fontFamily: USER_FONT.GT_AMERICA_MEDIUM,
                                    fontSize: 20,
                                },
                            },
                            content: \`The Xerox Star has significantly affected the computer industry. In this retrospective, several of Star’s designers describe its important features, antecedents, design and development, evolution, and some lessons learned.

Xerox introduced the 8010 “Star” Information System in April of 1981. That introduction was an important event in the history of personal computing because it changed notions of how interactive systems should be designed. Several of Star’s designers, some of us responsible for the original design and others for recent improvements, describe in this article where Star came from, what is distinctive about it, and how the original design has changed. In doing so, we hope to correct some misconceptions about Star that we have seen in the trade press and to relate some of what we have learned from designing it.

For brevity, we use the name “Star” here to refer to both Star and its successor, ViewPoint. “ViewPoint” refers exclusively to the current product.\`
                        }
                    ]
                }
            ]
        }
    ]
});
`
}