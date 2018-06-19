import {IPageTemplateSettings} from "./IPageTemplateSettings";
import {IPageTemplateData} from "./IPageTemplateData";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {GenericPage} from "../generic/GenericPage";

export class PageTemplate extends GenericPage implements IPageTemplateData {
    public name: string;

    constructor (settings: IPageTemplateSettings) {
        super(settings);

        this.name = settings.name;

        // @todo Which object should be returned ?
        if ( (settings as PageTemplate) instanceof PageTemplate) return (settings as PageTemplate);
    }

    generate(): IPageTemplateData {
        const containers: IRectangleContainerData[] = [];
        for(const container of this.containers) {
            containers.push(container.generate());
        }
        return {
            containers: containers,
            pageMargin: this.pageMargin.generate(),
            name: this.name,
            unit: this.unit,
            size: this.size.generate(),
        }
    }
}
