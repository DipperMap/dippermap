import { IGroup } from '../../../types'
export const GeospatialAnalysis: IGroup = {
  icon: 'icon-a-shujuchuli1',
  name: '空间分析',
  en_name: 'data process',
  order: 12,
  children: [
    {
      icon: 'https://raw.githubusercontent.com/Turfjs/turf/9a1d5e8d99564d4080f1e2bf1517ed41d18012fa/logo.png',
      name: 'Turf.js',
      en_name: 'Turf.js',
      description: '高级地理空间分析库',
      en_description: 'Advanced geospatial analysis for browsers and Node.js',
      site_url: 'https://turfjs.org/',
      order: 1,
      tags: ['GIS', 'Geospatial', 'Analysis']
    }
  ]
}
