import {UNIT} from "../../geometry/generic/UNIT";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {IPaddingData} from "../../geometry/generic/Padding";
import {ISizeData} from "../../geometry/generic/Size";

export interface IGenericPageData {
    pageMargin: IPaddingData;
    containers: IRectangleContainerData[];
    unit: UNIT;
    size: ISizeData;
}