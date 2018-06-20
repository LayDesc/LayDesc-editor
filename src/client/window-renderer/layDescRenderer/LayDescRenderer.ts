import {IDocumentData} from "../lib/document/IDocumentData";
import {IPageData} from "../lib/page/page/IPageData";
import {CLASS_NAMES} from "./CLASS_NAMES";
import {UNIT} from "../lib/geometry/generic/UNIT";
import {ISizeData, Size} from "../lib/geometry/generic/Size";
import {IPaddingData} from "../lib/geometry/generic/Padding";
import {IRectangleContainerData} from "../lib/containers/rectangleContainer/IRectangleContainerData";
import {IPositionData} from "../lib/geometry/generic/Position";
import {ANCHOR} from "../lib/geometry/generic/ANCHOR";
import {ITextData} from "../lib/elements/text/Text";
import {IFontData} from "../lib/elements/font/IFontData";
import {IGuideData} from "../lib/guide/IGuideData";

/**
 * LayDesc Generator
 */
export class LayDescRenderer {
    set layDescDocumentData(data: IDocumentData) {
        this._layDescDocumentData = data;
        this.rendererDocument();
    }

    private _layDescDocumentData: IDocumentData;
    private _containerElement: HTMLElement;

    constructor(
        containerElement: HTMLElement, layDescDocument: IDocumentData) {
        this._layDescDocumentData = layDescDocument;
        this._containerElement = containerElement;
        this._setContainerCss();

        this.rendererDocument();
    }

    rendererDocument() {
        const documentData = this._layDescDocumentData;

        // this._containerElement.style.transform = `scale(${this._layDescDocumentData.scale}, ${this._layDescDocumentData.scale})`;

        this.cleanDocumentContainer();

        for(const pageData of documentData.arrayOfPage) {
            this._createElement_page(pageData);
        }
    }

    cleanDocumentContainer() {
        while(this._containerElement.hasChildNodes()) {
            this._containerElement.removeChild(this._containerElement.firstChild as Node);
        }
    }

    private _setContainerCss() {
        const containerStyle = this._containerElement.style;

        containerStyle.position = "relative";
        containerStyle.display = "block";
        containerStyle.boxSizing = "border-box";
        containerStyle.margin = "0";
        containerStyle.padding = "0";
    }

    private _addGuidesInPage(element: HTMLElement) {
        for(const verticalGuide of this._layDescDocumentData.guides.vertical) {
            const newVerticalGuide = document.createElement("div");

            const newVerticalGuideStyle = newVerticalGuide.style;

            newVerticalGuideStyle.position = "absolute";
            newVerticalGuideStyle.display = "block";
            newVerticalGuideStyle.boxSizing = "border-box";
            newVerticalGuideStyle.margin = "0";
            newVerticalGuideStyle.padding = "0";

            newVerticalGuideStyle.width = "1px";
            newVerticalGuideStyle.height = "100%";
            newVerticalGuideStyle.backgroundColor = "blue";
            newVerticalGuideStyle.left = `calc( ${verticalGuide.x}${this._layDescDocumentData.guides.unit} - 1px)`;
            newVerticalGuideStyle.top = "0";

            element.appendChild(newVerticalGuide);
        }

        for(const horizontalGuide of this._layDescDocumentData.guides.horizontal) {
            const newHorizontalGuide = document.createElement("div");

            const newHorizontalGuideStyle = newHorizontalGuide.style;

            newHorizontalGuideStyle.position = "absolute";
            newHorizontalGuideStyle.display = "block";
            newHorizontalGuideStyle.boxSizing = "border-box";
            newHorizontalGuideStyle.margin = "0";
            newHorizontalGuideStyle.padding = "0";

            newHorizontalGuideStyle.width = "100%";
            newHorizontalGuideStyle.height = "1px";
            newHorizontalGuideStyle.backgroundColor = "blue";
            newHorizontalGuideStyle.left = "0";
            newHorizontalGuideStyle.top = `calc( ${horizontalGuide.y}${this._layDescDocumentData.guides.unit} - 1px)`;

            element.appendChild(newHorizontalGuide);
        }

    }

    private _createElement_page(pageData: IPageData) {
        const newPage = document.createElement("div");
        newPage.className = CLASS_NAMES.PAGE;

        const newPageStyle = newPage.style;

        newPageStyle.position = "relative";
        newPageStyle.display = "block";
        newPageStyle.boxSizing = "border-box";
        newPageStyle.margin = "0";
        newPageStyle.padding = "0";
        newPageStyle.overflow = "hidden";

        newPageStyle.backgroundColor = "white";

        let pageStyleSettings: pageStyle = {
            pageMargin: pageData.pageMargin,
            size: pageData.size,
            unit: pageData.unit,
        };

        const arrayOfContainers: IRectangleContainerData[] = [];

        if (pageData.pageTemplateName !== void 0) {
            newPage.classList.add(pageData.pageTemplateName);

            if(this._layDescDocumentData.listOfPageTemplate[pageData.pageTemplateName] !== void 0) {
                const template = this._layDescDocumentData.listOfPageTemplate[pageData.pageTemplateName];

                pageStyleSettings = {
                    pageMargin: template.pageMargin,
                    size: template.size,
                    unit: template.unit,
                };

                for(const templateContainer of template.containers) {
                    arrayOfContainers.push( templateContainer );
                }
            }
        }
        for(const pageContainer of pageData.containers) {
            arrayOfContainers.push( pageContainer );
        }

        LayDescRenderer._setSizeOfElement(newPage, pageStyleSettings.size, pageStyleSettings.unit);

        LayDescRenderer._setPaddingOfElement(newPage, pageStyleSettings.pageMargin, pageStyleSettings.unit);

        for(const container of arrayOfContainers) {
            LayDescRenderer._addRectangleContainersInPage(container, newPage);
        }

        if(this._layDescDocumentData.guides.show) {
            this._addGuidesInPage(newPage);
        }

        this._containerElement.appendChild(newPage);
    }

    private static _addRectangleContainersInPage(container: IRectangleContainerData, pageElement: HTMLElement) {
        const newRectangleContainer = document.createElement("div");
        newRectangleContainer.className = CLASS_NAMES.RECTANGLE_CONTAINER;

        const newRectangleContainerStyle = newRectangleContainer.style;

        newRectangleContainerStyle.position = "absolute";
        newRectangleContainerStyle.display = "block";
        newRectangleContainerStyle.boxSizing = "border-box";
        newRectangleContainerStyle.margin = "0";
        newRectangleContainerStyle.padding = "0";
        newRectangleContainerStyle.overflow = "hidden";

        LayDescRenderer._setPositionOfElement(newRectangleContainer, container.position, container.anchor, container.unit);
        LayDescRenderer._setPaddingOfElement(newRectangleContainer, container.margin, container.unit);
        LayDescRenderer._setSizeOfElement(newRectangleContainer, container.size, container.unit);

        for(const text of container.texts) {
            LayDescRenderer._addTextInContainer(newRectangleContainer, text);
        }

        for (const cssKeyName in container.cssExtended) {
            newRectangleContainerStyle[(cssKeyName as any)] = container.cssExtended[cssKeyName];
        }

        pageElement.appendChild(newRectangleContainer);
    }

    private static _addTextInContainer(element: HTMLElement, text: ITextData) {
        const newText = document.createElement("div");

        const newTextStyle = newText.style;

        newTextStyle.position = "relative";
        newTextStyle.display = "block";
        newTextStyle.boxSizing = "border-box";
        newTextStyle.margin = "0";
        newTextStyle.padding = "0";

        LayDescRenderer._setPaddingOfElement(newText, text.style.space, text.style.unit);

        console.log("ADDDDDDDD");

        LayDescRenderer._setFontOfElement(newText, text.style.font);

        let textToInclude = text.content.replace(/-/gm, "&#x2011;");
        textToInclude = textToInclude.replace(/\n/gm, "<br>");

        newText.innerHTML = textToInclude;

        element.appendChild(newText);
    }

    /**
     * element settings tools
     */


    private static _setSizeOfElement(element: HTMLElement, size: ISizeData, unit: UNIT) {
        element.style.width = size.width + unit;
        element.style.height = size.height + unit;
    }

    private static _setPaddingOfElement(element: HTMLElement, padding: IPaddingData, unit: UNIT) {
        element.style.paddingTop = padding.top + unit;
        element.style.paddingRight = padding.right + unit;
        element.style.paddingBottom = padding.bottom + unit;
        element.style.paddingLeft = padding.left + unit;
    }

    private static _setPositionOfElement(element: HTMLElement, position: IPositionData, anchor: ANCHOR, unit: UNIT) {
        const elementStyle = element.style;

        elementStyle.top = "auto";
        elementStyle.right = "auto";
        elementStyle.bottom = "auto";
        elementStyle.left = "auto";

        if(anchor === ANCHOR.BOTTOM_LEFT) {
            elementStyle.bottom = position.y + unit;
            elementStyle.left = position.x + unit;
        } else if (anchor === ANCHOR.TOP_LEFT) {
            elementStyle.top = position.y + unit;
            elementStyle.left = position.x + unit;
        } else if (anchor === ANCHOR.TOP_RIGHT) {
            elementStyle.top = position.y + unit;
            elementStyle.right = position.x + unit;
        } else { //anchor === ANCHOR.BOTTOM_RIGHT
            elementStyle.bottom = position.y + unit;
            elementStyle.right = position.x + unit;
        }
    }

    private static _setFontOfElement(element: HTMLElement, font: IFontData) {
        element.style.fontFamily = font.fontFamily;
        element.style.fontSize = font.fontSize + font.unit;
        element.style.letterSpacing = font.letterSpacing + font.unit;
        element.style.lineHeight = font.lineHeight + font.unit;
    }
}

interface pageStyle {
    pageMargin: IPaddingData,
    size: ISizeData,
    unit: UNIT,
}
