import {IPaddingData} from "../../geometry/generic/Padding";
import {IRectangleData} from "../../geometry/Rectangle";
import {IContainerData} from "../generic/IContainerData";

export interface IRectangleContainerData extends IRectangleData, IContainerData  {
    margin: IPaddingData;
    cssExtended: ICssExtended;
}

export interface ICssExtended {
    [key: string]: string,
}