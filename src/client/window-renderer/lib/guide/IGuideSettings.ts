import {Horizontal} from "./Horizontal";
import {Vertical} from "./Vertical";
import {UNIT} from "../geometry/generic/UNIT";

export interface IGuideSettings {
    show: boolean;
    horizontal?: Horizontal[];
    vertical?: Vertical[];
    unit?: UNIT;
}
