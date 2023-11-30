export type toolsType = "tool" | "data" | "tool" | "DataBase" | "Map Server";
export interface IItem {
  icon: string;
  name: string;
  en_name: string;
  description: string;
  en_description: string;
  site_url?: string;
  tags: string[];
  github?: string;
  order?: number;
  favorite?: boolean;
}
export interface IGroup {
  icon?: string;
  name: string;
  en_name: string;
  children: IItem[];
}
export interface IConfig {
  [key: string]: IGroup;
}
export const siteConfig: IConfig = {
  tool: {
    // icon: "tool",
    name: "工具",
    en_name: "Tools",
    children: [
      {
        icon: "https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*RSdESJd70P8AAAAAAAAAAAAADjWqAQ/original",
        name: "L7Editor",
        en_name: "L7Editor",
        description: "多底图地理绘制工具",
        en_description: "Multi-base map geographic drawing tool",
        site_url: "https://l7editor.antv.antgroup.com/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        icon: "https://mapshaper.org/images/icon.png",
        name: "MapShaper",
        en_name: "MapShaper",
        description: "地理数据预览,编辑工具",
        en_description:
          "A tool for topologically aware shape simplification. Reads and writes Shapefile, GeoJSON and TopoJSON formats.",
        site_url: "http://www.mapshaper.org/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        icon: "https://img.alicdn.com/imgextra/i3/O1CN01NQARus1gyEAmmQ9T0_!!6000000004210-0-tps-670-670.jpg",
        name: "DataV.GeoAtlas",
        en_name: "DataV.GeoAtlas",
        description:
          "由阿里云DataV数据可视化团队出品，多年深耕数据可视化领域，数据大屏业务开拓者和领航者。致力用震撼而清晰的视觉语言，让更多人读懂大数据，受惠数据驱动的决策方式。",
        en_description:
          "A tool for topologically aware shape simplification. Reads and writes Shapefile, GeoJSON and TopoJSON formats.",
        site_url: "https://datav.aliyun.com/portal/school/atlas/area_selector",
        order: 2,
        tags: "阿里云,DataV,数据可视化,GeoAtlas,数字孪生,GIS".split(","),
      },
      {
        icon: "https://geojson.io/img/favicon.png",
        name: "Geojson.io",
        en_name: "Geojson.io",
        description: "用于创建、查看和共享空间数据的快速、简单的工具。",
        en_description:
          "A quick, simple tool for creating, viewing, and sharing spatial data.",
        site_url: "https://geojson.io",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        icon: "",
        name: "Maptable",
        en_name: "Maptable",
        description: "空间数据协同工具",
        en_description: "Spatial data collaboration tools",
        site_url: "https://maptable.com/zh-cn/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        icon: "https://epsg.io/static/img/espg-logo.png",
        name: "epsg.io",
        en_name: "epsg.io",
        description: "全球坐标系转换工具",
        en_description: "Global Coordinate System Conversion Tool",
        site_url: "https://epsg.io/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        icon: "https://geoman.io/logo/geoman-logo.svg",
        name: "Geoman",
        en_name: "Geoman",
        description: "地理信息数据管理平台",
        en_description: "Geographic information data management platform",
        site_url: "https://geoman.io/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        icon: "",
        name: "Windy",
        en_name: "Windy",
        description: "天气数据发布平台",
        en_description: "Weather data publishing platform",
        site_url: "https://www.windy.com/",
        order: 2,
        tags: ["GIS", "Web", "Data","Visualization"],
      },
    ],
  },
};
