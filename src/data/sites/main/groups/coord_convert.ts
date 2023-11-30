// 坐标转换工具
import { IGroup } from '../../../types'
export const CoordConvert: IGroup = {
    icon: '',
    name: '坐标转换',
    order: 2,
    en_name: 'Coord',
    children: [{
        icon: "https://epsg.io/static/img/espg-logo.png",
        name: "epsg.io",
        en_name: "epsg.io",
        description: "全球坐标系转换工具",
        en_description: "Global Coordinate System Conversion Tool",
        site_url: "https://epsg.io/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      }]

}
