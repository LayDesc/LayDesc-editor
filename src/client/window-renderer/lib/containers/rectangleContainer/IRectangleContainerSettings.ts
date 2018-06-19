import {IPaddingSettings} from "../../geometry/generic/Padding";
import {IRectangleSettings} from "../../geometry/Rectangle";
import {IContainerData, IContainerSettings} from "../generic/IContainerData";
import {ICssExtended} from "./IRectangleContainerData";

export interface IRectangleContainerSettings extends IRectangleSettings, IContainerSettings {
    margin?: IPaddingSettings;
    cssExtended?: ICssExtended;
}
