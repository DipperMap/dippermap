import { IGroup } from '../../../types'

export const Basement: IGroup = {
  icon: 'icon-shujuyuan',
  name: '基础地理',
  en_name: 'Basement',
  order: 30,
  children: [
    {
      icon: 'https://www.geonames.org/geonames.ico',
      name: 'GeoNames',
      en_name: 'GeoNames',
      description:
        'GeoNames是一个地名数据库，覆盖所有国家，包含超过1100万个可免费下载的地名。',
      en_description:
        'GeoNames is a geographical database that covers all countries and includes over 11 million place names available for free download.',
      site_url: 'http://www.geonames.org/',
      order: 1,
      tags: ['Geographic Database', 'Place Names', 'Free Download']
    },
    {
      icon: '',
      name: '全球地图数据档案',
      en_name: 'Global Map Data Archives',
      description:
        '全球地图数据档案提供全球范围内的地图数据。这包括地理、地形和土地利用等多种类型的地图数据，为各种应用提供丰富的地理信息。',
      en_description:
        'Global Map Data Archives offer map data covering the entire globe. This includes various types of maps such as geographical, topographical, and land use data, providing rich geographic information for diverse applications.',
      site_url: 'https://globalmaps.github.io/',
      order: 2,
      tags: [
        'Global Maps',
        'Geographic Data',
        'Topographical Data',
        'Land Use Data'
      ]
    }
  ]
}
