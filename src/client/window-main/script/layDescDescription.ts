export function getDescription() {
    return `
declare module "geometry/generic/UNIT" {
    export enum UNIT {
        CM = "cm",
        MM = "mm",
        PT = "pt",
        PX = "px",
    }
}
declare module "geometry/generic/Padding" {
    export class Padding implements IPaddingData {
        top: number;
        right: number;
        bottom: number;
        left: number;
        private static _defaultSettings;
        constructor(settings?: IPaddingSettings);
        generate(): IPaddingData;
    }
    export interface IPaddingSettings {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }
    export interface IPaddingData {
        top: number;
        right: number;
        bottom: number;
        left: number;
    }
}
declare module "geometry/generic/Position" {
    export class Position implements IPositionData {
        x: number;
        y: number;
        private static _defaultSettings;
        constructor(settings?: IPositionSettings);
        generate(): IPositionData;
    }
    export interface IPositionSettings {
        x?: number;
        y?: number;
    }
    export interface IPositionData {
        x: number;
        y: number;
    }
}
declare module "geometry/generic/Size" {
    export class Size implements ISizeData {
        width: number;
        height: number;
        private static _defaultSettings;
        constructor(settings?: ISizeSettings);
        generate(): ISizeData;
    }
    export interface ISizeSettings {
        width?: number;
        height?: number;
    }
    export interface ISizeData {
        width: number;
        height: number;
    }
}
declare module "geometry/generic/ANCHOR" {
    export enum ANCHOR {
        TOP_LEFT = 0,
        TOP_RIGHT = 1,
        BOTTOM_LEFT = 2,
        BOTTOM_RIGHT = 3,
    }
}
declare module "geometry/Rectangle" {
    import { IPositionData, IPositionSettings, Position } from "geometry/generic/Position";
    import { ISizeData, ISizeSettings, Size } from "geometry/generic/Size";
    import { UNIT } from "geometry/generic/UNIT";
    import { ANCHOR } from "geometry/generic/ANCHOR";
    export class Rectangle implements IRectangleData {
        anchor: ANCHOR;
        position: Position;
        size: Size;
        unit: UNIT;
        private static _defaultSettings;
        constructor(settings?: IRectangleSettings);
        generate(): IRectangleData;
    }
    export interface IRectangleSettings {
        anchor?: ANCHOR;
        position?: IPositionSettings;
        size?: ISizeSettings;
        unit?: UNIT;
    }
    export interface IRectangleData {
        anchor: ANCHOR;
        position: IPositionData;
        size: ISizeData;
        unit: UNIT;
    }
}
declare module "elements/font/IFontSettings" {
    import { UNIT } from "geometry/generic/UNIT";
    export interface IFontSettings {
        fontFamily?: string;
        fontSize?: number;
        lineHeight?: number;
        unit?: UNIT;
        letterSpacing?: number;
    }
}
declare module "elements/font/IFontData" {
    import { UNIT } from "geometry/generic/UNIT";
    export interface IFontData {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
        unit: UNIT;
        letterSpacing: number;
    }
}
declare module "elements/font/Font" {
    import { IFontData } from "elements/font/IFontData";
    import { IFontSettings } from "elements/font/IFontSettings";
    import { UNIT } from "geometry/generic/UNIT";
    export class Font implements IFontData {
        fontFamily: string;
        fontSize: number;
        letterSpacing: number;
        lineHeight: number;
        unit: UNIT;
        setSettings(settings: IFontSettings): void;
        generate(): IFontData;
        private static _defaultSettings;
        constructor(settings?: IFontSettings);
        fontSettingsToFontData(fontSettings: IFontSettings): IFontData;
    }
}
declare module "elements/text/TextStyle" {
    import { UNIT } from "geometry/generic/UNIT";
    import { IFontSettings } from "elements/font/IFontSettings";
    import { Font } from "elements/font/Font";
    import { IPaddingData, IPaddingSettings, Padding } from "geometry/generic/Padding";
    import { IFontData } from "elements/font/IFontData";
    export class TextStyle implements ITextStyleData {
        font: Font;
        space: Padding;
        unit: UNIT;
        private static _defaultSettings;
        constructor(settings?: ITextStyleSettings);
        generate(): ITextStyleData;
    }
    export interface ITextStyleData {
        font: IFontData;
        space: IPaddingData;
        unit: UNIT;
    }
    export interface ITextStyleSettings {
        font?: IFontSettings;
        space?: IPaddingSettings;
        unit?: UNIT;
    }
}
declare module "elements/text/Text" {
    import { ITextStyleData, ITextStyleSettings, TextStyle } from "elements/text/TextStyle";
    /**
     * Text object type are equivalent to Paragraph in InDesign
     * @todo Text or Paragraph type name
     */
    export class Text implements ITextData {
        content: string;
        style: TextStyle;
        constructor(settings: ITextSettings);
        generate(): ITextData;
    }
    export interface ITextSettings {
        content: string;
        style?: ITextStyleSettings;
    }
    export interface ITextData {
        content: string;
        style: ITextStyleData;
    }
}
declare module "containers/generic/IContainerData" {
    import { ITextSettings } from "elements/text/Text";
    export interface IContainerData {
        texts: ITextSettings[];
    }
}
declare module "containers/rectangleContainer/IRectangleContainerData" {
    import { IPaddingData } from "geometry/generic/Padding";
    import { IRectangleData } from "geometry/Rectangle";
    import { IContainerData } from "containers/generic/IContainerData";
    export interface IRectangleContainerData extends IRectangleData, IContainerData {
        margin: IPaddingData;
    }
}
declare module "containers/rectangleContainer/IRectangleContainerSettings" {
    import { IPaddingSettings } from "geometry/generic/Padding";
    import { IRectangleSettings } from "geometry/Rectangle";
    import { IContainerData } from "containers/generic/IContainerData";
    export interface IRectangleContainerSettings extends IRectangleSettings, IContainerData {
        margin?: IPaddingSettings;
    }
}
declare module "containers/rectangleContainer/RectangleContainer" {
    import { IRectangleContainerSettings } from "containers/rectangleContainer/IRectangleContainerSettings";
    import { IRectangleContainerData } from "containers/rectangleContainer/IRectangleContainerData";
    import { Padding } from "geometry/generic/Padding";
    import { Rectangle } from "geometry/Rectangle";
    import { Text } from "elements/text/Text";
    import { IContainerData } from "containers/generic/IContainerData";
    export class RectangleContainer extends Rectangle implements IContainerData, IRectangleContainerData {
        margin: Padding;
        texts: Text[];
        constructor(settings: IRectangleContainerSettings);
        generate(): IRectangleContainerData;
    }
}
declare module "containers/_module_export" {
    export { IRectangleContainerData } from "containers/rectangleContainer/IRectangleContainerData";
    export { IRectangleContainerSettings } from "containers/rectangleContainer/IRectangleContainerSettings";
    export { RectangleContainer } from "containers/rectangleContainer/RectangleContainer";
}
declare module "guide/Horizontal" {
    export class Horizontal {
        y: number;
        constructor(y?: number);
    }
}
declare module "guide/Vertical" {
    export class Vertical {
        x: number;
        constructor(x?: number);
    }
}
declare module "guide/IGuideSettings" {
    import { Horizontal } from "guide/Horizontal";
    import { Vertical } from "guide/Vertical";
    export interface IGuideSettings {
        show: boolean;
        horizontal?: Horizontal[];
        vertical?: Vertical[];
    }
}
declare module "page/pageTemplate/IPageTemplateSettings" {
    import { IPaddingSettings } from "geometry/generic/Padding";
    import { IRectangleContainerSettings } from "containers/rectangleContainer/IRectangleContainerSettings";
    import { UNIT } from "geometry/generic/UNIT";
    export interface IPageTemplateSettings {
        name: string;
        pageMargin?: IPaddingSettings;
        containers?: IRectangleContainerSettings[];
        unit?: UNIT;
    }
}
declare module "page/page/IPageSettings" {
    import { IPageTemplateSettings } from "page/pageTemplate/IPageTemplateSettings";
    export interface IPageSettings extends IPageTemplateSettings {
        pageTemplateName?: string;
    }
}
declare module "document/IDocumentSettings" {
    import { IGuideSettings } from "guide/IGuideSettings";
    import { IPageSettings } from "page/page/IPageSettings";
    import { IPageTemplateSettings } from "page/pageTemplate/IPageTemplateSettings";
    export interface IDocumentSettings {
        guides?: IGuideSettings;
        pageTemplates?: IPageTemplateSettings[];
        arrayOfPage?: IPageSettings[];
    }
}
declare module "env" {
    export module env {
        const userAgentIsElectron: () => boolean;
        module parameters {
            let DEBUG: boolean;
            let GENERATE_IN_EXTERNAL_WINDOW: boolean;
        }
        /**
         * @hidden
         */
        const _DEBUG: boolean;
        /**
         * @hidden
         */
        function _helloMessage(): void;
    }
}
declare module "page/pageTemplate/IPageTemplateData" {
    import { IPaddingData } from "geometry/generic/Padding";
    import { IRectangleContainerData } from "containers/rectangleContainer/IRectangleContainerData";
    import { UNIT } from "geometry/generic/UNIT";
    export interface IPageTemplateData {
        name: string;
        pageMargin: IPaddingData;
        containers: IRectangleContainerData[];
        unit: UNIT;
    }
}
declare module "page/pageTemplate/PageTemplate" {
    import { Padding } from "geometry/generic/Padding";
    import { IPageTemplateSettings } from "page/pageTemplate/IPageTemplateSettings";
    import { IPageTemplateData } from "page/pageTemplate/IPageTemplateData";
    import { RectangleContainer } from "containers/rectangleContainer/RectangleContainer";
    import { IRectangleContainerSettings } from "containers/rectangleContainer/IRectangleContainerSettings";
    import { Document } from "document/Document";
    import { UNIT } from "geometry/generic/UNIT";
    export class PageTemplate implements IPageTemplateData {
        name: string;
        pageMargin: Padding;
        containers: RectangleContainer[];
        unit: UNIT;
        readonly documentParents: Document[];
        protected _documentParents: Document[];
        private static _defaultSettings;
        constructor(settings: IPageTemplateSettings);
        addArrayOfContainers(containers: IRectangleContainerSettings[]): RectangleContainer[];
        generate(): IPageTemplateData;
    }
}
declare module "guide/IGuideData" {
    import { Horizontal } from "guide/Horizontal";
    import { Vertical } from "guide/Vertical";
    export interface IGuideData {
        show: boolean;
        horizontal: Horizontal[];
        vertical: Vertical[];
    }
}
declare module "page/page/IPageData" {
    import { IPageTemplateData } from "page/pageTemplate/IPageTemplateData";
    export interface IPageData extends IPageTemplateData {
        pageTemplateName?: string;
    }
}
declare module "document/IDocumentData" {
    import { IGuideData } from "guide/IGuideData";
    import { IPageTemplateData } from "page/pageTemplate/IPageTemplateData";
    import { IPageData } from "page/page/IPageData";
    export interface IDocumentData {
        guides: IGuideData;
        listOfPageTemplate: IListOfPageTemplate;
        arrayOfPage: IPageData[];
    }
    export interface IListOfPageTemplate {
        [key: string]: IPageTemplateData;
    }
}
declare module "page/page/Page" {
    import { PageTemplate } from "page/pageTemplate/PageTemplate";
    import { IPageData } from "page/page/IPageData";
    import { IPageSettings } from "page/page/IPageSettings";
    export class Page extends PageTemplate implements IPageData {
        pageTemplateName?: string;
        constructor(settings: IPageSettings);
        autoContent(): void;
        generate(): IPageData;
    }
}
declare module "document/Document" {
    import { IDocumentSettings } from "document/IDocumentSettings";
    import { IDocumentData, IListOfPageTemplate } from "document/IDocumentData";
    import { IGuideData } from "guide/IGuideData";
    import { Page } from "page/page/Page";
    import { IPageTemplateSettings } from "page/pageTemplate/IPageTemplateSettings";
    import { IPageSettings } from "page/page/IPageSettings";
    export class Document implements IDocumentData {
        guides: IGuideData;
        listOfPageTemplate: IListOfPageTemplate;
        arrayOfPage: Page[];
        private static _defaultSettings;
        private _this;
        constructor(settings?: IDocumentSettings);
        addPageTemplate(pageTemplate: IPageTemplateSettings): void;
        addPage(page: IPageSettings): void;
        generate(): Promise<IDocumentData>;
        private _createJson();
    }
}
declare module "document/_module_export" {
    export { Document } from "document/Document";
    export { IDocumentData, IListOfPageTemplate } from "document/IDocumentData";
    export { IDocumentSettings } from "document/IDocumentSettings";
}
declare module "elements/image/IImageData" {
    import { IRectangleData } from "geometry/Rectangle";
    export interface IImageData extends IRectangleData {
        url: string;
    }
}
declare module "elements/image/IImageSettings" {
    import { IRectangleSettings } from "geometry/Rectangle";
    export interface IImageSettings extends IRectangleSettings {
        url: string;
    }
}
declare module "elements/image/Image" {
    import { IImageSettings } from "elements/image/IImageSettings";
    import { IImageData } from "elements/image/IImageData";
    import { Rectangle } from "geometry/Rectangle";
    export class Image extends Rectangle implements IImageData {
        url: string;
        constructor(settings: IImageSettings);
        generate(): IImageData;
    }
}
declare module "elements/text/ITextContent" {
    import { Image } from "elements/image/Image";
    export interface ITextContent {
        content: (string | Image)[];
    }
    /**
     * ITextContentTyped defines an ITextContent object that has a hierachized structure (like Markdow or HTML).
     * In addition to the content, ITextContentTyped contains the hierachy information of each line (which ends with a return end of paragraph "\\ n") in a text.
     */
    export interface ITextContentTyped extends ITextContent {
        typeName: string;
    }
}
declare module "elements/_module_export" {
    export { Font } from "elements/font/Font";
    export { IFontData } from "elements/font/IFontData";
    export { IFontSettings } from "elements/font/IFontSettings";
    export { IImageData } from "elements/image/IImageData";
    export { IImageSettings } from "elements/image/IImageSettings";
    export { Image } from "elements/image/Image";
    export { ITextContent, ITextContentTyped } from "elements/text/ITextContent";
    export { Text, ITextData, ITextSettings } from "elements/text/Text";
    export { TextStyle, ITextStyleData, ITextStyleSettings } from "elements/text/TextStyle";
}
declare module "geometry/_module_export" {
    export { ANCHOR } from "geometry/generic/ANCHOR";
    export { IPaddingData, IPaddingSettings, Padding } from "geometry/generic/Padding";
    export { IPositionData, IPositionSettings, Position } from "geometry/generic/Position";
    export { ISizeData, ISizeSettings, Size } from "geometry/generic/Size";
    export { UNIT } from "geometry/generic/UNIT";
    export { IRectangleData, IRectangleSettings, Rectangle } from "geometry/Rectangle";
}
declare module "guide/_module_export" {
    export { Horizontal } from "guide/Horizontal";
    export { IGuideData } from "guide/IGuideData";
    export { IGuideSettings } from "guide/IGuideSettings";
    export { Vertical } from "guide/Vertical";
}
declare module "page/_module_export" {
    export { IPageData } from "page/page/IPageData";
    export { IPageSettings } from "page/page/IPageSettings";
    export { Page } from "page/page/Page";
    export { IPageTemplateData } from "page/pageTemplate/IPageTemplateData";
    export { IPageTemplateSettings } from "page/pageTemplate/IPageTemplateSettings";
    export { PageTemplate } from "page/pageTemplate/PageTemplate";
}
declare module "tools/loremIpsum" {
    export function loremIpsum(): string;
}
declare module "tools/rectangleContainerGenerator/IRectangleContainerGeneratorSettings" {
    import { UNIT } from "geometry/generic/UNIT";
    import { IContainerData } from "containers/generic/IContainerData";
    export interface IRectangleContainerGeneratorSettings extends IContainerData {
        width: number;
        height: number;
        unit: UNIT;
    }
}
declare module "elements/text/ITextLines" {
    import { ITextStyleData } from "elements/text/TextStyle";
    export interface ITextLines {
        lines: string[];
        style: ITextStyleData;
    }
}
declare module "tools/rectangleContainerGenerator/RectangleContainerGenerator" {
    import { IRectangleContainerGeneratorSettings } from "tools/rectangleContainerGenerator/IRectangleContainerGeneratorSettings";
    import { UNIT } from "geometry/generic/UNIT";
    import { IFontSettings } from "elements/font/IFontSettings";
    import { Font } from "elements/font/Font";
    import { IContainerData } from "containers/generic/IContainerData";
    import { Text } from "elements/text/Text";
    import { ITextLines } from "elements/text/ITextLines";
    /**
     * ContainerGenerator allows you to cut long contents according to a width and height. They return an array of content that can be placed in Containers.
     * Thus, if you have a long text, a ContainerGenerator will be able to return the number of containers needed to display to display the entire text.
     * —
     * RectangleContainerGenerator is for RectangleContainer.
     */
    export class RectangleContainerGenerator implements IContainerData {
        width: number;
        height: number;
        unit: UNIT;
        texts: Text[];
        private readonly _textMetric;
        private _textLinesOfTexts;
        constructor(settings: IRectangleContainerGeneratorSettings);
        generateLinesOfText(text: Text): void;
        /**
         * return all line generated for specified width container
         */
        getTextLinesOfTexts(): ITextLines[];
        /**
         * return rectangle containers generated for specified width and height container
         */
        getContainers(): number;
    }
    export class TextMetric {
        readonly font: Font;
        private readonly _elementSizingGetter;
        private readonly _canvas;
        private readonly _context;
        /**
         * list _pixelValueForUnitSize.size value in PX
         * @todo save value (don't search size if we have run _pixelValueForUnitSize one time)
         */
        private _pixelValueForUnitSize;
        constructor();
        getStringPixelWidth(string: string, fontSettings?: IFontSettings): number;
        getXHeightPixelHeight(fontSettings?: IFontSettings): number;
        private _setXHeightElementSizingGetter();
        private _setPixelValueForUnitSize();
        private _valueToPX(value, unit);
        private _setFontParametersToElement(element, fontData);
    }
}
declare module "tools/_module_export" {
    export { loremIpsum } from "tools/loremIpsum";
    export { IRectangleContainerGeneratorSettings } from "tools/rectangleContainerGenerator/IRectangleContainerGeneratorSettings";
    export { RectangleContainerGenerator, TextMetric } from "tools/rectangleContainerGenerator/RectangleContainerGenerator";
}
declare module "main" {
    import * as containers from "containers/_module_export";
    import * as document from "document/_module_export";
    import * as elements from "elements/_module_export";
    import * as geometry from "geometry/_module_export";
    import * as guide from "guide/_module_export";
    import * as page from "page/_module_export";
    import * as tools from "tools/_module_export";
    export { containers, document, elements, geometry, guide, page, tools };
    export { env } from "env";
}
    `
}