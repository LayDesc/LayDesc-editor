import {IGuideSettings} from "../guide/IGuideSettings";
import {IPageSettings} from "../page/page/IPageSettings";
import {IPageTemplateSettings} from "../page/pageTemplate/IPageTemplateSettings";

export interface IDocumentSettings {
    name: string,
    guides?: IGuideSettings;
    //todo ne pas laisser le choix entre IPageSettings[] | PageTemplate[] car ca gene la completion
    pageTemplates?: IPageTemplateSettings[];
    arrayOfPage?: IPageSettings[];
    scale?: number;
}