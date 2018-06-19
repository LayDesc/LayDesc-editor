import {IPageData} from "./IPageData";
import {IPageSettings} from "./IPageSettings";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {GenericPage} from "../generic/GenericPage";

export class Page extends GenericPage implements IPageData {
    pageTemplateName?: string;

    constructor(settings: IPageSettings) {
        super(settings);
        if (settings.pageTemplateName !== void 0) this.pageTemplateName = settings.pageTemplateName;

        // @todo Which object should be returned ?
        if ((settings as Page) instanceof Page ) return (settings as Page);
    }

    autoContent() {

    }

    generate(): IPageData {
        const containers: IRectangleContainerData[] = [];
        for(const container of this.containers) {
            containers.push(container.generate());
        }
        return {
            containers: containers,
            pageMargin: this.pageMargin.generate(),
            pageTemplateName: this.pageTemplateName,
            unit: this.unit,
            size: this.size.generate(),
        }
    }
}
