import {IPaddingSettings} from "../../geometry/generic/Padding";
import {IRectangleContainerSettings} from "../../containers/rectangleContainer/IRectangleContainerSettings";
import {UNIT} from "../../geometry/generic/UNIT";
import {ISizeSettings} from "../../geometry/generic/Size";

export interface IGenericPageSettings {
    pageMargin?: IPaddingSettings;
    containers?: IRectangleContainerSettings[];
    unit?: UNIT;
    size?: ISizeSettings;
}