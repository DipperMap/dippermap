import { IGroup } from '../../../types'
export const DataProcess: IGroup = {
  icon: 'icon-a-shujuchuli1',
  name: '数据处理',
  en_name: 'data process',
  order: 2,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*SatiTZtUKpEAAAAAAAAAAAAADrZ5AQ/original',
      name: 'MapShaper',
      en_name: 'MapShaper',
      description: '地理数据预览,编辑工具',
      en_description:
        'A tool for topologically aware shape simplification. Reads and writes Shapefile, GeoJSON and TopoJSON formats.',
      site_url: 'http://www.mapshaper.org/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      "icon": "https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original",
      "name": "QGIS",
      "en_name": "QGIS",
      "description": "A free and open-source geographic information system (GIS) for viewing, editing, and analyzing spatial data.",
      "en_description": "A free and open-source geographic information system (GIS) for viewing, editing, and analyzing spatial data.",
      "site_url": "https://www.qgis.org/",
      "order": 11,
      "tags": ["GIS", "Open-source", "Spatial Data"]
    }
    
  ]
}
