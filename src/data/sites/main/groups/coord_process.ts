// 坐标转换工具
import { IGroup } from '../../../types'
export const CoordConvert: IGroup = {
  icon: 'icon-tool_zuobiaozhuanhuan',
  name: '坐标处理与文件转换',
  order: 4,
  en_name: 'Coord',
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*D4jaRr4AnI0AAAAAAAAAAAAADrZ5AQ/original',
      name: 'EPSG.io',
      en_name: 'epsg.io',
      description: '全球坐标系转换工具',
      en_description: 'Global Coordinate System Conversion Tool',
      site_url: 'https://epsg.io/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      site_url: 'https://www.lddgo.net/base/class?classID=8',
      name: '坐标转换',
      icon: 'https://www.lddgo.net/img/icon.png',
      description: '坐标/经纬度查询',
      en_name: 'Coord',
      en_description: 'Coord',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      site_url: 'http://www.wmksj.com/tool/coordinate.html',
      name: '坐标系转换',
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*KVUpTJBVXl4AAAAAAAAAAAAADrZ5AQ/original',
      description: 'BD09、GCJ02、WGS84坐标系转换',
      en_name: '坐标系转换',
      en_description: 'BD09、GCJ02、WGS84坐标系转换   ',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: '',
      name: 'Gdal3.js',
      en_name: 'gdal3.js',
      description: '栅格矢量格式转换',
      en_description:
        ' Convert raster and vector geospatial data to various formats and coordinate systems entirely in the browser',
      site_url: 'https://gdal3.js.org/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*4wYwSKCJ5AIAAAAAAAAAAAAADrZ5AQ/original',
      name: 'MyGeodata Cloud Converter',
      en_name: 'MyGeodata Cloud Converter',
      description: '在线地理数据格式转换工具',
      en_description: 'Online geospatial data format conversion tool',
      site_url: 'https://mygeodata.cloud/converter/',
      order: 5,
      tags: ['Geospatial Data', 'Converter', 'GIS']
    }
  ]
}
