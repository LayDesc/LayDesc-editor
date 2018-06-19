import {IGenericPageData} from "./IGenericPageData";
import {RectangleContainer} from "../../containers/rectangleContainer/RectangleContainer";
import {UNIT} from "../../geometry/generic/UNIT";
import {Padding} from "../../geometry/generic/Padding";
import {Document} from "../../document/Document";
import {IRectangleContainerSettings} from "../../containers/rectangleContainer/IRectangleContainerSettings";
import {IGenericPageSettings} from "./IGenericPageSettings";
import {Size} from "../../geometry/generic/Size";

export class GenericPage implements IGenericPageData {
    public pageMargin: Padding;
    public containers: RectangleContainer[] = [];
    public unit: UNIT;
    public size: Size;


    public get documentParents() {
        return this._documentParents;
    }

    protected _documentParents: Document[] = [];

    private static _defaultSettings = {
        unit: UNIT.MM,
        size: {
            width: 210,
            height: 297,
        }
    };

    constructor(settings: IGenericPageSettings) {
        this.pageMargin = new Padding(settings.pageMargin);
        this.containers = (settings.containers === void 0) ? [] : this.addArrayOfContainers(settings.containers);
        this.unit = (settings.unit === void 0) ? GenericPage._defaultSettings.unit : settings.unit;
        this.size = (settings.size === void 0) ? new Size(GenericPage._defaultSettings.size) : new Size(settings.size);
    }

    addArrayOfContainers(containers: IRectangleContainerSettings[]) {
        const newArrayOfContainers: RectangleContainer[] = [];

        for(const container of containers) {
            let newContainerToAdd: RectangleContainer;

            //todo test instanceof
            if ( (container as RectangleContainer) instanceof RectangleContainer) {
                newContainerToAdd = (container as RectangleContainer);
                this.containers.push(newContainerToAdd);
            } else {
                newContainerToAdd = new RectangleContainer(container);
                this.containers.push(newContainerToAdd);
            }
            newArrayOfContainers.push(newContainerToAdd);
        }
        return newArrayOfContainers;
    }
}