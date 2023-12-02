// 数据可视化
import { IGroup } from '../../../types'
export const DataSource: IGroup = {
  icon: 'icon-shujuyuanguanli',
  name: '数据源',
  en_name: 'data source',
  order: 1.1,
  children: [
    {
      icon: 'https://img.alicdn.com/imgextra/i3/O1CN01NQARus1gyEAmmQ9T0_!!6000000004210-0-tps-670-670.jpg',
      name: 'DataV.GeoAtlas',
      en_name: 'DataV.GeoAtlas',
      description: '行政区数据下载',
      en_description:
        'A tool for topologically aware shape simplification. Reads and writes Shapefile, GeoJSON and TopoJSON formats.',
      site_url: 'https://datav.aliyun.com/portal/school/atlas/area_selector',
      order: 2,
      tags: '阿里云,DataV,数据可视化,GeoAtlas,数字孪生,GIS'.split(',')
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*uQbXRLw_Q2UAAAAAAAAAAAAADmJ7AQ/original',
      name: '行政区划数据下载',
      en_name: '',
      description: '一站式行政区划数据下载、应用平台',
      en_description:
        'L7 AntV geocoding tool to retrieve latitude and longitude by address',
      site_url: 'https://l7.antv.antgroup.com/custom/tools',
      order: 4,
      tags: ['Geocoding', 'Maps', 'Location', 'AntV']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*Yfv_TbDaaRgAAAAAAAAAAAAADrZ5AQ/original',
      name: '标准地图服务',
      en_name: 'Standard Map Service',
      description: '中华人民共和国自然资源部的地理信息服务平台。',
      en_description:
        'BZDT is the Geographic Information Service Platform of the Ministry of Natural Resources of the People\'s Republic of China.',
      site_url: 'http://bzdt.ch.mnr.gov.cn/',
      order: 12,
      tags: ['Geographic Information', 'China', 'Government']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*preMSJSTz4cAAAAAAAAAAAAADrZ5AQ/original',
      name: '民政部中国地图',
      en_name: 'China Map by the Ministry of Civil Affairs',
      description: '中华人民共和国行政区划地图，提供全国范围内的行政区划信息。',
      en_description:
        'Administrative division map of the People\'s Republic of China, providing nationwide administrative division information.',
      site_url: 'http://xzqh.mca.gov.cn/map',
      order: 14,
      tags: ['Administrative Division', 'China', 'Map']
    }
  ]
}
