import { IGroup } from '../../../types'
export const DataProcess: IGroup = {
  icon: 'icon-a-shujuchuli1',
  name: '数据分析',
  en_name: 'data process',
  order: 2,
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
    }
  ]
}
