export function presentation() {
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

let pageWidth = 210;
let pageHeight = pageWidth / (210/297);

const documentMargin = 10;

const gutter = 5;

const documentFontSize = 12;

let topTextPosition = pageHeight / 3;

const pStyle: layDesc.elements.ITextStyleData = {
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaMedium,
        fontSize: documentFontSize,
        letterSpacing: 0,
        lineHeight: documentFontSize * 11 / 11,
        unit: UNIT.PX,
    },
    space: {
        bottom: 0,
        left: 40,
        right: 0,
        top: 0,
    },
    unit: UNIT.PT,
};

const pStyleAfter: layDesc.elements.ITextStyleData = {
    font: pStyle.font,
    unit: pStyle.unit,
    space: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0,
    }
};

const titleStyle: layDesc.elements.ITextStyleSettings = {
    font: {
        fontFamily: FONT_USER.Reckless.RecklessMedium,
        fontSize: pStyle.font.fontSize * 5,
        lineHeight: pStyle.font.lineHeight * 5,
    },
    unit: pStyle.unit,
    space: pStyle.space,
};

const newDocument = new Document({
    name: "new doc",
    scale: 11 / 11,
    arrayOfPage: [
        {
            containers: [
                {
                    texts: [
                        {
                            content: \`The Xerox Star : A retrospective\`,
                            style: titleStyle,
                        },
                    ],
                    position: {
                        x: documentMargin,
                        y: documentMargin,
                    },
                    size: {
                        height: 100,
                        width: pageWidth - (gutter * 2),
                    }
                },
                {
                    position: {
                        x: documentMargin,
                        y: topTextPosition,
                    },
                    texts: [
                        {
                            content: "Mouse. An interactive computer system must provide a way for users to indicate which operations they want and what data they want those operations to be performed on. Users of early interactive systems specified operations and operands via commands and data descriptors (such as text line numbers). As video display terminals became common, it became clear that it was often better for users to specify operands – and sometimes operations – by pointing to them on the screen. It also became clear that graphic applications should not be controlled solely with a keyboard. In the sixties and seventies, people invented many different pointing devices: the light pen, the trackball, the joystick, cursor keys, the digitizing tablet, the touch screen, and the mouse.",
                            style: pStyle,
                        },
                        {
                            content: "Like other pointing devices, the mouse allows easy selection of objects and triggering of sensitive areas on the screen. The mouse differs from touch screens, light pens, and digitizing pads in that it is a relative pointing device: the movement of the pointer on the screen depends upon mouse movement rather than position. Unlike light pens, joysticks, and digitizing pads, the mouse (and the corresponding pointer on the screen) stays put when the user lets go of it.",
                            style: pStyleAfter,
                        },
                        {
                            content: "To achieve satisfactory mouse-tracking performance, Star handles the mouse at a very low level. In some workstations, the window system handles mouse tracking, with the result that the mouse pointer often jerks around the screen and may even freeze for seconds at a time, depending upon what else the system is doing. The mouse is a hand-eye coordination device, so if the pointer lags, users just keep moving the mouse. When the system catches up, the mouse moves beyond the user’s target. We at Xerox considered this unacceptable.",
                            style: pStyleAfter,
                        }
                    ],
                    size: {
                        width: ((pageWidth - (documentMargin * 2) ) / 2) - gutter,
                        height: pageHeight - documentMargin - topTextPosition,
                    },
                    unit: UNIT.MM,
                    cssExtended: {}
                },
                {
                    position: {
                        x: documentMargin + ( (pageWidth - documentMargin * 2) / 2 ),
                        y: topTextPosition,
                    },
                    texts: [
                        {
                            content: "Star was designed as an office automation system. The idea was that professionals in a business or organization would have workstations on their desks and would use them to produce, retrieve, distribute, and organize documentation, presentations, memos, and reports. All of the workstations in an organization would be connected via Ethernet and would share access to file servers, printers, etc.",
                            style: pStyle,
                        },
                        {
                            content: "Important aspects of Star can be found in the lowest levels of its architecture: the machine and the network of which it is a part.",
                            style: pStyleAfter,
                        },
                        {
                            content: "Time-shared systems, dominant through the sixties and seventies, allow sharing of expensive resources like printers and large data stores among many users and help assure the consistency of data that many must use. Timesharing has the disadvantages that all users depend upon the continued functioning of the central computer and that system response degrades as the number of users increases",
                            style: pStyleAfter,
                        }
                    ],
                    size: {
                        width: ((pageWidth - (documentMargin * 2) ) / 2) - gutter,
                        height: pageHeight - documentMargin - topTextPosition,
                    },
                }
            ],
            pageMargin: {
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
            },
            size: {
                height: pageHeight,
                width: pageWidth,
            },
            pageTemplateName: "right",
            unit: UNIT.MM,
        }
    ],
    guides: {
        show: true,
        horizontal: [
            {y: 10},
            {y: pageHeight - 10},
            {y: topTextPosition},
        ],
        vertical: [
            {x: 10},
            {x: pageWidth - 10},
        ]
    },
    pageTemplates: [
        {
            name: "left",
            pageMargin: {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
            },
            containers: [
                {
                    texts: [
                        {
                            content: "page number",
                        }
                    ],
                }
            ],
            size: {
                height: pageHeight,
                
            },
            unit: UNIT.MM,
        }
    ]
});

newDocument.addPage({
    containers: [
        {
            texts: [
                {
                    style: titleStyle,
                    content: "text other"
                },
            ],
            size: {
                width: pageWidth / 3,
                height: pageHeight,
            },

        }
    ],
    size: {
        height: pageHeight,
        width: pageWidth,
    }
});

pageWidth = pageHeight / 2;
pageHeight = pageWidth * (210/297);
topTextPosition = -57;

let largeTitle: layDesc.elements.ITextStyleSettings = {
    font: {
        fontFamily: titleStyle.font.fontFamily,
        letterSpacing: titleStyle.font.letterSpacing,
        fontSize: titleStyle.font.fontSize * 2,
        lineHeight: titleStyle.font.lineHeight * 2,
        unit: titleStyle.font.unit,
    },
    space: titleStyle.space,
    unit: titleStyle.unit,
};


const card = new Document({
    name: "card",
    scale: 6 / 10,
    arrayOfPage: [
        {
            containers: [
                {
                    texts: [
                        {
                            content: \`LayDesc\`,
                            style: largeTitle,
                        },
                    ],
                    position: {
                        x: documentMargin,
                        y: documentMargin,
                    },
                    size: {
                        height: 100,
                        width: pageWidth - (gutter * 2),
                    }
                },
                {
                    texts: [
                        {
                            content: \`layout description
                            tools\`,
                            style: titleStyle,
                        },
                    ],
                    position: {
                        x: 10,
                        y: topTextPosition,
                    },
                    size: {
                        width: pageWidth,
                        height: pageHeight,
                    },
                    anchor: ANCHOR.BOTTOM_LEFT,
                }
            ],
            pageMargin: {
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
            },
            size: {
                height: pageHeight,
                width: pageWidth,
            },
            pageTemplateName: "left",
            unit: UNIT.MM,
        }
    ],
    guides: {
        show: false,
        horizontal: [
            {y: 10},
            {y: pageHeight - 10},
            {y: topTextPosition},
        ],
        vertical: [
            {x: 10},
            {x: pageWidth - 10},
        ]
    },
    pageTemplates: [
        {
            name: "left",
            pageMargin: {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
            },
            containers: [
                {
                    texts: [
                        {
                            content: "page number",
                        }
                    ],
                }
            ],
            size: {
                height: pageHeight,
                width: pageWidth,
            },
            unit: UNIT.MM,
        }
    ]
});


/**
 * layDesc internal FOOTER
 */

layDescDocument = [];
layDescDocument.push(newDocument, card);
// layDescDocument.push(newDocument);

/**
 * end FOOTER
 */
`}
