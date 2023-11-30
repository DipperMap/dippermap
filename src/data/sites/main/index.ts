import { ISiteConfig } from "../../types";
import { MapColor } from "./groups/color_map";
import { CoordConvert } from "./groups/coord_convert";
import { DataCollaboration } from "./groups/data_collaboration";
import { DataEdit } from "./groups/data_edit";
import { DataFormatConvert } from "./groups/data_format_convert";
import { DataProcess } from "./groups/data_process";
import { GeoCoding } from "./groups/geocoding";
import { OnlineMap } from "./groups/onlinemap";
import { Visulization } from "./groups/visualization";



export const MainConfig: ISiteConfig = {
    name: "主站",
    en_name: "main",
    groups: [
        DataEdit,
        DataProcess,
        DataFormatConvert,
        CoordConvert,
        Visulization,
        MapColor,
        DataCollaboration,
        OnlineMap,
        GeoCoding,
    ].sort((a, b) => a.order - b?.order),
};
