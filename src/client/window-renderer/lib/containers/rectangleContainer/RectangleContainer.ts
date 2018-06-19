import {IRectangleContainerSettings} from "./IRectangleContainerSettings";
import {ICssExtended, IRectangleContainerData} from "./IRectangleContainerData";
import {Padding} from "../../geometry/generic/Padding";
import {Rectangle} from "../../geometry/Rectangle";
import {Text} from "../../elements/text/Text";
import {IContainerData} from "../generic/IContainerData";

export class RectangleContainer extends Rectangle implements IContainerData, IRectangleContainerData {
    margin: Padding;
    texts: Text[];
    cssExtended: ICssExtended = {};

    constructor(settings: IRectangleContainerSettings) {
        super(settings);
        this.margin = new Padding(settings.margin);

        this.texts = [];
        for(const text of settings.texts) {
            this.texts.push( new Text(text) );
        }

        if(settings.cssExtended !== void 0) {
            for(const cssKeyName in settings.cssExtended) {
                this.cssExtended[cssKeyName] = settings.cssExtended[cssKeyName];
            }
        }

        // @todo Which object should be returned ?
        if ((settings as RectangleContainer) instanceof RectangleContainer) return (settings as RectangleContainer);
    }

    generate(): IRectangleContainerData {
        return {
            unit: this.unit,
            size: this.size.generate(),
            position: this.position.generate(),
            anchor: this.anchor,
            margin: this.margin.generate(),
            texts: this.texts,
            cssExtended: this.cssExtended,
        }
    }
}