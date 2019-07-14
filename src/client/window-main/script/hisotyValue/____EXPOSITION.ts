export function ____EXPOSITION() {
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

enum FILTER {
    normal = "normal",
    multiply = "multiply",
    screen = "screen",
    overlay = "overlay",
    darken = "darken",
    lighten = "lighten",
    colorDodge = "color-dodge",
    colorBurn = "color-burn",
    hardLight = "hard-light",
    softLight = "soft-light",
    difference = "difference",
    exclusion = "exclusion",
    hue = "hue",
    saturation = "saturation",
    color = "color",
    luminosity = "luminosity",
}


interface PageColumn {
    columns?: number,
    columnGap?: number,
}

/** 
 * end HEADER
 */

const A3marginValue = 10;
const A3LeftMarginValue = A3marginValue * 2;
const marginShow = false;


// A3
const A3: layDesc.page.IPageSettings = {
    pageMargin: {
        bottom: 10,
        left: 10,
        right: 10,
        top: 10,
    },
    size: {
        height: 420 + (8 * 10),
        width: 297 + (8 * 10),
    }
}

const A3rotate: layDesc.page.IPageSettings = {
    pageMargin: A3.pageMargin,
    size: {
        height: A3.size.width,
        width: A3.size.height,
    }
};
A3rotate.size.width = A3.size.height;
A3rotate.size.height = A3.size.width;

const A3Guides: layDesc.guide.IGuideData = {
    unit: UNIT.PX,
    show: marginShow,
    horizontal: [
        {y: A3marginValue},
        {y: A3.size.height - A3marginValue},

        {y: A3.size.height / 3 - A3marginValue / 2 },
        {y: A3.size.height / 3 + A3marginValue / 2 },

        {y: A3.size.height / 3 * 2 - A3marginValue / 2 },
        {y: A3.size.height / 3 * 2 + A3marginValue / 2 },
    ],
    vertical: [
        {x: A3LeftMarginValue},
        {x: A3.size.width - A3marginValue},

        {x: A3.size.width / 2 + A3LeftMarginValue / 2 - A3marginValue},
        {x: A3.size.width / 2 + A3LeftMarginValue / 2},
    ]
}

const A3StyleTitle: layDesc.elements.ITextStyleSettings = {
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaExtendedMedium,
        fontSize: 30,
        lineHeight: 30,
        unit: UNIT.PX,
    },
}
const A3StyleSubtitle: layDesc.elements.ITextStyleSettings = {
    space: {
        top: 1,
    },
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaExtendedMedium,
        fontSize: 18,
        lineHeight: 30,
        unit: UNIT.PX,
    }
}
const A3Stylesignature: layDesc.elements.ITextStyleSettings = {
    space: {
        top: 1,
    },
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaExtendedMedium,
        fontSize: 10,
        lineHeight: 10,
        unit: UNIT.PX,
    }
}
const A3StyleH3: layDesc.elements.ITextStyleSettings = {
    space: {
        top: 8,
        bottom: 2,
    },
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaExpandedMedium,
        fontSize: 10,
        lineHeight: 12,
        unit: UNIT.PX,
    }
}
const A3StyleH4: layDesc.elements.ITextStyleSettings = {
    space: {
        top: 3,
        left: 3
    },
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaExtendedMedium,
        fontSize: 8,
        lineHeight: 10,
        unit: UNIT.PX,
    }
}
const A3StyleP: layDesc.elements.ITextStyleSettings = {
    space: {
        top: 0,
    },
    font: {
        fontFamily: FONT_USER.GT_AMERICA.GTAmericaMedium,
        fontSize: 7,
        lineHeight: 10,
        unit: UNIT.PX,
    }
}
const A3StylePSuite: layDesc.elements.ITextStyleSettings = {
    space: {
        top: 0,
        left: 3,
    },
    font: A3StyleP.font,
}

// A4
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
const A4Guides: layDesc.guide.IGuideData = {
    unit: UNIT.PX,
    show: marginShow,
    horizontal: [
        {y: A3marginValue},
        {y: A4.size.height - A3marginValue},

        {y: A4.size.height / 3 - A3marginValue / 2 },
        {y: A4.size.height / 3 + A3marginValue / 2 },

        {y: A4.size.height / 3 * 2 - A3marginValue / 2 },
        {y: A4.size.height / 3 * 2 + A3marginValue / 2 },
    ],
    vertical: [
        {x: A3LeftMarginValue},
        {x: A4.size.width - A3marginValue},

        {x: A4.size.width / 2 + A3LeftMarginValue / 2 - A3marginValue},
        {x: A4.size.width / 2 + A3LeftMarginValue / 2},
    ]
}

// DOCUMENTS
const docA3 = new Document({
    name: "docA3",
    guides: A3Guides,
});

const docA4 = new Document({
    name: "docA4",
    guides: A4Guides,
});

const arrayOfDocuments: Document[] = [];
arrayOfDocuments.push(docA3);


// PAGE A3 –––––
const A3page0 = new Page({
    size: A3.size,
    pageMargin: A3.pageMargin,
    unit: UNIT.PX,
});
const A3page1 = new Page({
    size: A3.size,
    pageMargin: A3.pageMargin,
    unit: UNIT.PX,
});
const A3page2 = new Page({
    size: A3.size,
    pageMargin: A3.pageMargin,
    unit: UNIT.PX,
});

const filterColor = {
    r: 2,
    g: 1,
    b: 0,
};

const colorPuissance = 100;

// example 1.1 (p.2)
// example 3.1 (p.2)
const pageColumn: PageColumn = {
    columnGap: 10,
    columns: 2,
}
A3page1.addArrayOfContainers([
    {
        texts: [
            {
                // example 2.1 (p. 2)
                content: \`The Lisa Computer System\`,
                style: A3StyleTitle,
            },
            {
                content: \`Apple designs a new kind of machine.\`,
                style: A3StyleSubtitle,
            }
        ],
        unit: UNIT.PX,
        size: {
            width: A3.size.width - A3marginValue - A3LeftMarginValue,
            height: A3.size.height / 3 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: A3marginValue,
        }
    },
    {
        texts: [
            {
                content: \`Reprinted from Byte, issue 2/1983, pp. 33-50.\`,
                style: A3Stylesignature,
            }
        ],
        unit: UNIT.PX,
        size: {
            width: A3.size.width - A3marginValue - A3LeftMarginValue,
            height: A3.size.height / 3 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: (A3.size.height / 3 - A3marginValue) - A3Stylesignature.font.lineHeight,
        }
    },
    {
        texts: [
            {
                style: A3StyleP,
                content: \`I had an interesting conversation with an engineer on a recent flight from San Francisco to New York. He knew only a little about microcomputers, but he was aware that their presence is slowly becoming more common in the workplace. “Sure, the industry is healthy, but it’s still only reaching a few people,” he said. “Most people won’t use computers – they’re afraid of them, they don’t know what to use them for, or it’s too much trouble to use them. Before computers become really profitable, they’re going to have to be very easy to use. They have to be simpler. They’ve got to be useful in the office.”\`
            },
            {
                style: A3StylePSuite,
                content: \`He continued, “We’ve got to stop using paper – which means the computer has to do word processing, filing, electronic mail, everything – or it’ll be too much trouble having some things on the computer and others on paper. Then you’ve got to be able to talk to other computers – other computers like yours and some big corporate computer that’s halfway across the country. Sure, it’s a lot of stuff, but when you get all that together, then you’ll see computers really take off.”\`,
            },
            {
                style: A3StylePSuite,
                content: \`What could I say? Not very much, for two reasons. First, he was absolutely right – we need all that and more before computers become as commonplace as color TVs and electric typewriters. Second, I had agreed not to talk about a computer I had just seen that meets many of his points: Apple Computer’s highly secret Lisa computer (see photo 1).\`
            },
            {
                style: A3StyleH3,
                content: \`The Lisa at Work\`
            },
            {
                style: A3StyleP,
                content: \`Before we take a detailed look at what the Lisa is and how it came about, let’s look at an example of what it can do. Suppose I’m writing a report for my boss and I want to prepare a chart to illustrate a certain point. With a few movements of the mouse (more on this pointing device later), I “tear off” a sheet of Lisa Graph “paper” (thus activating a program called Lisa Calc and displaying an empty grid on the screen) and give it the heading “Annual Sales.” I then type my numbers into the grid, name the graph and the x and y axes, and request a bar graph. Voilà: I get the bar graph (superimposed on top of the data) shown in photo 2a. At this point, I can simply print the graph or save it for inclusion with my report, but I’m not satisfied with the way it looks. I then use the mouse to “cut” the graph from the Lisa Graph paper and put it in a temporary storage place called the clipboard. I can then “throw away” the Lisa Graph “paper” I was using.\`
            },
            {
                style: A3StylePSuite,
                content: \`My next step is to “tear off” a sheet of Lisa Calc “paper” and paste my “Annual Sales” bar chart from the clipboard onto it. Photo 2b shows the result. I want to make the bars darker, so I use the mouse to move the cursor (the arrow pointing diagonally up in photo 2b) onto the rectangle and tell the computer that I want to work on that bar by clicking the button on top of the mouse twice. (I could almost as easily have selected all four bars, but I’ll just do one here.) As a result, the bar is selected, as shown in photo 2c. (In the Lisa system, you first select what you want to work on, then you select the action you want performed.) The small black squares that appear on the edge of the object are called handles; not only do they show which object has been selected, they also serve as “handles” by which the cursor can move or alter a shape.\`
            },
        ],
        cssExtended: {
                "columns": (pageColumn.columns === void 0) ? "0" : pageColumn.columns.toString(),
                "column-gap": (pageColumn.columnGap === void 0)? "0px" : pageColumn.columnGap + "px",
        },
        unit: UNIT.PX,
        size: {
            width: A3.size.width - A3marginValue - A3LeftMarginValue,
            height: (A3.size.height / 3) * 2 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: (A3.size.height / 3 + A3marginValue),
        }
    }
])

// example 3.2 (p.2)
const filter = FILTER.multiply;

A3page2.addArrayOfContainers([
    {
        texts: [
            {
                style: A3StyleP,
                content: \`This example conveys only a fraction of the speed and the ease of use associated with the Lisa computer and the programs that go with it. Now that we’ve seen the system at work, let’s take a look at what makes it so different.\`
            },
            {
                style: A3StyleH3,
                content: \`Foundationsof the Lisa Design\`
            },
            {
                style: A3StyleP,
                content: \`The design effort that resulted in the Lisa computer is remarkably innovative because the designers did what designers should do – define the product’s prospective customers, determine their needs, and then design a product to meet those needs. Apple was also willing to give its designers enough time and money (with no marketing restrictions attached) to first design and then create a computer that redefines the expression “state of the art.” Granted, the Lisa’s designers drew heavily on previous work done at Xerox PARC (Palo Alto Research Center), but they refined several borrowed elements and combined them with numerous innovations. (For further information on the design process, see “An Interview with Wayne Rosing, Bruce Daniels, and Larry Tesler” on page 90.)\`
            },
            {
                style: A3StylePSuite,
                content: \`Apple started this project with the intention of creating not only a product but the foundation for a whole new computer technology, one that would create computers literally anybody can use. The company’s first task was to devise a new user interface – that is, a new and better way for humans to interact with the computer. The result was an internal (to Apple Computer Inc.) “User Interface Standards” document that describes how a user interacts with the Lisa system.\`
            },
            {
                style: A3StylePSuite,
                content: \`Although the Lisa design has several Important elements, four stand out: the machine’s graphics-mouse orientation, the “desktop” and “data-as-concrete-object” metaphors, and the integrated design of the hardware and software. Let’s look at each of these in turn.\`
            },
            {
                style: A3StyleH4,
                content: \`The graphics-mouse orientation:\`
            },
            {
                style: A3StyleP,
                content: \`The traditional text display and keyboard input device make for a computer that is – let’s face it – not too easy to use. Apple decided that the graphics resolution of the machine had to be high enough to use pictures (often called icons by Apple) in place of text. (For example, see the icons on the right-hand side of photo 2a.) Pictures are more easily recognized and understood than text. Because of this, you can probably figure out that the garbage-can icon in photo 2a is used to throw something away.\`
            },
            {
                style: A3StyleP,
                content: \`Apple also knew that it needed a new, easier-to-use input device to move the frequently used arrow-shaped cursor. The designers passed over such devices as light pens and touch-sensitive video panels in favor of the mouse, a pointing device used in several Xerox PARC machines. The mouse, which is about the size of a pack of cigarettes, has a small bearing on the bottom and one or more buttons on the top (see photo 3). When you hold it in your hand and slide it across a flat surface, the mouse sends signals to the computer, which guide the video cursor in the direction that you’ve moved the mouse. The mouse Apple designed has only one button; Apple broke with the conventional wisdom of two- and three-button mice after user tests indicated that people aren’t always sure which button to push on a multiple-button mouse.\`
            },
            
        ],
        cssExtended: {
                "columns": (pageColumn.columns === void 0) ? "0" : pageColumn.columns.toString(),
                "column-gap": (pageColumn.columnGap === void 0)? "0px" : pageColumn.columnGap + "px",
        },
        unit: UNIT.PX,
        size: {
            width: A3.size.width - A3marginValue - A3LeftMarginValue,
            height: (A3.size.height / 3) * 2 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: (A3.size.height / 3 + A3marginValue),
        }
    },
    {
        texts: [],
        position: {
            x: 10,
            y: A3marginValue,
        },
        cssExtended: {
            
            backgroundColor: "rgb(" + filterColor.r * colorPuissance + ", " + filterColor.g * colorPuissance  + ", " + filterColor.b * colorPuissance  + ")",
            backgroundImage: "url(../../../static/img/altost1.jpg)",
            backgroundSize: "cover",

            // example 1.2 (p.3)
            // example 3.3 (p.2)
            "background-blend-mode": filter,
        },
        unit: UNIT.PX,
        anchor: ANCHOR.TOP_RIGHT,
        size: {
            width: 35 * 10,
            height: 41 * 10,
        }
    }
])

// PAGE  A4 —————

const A4page0 = new Page({
    size: A4.size,
    pageMargin: A4.pageMargin,
    unit: UNIT.PX,
});
const A4page1 = new Page({
    size: A4.size,
    pageMargin: A4.pageMargin,
    unit: UNIT.PX,
});
const A4page2 = new Page({
    size: A4.size,
    pageMargin: A4.pageMargin,
    unit: UNIT.PX,
});
A4page1.addArrayOfContainers([
    {
        texts: [
            {
                content: \`The Lisa
                Computer System\`,
                style: A3StyleTitle,
            },
            {
                content: \`Apple designs a new kind of machine.\`,
                style: A3StyleSubtitle,
            }
        ],
        unit: UNIT.PX,
        size: {
            width: A4.size.width - A3marginValue - A3LeftMarginValue,
            height: A4.size.height / 3 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: A3marginValue,
        }
    },
    {
        texts: [
            {
                content: \`Reprinted from Byte, issue 2/1983, pp. 33-50.\`,
                style: A3Stylesignature,
            }
        ],
        unit: UNIT.PX,
        size: {
            width: A4.size.width - A3marginValue - A3LeftMarginValue,
            height: A4.size.height / 3 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: (A4.size.height / 3 - A3marginValue) - A3Stylesignature.font.lineHeight,
        }
    },
    {
        texts: [
            {
                style: A3StyleP,
                content: \`I had an interesting conversation with an engineer on a recent flight from San Francisco to New York. He knew only a little about microcomputers, but he was aware that their presence is slowly becoming more common in the workplace. “Sure, the industry is healthy, but it’s still only reaching a few people,” he said. “Most people won’t use computers – they’re afraid of them, they don’t know what to use them for, or it’s too much trouble to use them. Before computers become really profitable, they’re going to have to be very easy to use. They have to be simpler. They’ve got to be useful in the office.”\`
            },
            {
                style: A3StylePSuite,
                content: \`He continued, “We’ve got to stop using paper – which means the computer has to do word processing, filing, electronic mail, everything – or it’ll be too much trouble having some things on the computer and others on paper. Then you’ve got to be able to talk to other computers – other computers like yours and some big corporate computer that’s halfway across the country. Sure, it’s a lot of stuff, but when you get all that together, then you’ll see computers really take off.”\`,
            },
            {
                style: A3StylePSuite,
                content: \`What could I say? Not very much, for two reasons. First, he was absolutely right – we need all that and more before computers become as commonplace as color TVs and electric typewriters. Second, I had agreed not to talk about a computer I had just seen that meets many of his points: Apple Computer’s highly secret Lisa computer (see photo 1).\`
            },
            {
                style: A3StyleH3,
                content: \`The Lisa at Work\`
            },
            {
                style: A3StyleP,
                content: \`Before we take a detailed look at what the Lisa is and how it came about, let’s look at an example of what it can do. Suppose I’m writing a report for my boss and I want to prepare a chart to illustrate a certain point. With a few movements of the mouse (more on this pointing device later), I “tear off” a sheet of Lisa Graph “paper” (thus activating a program called Lisa Calc and displaying an empty grid on the screen) and give it the heading “Annual Sales.” I then type my numbers into the grid, name the graph and the x and y axes, and request a bar graph. Voilà: I get the bar graph (superimposed on top of the data) shown in photo 2a. At this point, I can simply print the graph or save it for inclusion with my report, but I’m not satisfied with the way it looks. I then use the mouse to “cut” the graph from the Lisa Graph paper and put it in a temporary storage place called the clipboard. I can then “throw away” the Lisa Graph “paper” I was using.\`
            },
            {
                style: A3StylePSuite,
                content: \`My next step is to “tear off” a sheet of Lisa Calc “paper” and paste my “Annual Sales” bar chart from the clipboard onto it. Photo 2b shows the result. I want to make the bars darker, so I use the mouse to move the cursor (the arrow pointing diagonally up in photo 2b) onto the rectangle and tell the computer that I want to work on that bar by clicking the button on top of the mouse twice. (I could almost as easily have selected all four bars, but I’ll just do one here.) As a result, the bar is selected, as shown in photo 2c. (In the Lisa system, you first select what you want to work on, then you select the action you want performed.) The small black squares that appear on the edge of the object are called handles; not only do they show which object has been selected, they also serve as “handles” by which the cursor can move or alter a shape.\`
            },
        ],
        cssExtended: {
                "columns": (pageColumn.columns === void 0) ? "0" : pageColumn.columns.toString(),
                "column-gap": (pageColumn.columnGap === void 0)? "0px" : pageColumn.columnGap + "px",
        },
        unit: UNIT.PX,
        size: {
            width: A4.size.width - A3marginValue - A3LeftMarginValue,
            height: (A4.size.height / 3) * 2 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: (A4.size.height / 3 + A3marginValue),
        }
    }
])

A4page2.addArrayOfContainers([
    {
        texts: [
            {
                style: A3StyleP,
                content: \`This example conveys only a fraction of the speed and the ease of use associated with the Lisa computer and the programs that go with it. Now that we’ve seen the system at work, let’s take a look at what makes it so different.\`
            },
            {
                style: A3StyleH3,
                content: \`Foundationsof the Lisa Design\`
            },
            {
                style: A3StyleP,
                content: \`The design effort that resulted in the Lisa computer is remarkably innovative because the designers did what designers should do – define the product’s prospective customers, determine their needs, and then design a product to meet those needs. Apple was also willing to give its designers enough time and money (with no marketing restrictions attached) to first design and then create a computer that redefines the expression “state of the art.” Granted, the Lisa’s designers drew heavily on previous work done at Xerox PARC (Palo Alto Research Center), but they refined several borrowed elements and combined them with numerous innovations. (For further information on the design process, see “An Interview with Wayne Rosing, Bruce Daniels, and Larry Tesler” on page 90.)\`
            },
            {
                style: A3StylePSuite,
                content: \`Apple started this project with the intention of creating not only a product but the foundation for a whole new computer technology, one that would create computers literally anybody can use. The company’s first task was to devise a new user interface – that is, a new and better way for humans to interact with the computer. The result was an internal (to Apple Computer Inc.) “User Interface Standards” document that describes how a user interacts with the Lisa system.\`
            },
            {
                style: A3StylePSuite,
                content: \`Although the Lisa design has several Important elements, four stand out: the machine’s graphics-mouse orientation, the “desktop” and “data-as-concrete-object” metaphors, and the integrated design of the hardware and software. Let’s look at each of these in turn.\`
            },
            {
                style: A3StyleH4,
                content: \`The graphics-mouse orientation:\`
            },
            {
                style: A3StyleP,
                content: \`The traditional text display and keyboard input device make for a computer that is – let’s face it – not too easy to use. Apple decided that the graphics resolution of the machine had to be high enough to use pictures (often called icons by Apple) in place of text. (For example, see the icons on the right-hand side of photo 2a.) Pictures are more easily recognized and understood than text. Because of this, you can probably figure out that the garbage-can icon in photo 2a is used to throw something away.\`
            },
            {
                style: A3StyleP,
                content: \`Apple also knew that it needed a new, easier-to-use input device to move the frequently used arrow-shaped cursor. The designers passed over such devices as light pens and touch-sensitive video panels in favor of the mouse, a pointing device used in several Xerox PARC machines. The mouse, which is about the size of a pack of cigarettes, has a small bearing on the bottom and one or more buttons on the top (see photo 3). When you hold it in your hand and slide it across a flat surface, the mouse sends signals to the computer, which guide the video cursor in the direction that you’ve moved the mouse. The mouse Apple designed has only one button; Apple broke with the conventional wisdom of two- and three-button mice after user tests indicated that people aren’t always sure which button to push on a multiple-button mouse.\`
            },
            
        ],
        cssExtended: {
                "columns": (pageColumn.columns === void 0) ? "0" : pageColumn.columns.toString(),
                "column-gap": (pageColumn.columnGap === void 0)? "0px" : pageColumn.columnGap + "px",
        },
        unit: UNIT.PX,
        size: {
            width: A4.size.width - A3marginValue - A3LeftMarginValue,
            height: (A4.size.height / 3) * 2 - A3marginValue * 2,
        },
        position: {
            x: A3LeftMarginValue,
            y: (A4.size.height / 3 + A3marginValue),
        }
    },
    {
        texts: [],
        position: {
            x: 10,
            y: A3marginValue,
        },
        cssExtended: {
            backgroundColor: "rgb(" + filterColor.r * colorPuissance + ", " + filterColor.g * colorPuissance + ", " + filterColor.b * colorPuissance + ")",
            backgroundImage: "url(../../../static/img/altost1.jpg)",
            backgroundSize: "cover",
            width: 123+"px",
            height: 149+"px",

            "background-blend-mode": filter,
        },
        unit: UNIT.PX,
        anchor: ANCHOR.TOP_RIGHT,
    }
])

// PAGE LANDSCAPE

const A4Landscape_page0 = new Page({
    size: A3rotate.size,
    pageMargin: A4.pageMargin,
    unit: UNIT.PX,
});

const text: layDesc.containers.IRectangleContainerSettings = {
    texts: [
        {
            //example 2.1 (p.4)
            content: \`Team Xerox advertisement from Personal Computer\`,
            style: {
                font: {
                    fontFamily: FONT_USER.SangBleu.SangBleuKingdomMedium,
                    fontSize: 24,
                    lineHeight: 24,
                }
            }
        }
    ],
    size: {
        height: A3rotate.size.height,
        width: A3rotate.size.width / 4,
    },
    position: {
        x: 3,
        y: 3
    }
}

const image2: layDesc.containers.IRectangleContainerSettings = {
    texts: [],
    cssExtended: {
        backgroundImage: "url(../../../static/img/2bigGREY.jpg)",
        backgroundSize: "auto " + 121 + "%",
        backgroundPosition: "0 "+ -17 +"px",
        "background-filter": "grayscale"
    },
    unit: UNIT.PX,

    // example 2.2 (p.4)
    size: {
        height: 23 * 10,
        width: 7 * 10,
    },

    // example 2.3 (p.4)
    anchor: ANCHOR.TOP_LEFT,

    // example 2.4 (p.4)
    position: {
x: 25,
y: 145,
    },
}

const image: layDesc.containers.IRectangleContainerSettings = {
    texts: [],

    // example 2.5 (p.4)
    position: {
x: 312,
y: 153,
    },
    cssExtended: {
        backgroundImage: "url(../../../static/img/1bigGREY.jpg)",
        backgroundSize: "auto " + 121 + "%",
        backgroundPosition: "0 "+ -17 +"px",
    },
    unit: UNIT.PX,
    anchor: ANCHOR.TOP_LEFT,

    size: {
        height: image2.size.height,
        width: image2.size.height / 1.2,
    }
}

A4Landscape_page0.containers.push(new RectangleContainer(image));
A4Landscape_page0.containers.push(new RectangleContainer(image2));
A4Landscape_page0.containers.push(new RectangleContainer(text));


const A3pageRepetition = new Page({
    size: A3.size,
    pageMargin: A3.pageMargin,
    unit: UNIT.PX,
});

// example 3.3
const imageRepetionSize = 11;

// example 3.4
const wordCounter = 8;

A3pageRepetition.addArrayOfContainers([
    {
        texts: [],
        cssExtended: {
            backgroundPosition: "50% 100%",
            backgroundSize: "auto " + imageRepetionSize * 10 + "%",
            backgroundImage: "url(../../../static/img/lisaGREY.jpg)",
        },
        size: {
            height: A3.size.height / 2,
            width: A3.size.width,
        },
        unit: UNIT.PX,
        anchor: ANCHOR.BOTTOM_LEFT,
    }
]);

// text
const indentationPosition = {
    position: {
x: 5,
y: 5,
    }
}

for(let i = 1; i < wordCounter; i++) {
    A3pageRepetition.containers.push(new RectangleContainer({
        texts: [{
            content: "Apple designs a new kind of machine.",
            style: {
                font: {
                    fontFamily: FONT_USER.GT_AMERICA.GTAmericaExtendedMedium,
                    fontSize: 9 * 10,
                    lineHeight: 7 * 10,
                }
            }
        }],
        size: A3.size,
        position: {
            x: indentationPosition.position.x * i / 10,
            y: indentationPosition.position.y * i / 10,
        },
        cssExtended: {
            opacity: 1 / i + "",
        }
    }));
}


// PUSH PAGES IN DOCUMENTS 
docA3.addPage(A3page0);
docA3.addPage(A3page1);
docA3.addPage(A3page2);

docA4.addPage(A4page0);
docA4.addPage(A4page1);
docA4.addPage(A4page2);

docA3.addPage(A4Landscape_page0);
docA3.addPage(A3pageRepetition);

/**
 * layDesc internal FOOTER
 */

layDescDocument = [];
layDescDocument.push(docA3, docA4);
// layDescDocument.push(newDocument);

/**
 * end FOOTER
 */
`
}