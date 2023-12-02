import { IGroup } from '../../../types'
export const RSPlatform: IGroup = {
  icon: 'icon-yaogancehui',
  name: '遥感平台',
  en_name: 'RS Platform',
  order: 2,
  children: [
    // gee
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*527fS73uMqUAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Google Earth Engine',
      en_name: 'Google Earth Engine',
      description: 'Google Earth Engine',
      en_description: 'Google Earth Engine',
      site_url: 'https://earthengine.google.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://img.alicdn.com/imgextra/i4/O1CN01KsDwjf1a87SCHK9Kv_!!6000000003284-73-tps-128-128.ico',
      name: 'AIEarth',
      en_name: 'Aliyun AIEarth',
      description: '阿里云地球引擎，提供强大的地理信息处理和可视化服务。',
      en_description:
        'Aliyun AIEarth, providing powerful geospatial processing and visualization services.',
      site_url: 'https://engine-aiearth.aliyun.com/#/',
      order: 7,
      tags: ['Cloud Computing', 'Geospatial Processing', 'Visualization']
    },
    {
      icon: 'https://online.geovisearth.com/favicon.ico',
      name: '星球地图',
      en_name: 'GeoVis Earth Online Browser',
      description: 'GeoVis Earth 在线浏览器，提供强大的地理可视化服务。',
      en_description:
        'GeoVis Earth Online Browser, providing powerful geospatial visualization services.',
      site_url: 'https://online.geovisearth.com/browser',
      order: 8,
      tags: ['Geospatial Visualization', 'Maps', 'Online Browser']
    },
    {
      icon: 'https://senseearth-cloud.com/favicon.ico',
      name: 'SenseEarth Cloud',
      en_name: 'SenseEarth Cloud',
      description: 'SenseEarth Cloud 提供先进的地球观测数据处理和分析服务。',
      en_description:
        'SenseEarth Cloud offers advanced Earth observation data processing and analysis services.',
      site_url: 'https://senseearth-cloud.com/',
      order: 9,
      tags: [
        'Earth Observation',
        'Data Processing',
        'Analysis',
        'Cloud Services'
      ]
    },
    {
      icon: 'https://engine.piesat.cn/favicon.ico',
      name: 'PIESAT Engine',
      en_name: 'PIESAT Engine',
      description: 'PIESAT Engine 提供全球卫星影像数据服务与应用解决方案。',
      en_description:
        'PIESAT Engine offers global satellite imagery data services and application solutions.',
      site_url: 'https://engine.piesat.cn/',
      order: 10,
      tags: ['Satellite Imagery', 'Data Services', 'Geospatial Applications']
    }
  ]
}
