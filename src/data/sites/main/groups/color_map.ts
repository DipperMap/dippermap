import { IGroup } from "../../../types";

export const MapColor: IGroup = {
  icon: "icon-ditupeise",
  name: "地图颜色",
  en_name: "map color",
  order: 2,
  children: [
    {
      icon: "https://colorbrewer2.org/favicon.ico",
      name: "ColorBrewer",
      en_name: "ColorBrewer",
      description: "地图配色",
      en_description: "Map color",
      site_url: "https://colorbrewer2.org/",
      order: 2,
      tags: ["GIS", "Web", "Data"],
    },
  ],
};
