import { IGroup } from '../../../types'
export const MapEngine: IGroup = {
  icon: '',
  name: '地图引擎',
  en_name: 'Map Engine',
  order: 1,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*Y9hQQIqG4RwAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Leaflet',
      en_name: 'Leaflet',
      description: 'An open-source JavaScript library for interactive maps.',
      en_description: 'An open-source JavaScript library for interactive maps.',
      site_url: 'https://github.com/Leaflet/Leaflet',
      order: 1,
      tags: ['Interactive Maps', 'JavaScript Library', 'Open-source']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*AovwR7a7TqkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Mapbox GL JS',
      en_name: 'Mapbox GL JS',
      description:
        'A WebGL-powered library for creating beautiful, high-performance interactive maps.',
      en_description:
        'A WebGL-powered library for creating beautiful, high-performance interactive maps.',
      site_url: 'https://github.com/mapbox/mapbox-gl-js',
      order: 2,
      tags: ['WebGL', 'Interactive Maps', 'Data Visualization']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*ebYBSJl97_8AAAAAAAAAAAAADrZ5AQ/original',
      name: 'OpenLayers',
      en_name: 'OpenLayers',
      description:
        'A high-performance, feature-packed library for creating interactive maps on the web.',
      en_description:
        'A high-performance, feature-packed library for creating interactive maps on the web.',
      site_url: 'https://github.com/openlayers/openlayers',
      order: 3,
      tags: ['Interactive Maps', 'JavaScript Library', 'Web']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*BJsjQrU57ZkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'MapLibre',
      en_name: 'MapLibre',
      description:
        'An open-source JavaScript library for interactive maps, a fork of Mapbox GL JS.',
      en_description:
        'An open-source JavaScript library for interactive maps, a fork of Mapbox GL JS.',
      site_url: 'https://github.com/maplibre/maplibre-gl-js',
      order: 4,
      tags: ['Open-source', 'JavaScript Library', 'Interactive Maps']
    },
    {
      icon: '',
      name: 'Maptalks',
      en_name: 'Maptalks',
      description:
        'A lightweight JavaScript library for integrated 2D/3D maps and spatial analysis.',
      en_description:
        'A lightweight JavaScript library for integrated 2D/3D maps and spatial analysis.',
      site_url: 'https://github.com/maptalks/maptalks.js',
      order: 5,
      tags: ['JavaScript Library', '2D/3D Maps', 'Spatial Analysis']
    }
  ]
}
