import {IGuideData} from "../guide/IGuideData";
import {IPageTemplateData} from "../page/pageTemplate/IPageTemplateData";
import {IPageData} from "../page/page/IPageData";

export interface IDocumentData {
    name: string,
    guides: IGuideData;
    listOfPageTemplate: IListOfPageTemplate;
    arrayOfPage: IPageData[];
    scale: number;
}

export interface IListOfPageTemplate {
    [key: string]: IPageTemplateData;
}
