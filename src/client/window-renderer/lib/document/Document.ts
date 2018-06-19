import {IDocumentSettings} from "./IDocumentSettings";
import {env} from "../env";
import {PageTemplate} from "../page/pageTemplate/PageTemplate";
import {IDocumentData, IListOfPageTemplate} from "./IDocumentData";
import {IGuideData} from "../guide/IGuideData";
import {Page} from "../page/page/Page";
import {IPageTemplateSettings} from "../page/pageTemplate/IPageTemplateSettings";
import {IPageSettings} from "../page/page/IPageSettings";
import {RectangleContainer} from "../containers/rectangleContainer/RectangleContainer";
import {IPageData} from "../page/page/IPageData";
import {Horizontal} from "../guide/Horizontal";
import {Vertical} from "../guide/Vertical";
import {UNIT} from "../geometry/generic/UNIT";

export class Document implements IDocumentData {
    public name: string;
    public guides: IGuideData;
    public listOfPageTemplate: IListOfPageTemplate;
    public arrayOfPage: Page[];
    public scale = 1;

    private static _defaultSettings = {
        guides: {
            show: true,
            unit: UNIT.MM,
        },
        pageTemplates: {},
    };

    private _this: Document = this;

    constructor(settings: IDocumentSettings) {
        this.name = settings.name;

        if (settings.guides !== void 0) {
            this.guides = {
                vertical: [],
                horizontal: [],
                show: Document._defaultSettings.guides.show,
                unit: Document._defaultSettings.guides.unit,
            };
            this.guides.show = (settings.guides.show === void 0) ? Document._defaultSettings.guides.show : settings.guides.show;
            this.guides.horizontal = (settings.guides.horizontal === void 0) ? [] : settings.guides.horizontal;
            this.guides.vertical = (settings.guides.vertical === void 0) ? [] : settings.guides.vertical;
            this.guides.unit = (settings.guides.unit === void 0) ? Document._defaultSettings.guides.unit : settings.guides.unit;
        } else {
            this.guides = {
                show: Document._defaultSettings.guides.show,
                horizontal: [],
                vertical: [],
                unit: Document._defaultSettings.guides.unit,
            }
        }

        this.listOfPageTemplate = Document._defaultSettings.pageTemplates;
        if (settings.pageTemplates !== void 0) {
            for (const pageTemplate of settings.pageTemplates) {
                this.addPageTemplate(pageTemplate);
            }
        }

        this.arrayOfPage = [];
        if (settings.arrayOfPage !== void 0) {
            for(const page of settings.arrayOfPage) {
                this.addPage(page);
            }
        }

        if(settings.scale !== void 0) this.scale = settings.scale;
    }

    public addPageTemplate(pageTemplate: IPageTemplateSettings) {
        if (env.parameters.DEBUG) {
            if (pageTemplate.name in this.listOfPageTemplate) console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
        }

        this.listOfPageTemplate[pageTemplate.name] = new PageTemplateDocumentChild(pageTemplate).addDocumentParent(this);

    }

    public addPage(page: IPageSettings) {
        this.arrayOfPage.push( new PageDocumentChild(page).addDocumentParent(this) );
    }

    public generate(): Promise<IDocumentData> {
        return new Promise(resolve => {
            resolve(this._createJson());
        });
    }

    private _createJson(): IDocumentData {
        // generate guides
        const arrayOfHorizontal: Horizontal[] = [];
        for(const horizontal of this.guides.horizontal) {
            arrayOfHorizontal.push(
                {
                    y: horizontal.y
                }
            )
        }
        const arrayOfVertical: Vertical[] = [];
        for(const vertical of this.guides.vertical) {
            arrayOfVertical.push(
                {
                    x: vertical.x
                }
            )
        }
        let guides: IGuideData = {
            show: this.guides.show,
            horizontal: arrayOfHorizontal,
            vertical: arrayOfVertical,
            unit: this.guides.unit,
        };

        // generate arrayOfPage
        const arrayOfPage: IPageData[] = [];
        for(const page of this.arrayOfPage) {
            arrayOfPage.push(page.generate());
        }

        return {
            name: this.name,
            guides: guides,
            arrayOfPage: arrayOfPage,
            listOfPageTemplate: this.listOfPageTemplate,
            scale: this.scale,
        }
    }
}

/**
 * @hidden
 */
class PageDocumentChild extends Page {
    constructor(settings: IPageSettings) {

        // @todo Which object should be returned ?
        if ((settings as Page) instanceof Page ) settings = {
            pageTemplateName: settings.pageTemplateName,
            unit: settings.unit,
            containers: settings.containers,
            pageMargin: settings.pageMargin,
            size: settings.size,
        };
        super(settings);
    }
    addDocumentParent(document: Document) {
        this._documentParents.push( document );
        return this;
    }
}

/**
 * @hidden
 */
class PageTemplateDocumentChild extends PageTemplate {
    constructor(settings: IPageTemplateSettings) {

        // @todo Which object should be returned ?
        if ((settings as PageTemplate) instanceof PageTemplate ) settings = {
            name: settings.name,
            unit: settings.unit,
            containers: settings.containers,
            pageMargin: settings.pageMargin,
            size: settings.size,
        };
        super(settings);
    }
    addDocumentParent(document: Document) {
        this._documentParents.push( document );
        return this;
    }
}

// layDesc initialisation
env._helloMessage();
