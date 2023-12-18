import { IGroup } from '../../../types'
export const DataProcess: IGroup = {
  icon: 'icon-a-shujuchuli1',
  name: 'GIS 软件工具',
  en_name: 'data process',
  order: 4,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'QGIS',
      en_name: 'QGIS',
      description:
        'A free and open-source geographic information system (GIS) for viewing, editing, and analyzing spatial data.',
      en_description:
        'A free and open-source geographic information system (GIS) for viewing, editing, and analyzing spatial data.',
      site_url: 'https://www.qgis.org/',
      order: 11,
      tags: ['GIS', 'Open-source', 'Spatial Data']
    },
    {
      icon: '',
      name: 'GeoDa',
      en_name: 'GeoDa',
      description:
        'Dedicated to research, education, and software development in spatial analysis and spatial statistics.',
      en_description:
        'Dedicated to research, education, and software development in spatial analysis and spatial statistics.',
      site_url: 'https://geodacenter.github.io/index-cn.html',
      order: 14,
      tags: ['Spatial Analysis', 'Spatial Statistics', 'Research']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'TileMill',
      en_name: 'TileMill',
      description: '一个开源的地图设计工作室，由志愿者开发的社区提供支持。',
      en_description:
        'An open-source map design studio, developed by a community of volunteer open source contributors.',
      site_url: 'https://tilemill-project.github.io/tilemill/',
      order: 48,
      tags: ['Open Source', 'Map Design']
    },
    {
      icon: 'http://udig.refractions.net/images/udig.png',
      name: 'uDig',
      en_name: 'uDig',
      description:
        '一个轻量级且用户友好的Web GIS。创建、从各种来源导入数据、导出地图或轻松在线分享。',
      en_description:
        'A lightweight and user-friendly Web GIS. Create, import data from various sources, export maps or share them online freely and easily.',
      site_url: 'http://udig.refractions.net/',
      order: 49,
      tags: ['GIS', 'Web GIS', 'Data Import', 'Data Export']
    }
  ]
}
