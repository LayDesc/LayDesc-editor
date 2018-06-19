import {UNIT} from "../../geometry/generic/UNIT";
import {IContainerData, IContainerSettings} from "../../containers/generic/IContainerData";

export interface IRectangleContainerGeneratorSettings extends IContainerSettings {
    width: number;
    height: number;
    unit: UNIT;
}