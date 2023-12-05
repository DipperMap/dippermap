import { IGroup } from '../../../types'
export const GeospatialAnalysis: IGroup = {
  icon: 'icon-a-shujuchuli1',
  name: '空间分析',
  en_name: 'data process',
  order: 12,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*x7cSR676G70AAAAAAAAAAAAADrZ5AQ/original',
      name: 'Turf.js',
      en_name: 'Turf.js',
      description: '高级地理空间分析库',
      en_description: 'Advanced geospatial analysis for browsers and Node.js',
      site_url: 'https://github.com/Turfjs/turf/',
      order: 1,
      tags: ['GIS', 'Geospatial', 'Analysis']
    },{
      "icon": "",
      "name": "GEOS-WASM",
      "en_name": "GEOS-WASM",
      "description": "WebAssembly port of the Geometry Engine - Open Source (GEOS) library for geometric operations.",
      "en_description": "WebAssembly port of the Geometry Engine - Open Source (GEOS) library for geometric operations.",
      "site_url": "https://github.com/chrispahm/geos-wasm",
      "order": 9,
      "tags": ["WebAssembly", "Geometry Engine", "Geometric Operations"]
    }
    
  ]
}
