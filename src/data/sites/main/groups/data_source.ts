// 数据可视化
import { IGroup } from '../../../types'
export const DataSource: IGroup = {
    icon: '',
    name: '数据源',
    en_name: 'data source',
    order: 2,
    children: [{
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
      }]
}
