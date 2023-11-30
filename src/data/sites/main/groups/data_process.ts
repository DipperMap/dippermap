import { IGroup } from '../../../types'
export const DataProcess: IGroup = {
    icon: '',
    name: '数据处理',
    en_name: 'data process',
    order: 2,
    children: [{
        icon: "https://mapshaper.org/images/icon.png",
        name: "MapShaper",
        en_name: "MapShaper",
        description: "地理数据预览,编辑工具",
        en_description:
          "A tool for topologically aware shape simplification. Reads and writes Shapefile, GeoJSON and TopoJSON formats.",
        site_url: "http://www.mapshaper.org/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      }]
}
