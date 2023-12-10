import { IGroup } from '../../../types'
export const VectorTile: IGroup = {
  icon: '',
  name: '矢量瓦片',
  en_name: 'VectorTile',
  order: 2,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Mapbox Vector Tile JS',
      en_name: 'Mapbox Vector Tile JS',
      description: 'A small library for working with vector tiles.',
      en_description: 'A small library for working with vector tiles.',
      site_url: 'https://github.com/mapbox/vector-tile-js',
      order: 22,
      tags: ['Vector Tiles', 'JavaScript', 'Mapbox']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Mapnik Vector Tile',
      en_name: 'Mapnik Vector Tile',
      description: 'Mapnik implementation of Mapbox Vector Tiles (MVT).',
      en_description: 'Mapnik implementation of Mapbox Vector Tiles (MVT).',
      site_url: 'https://github.com/mapbox/mapnik-vector-tile',
      order: 23,
      tags: ['Mapnik', 'Vector Tiles', 'Mapbox']
    },
    {
      icon: '',
      name: 'Tippecanoe',
      en_name: 'Tippecanoe',
      description:
        'Build vector tilesets from large collections of GeoJSON features.',
      en_description:
        'Build vector tilesets from large collections of GeoJSON features.',
      site_url: 'https://github.com/mapbox/tippecanoe',
      order: 24,
      tags: ['Vector Tilesets', 'GeoJSON', 'Mapbox']
    }
  ]
}
