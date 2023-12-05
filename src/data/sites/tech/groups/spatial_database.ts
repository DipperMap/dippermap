import { IGroup } from '../../../types'
export const spatialDatabase: IGroup = {
  icon: '',
  name: '空间数据库',
  en_name: 'spatial_database',
  order: 8,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*5dvQT7prCXwAAAAAAAAAAAAADrZ5AQ/original',
      name: 'PostGIS',
      en_name: 'PostGIS',
      description:
        'A spatial database extender for PostgreSQL, allowing geographic objects to be stored, queried, and processed.',
      en_description:
        'A spatial database extender for PostgreSQL, allowing geographic objects to be stored, queried, and processed.',
      site_url: 'https://postgis.net/',
      order: 6,
      tags: ['Spatial Database', 'PostgreSQL', 'Geographic Objects']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*GW_LRZoOpjUAAAAAAAAAAAAADrZ5AQ/original',
      name: 'SpatiaLite',
      en_name: 'SpatiaLite',
      description:
        'A spatial extension for SQLite, enabling spatial support for geographic data.',
      en_description:
        'A spatial extension for SQLite, enabling spatial support for geographic data.',
      site_url: 'https://www.gaia-gis.it/fossil/libspatialite/index',
      order: 7,
      tags: ['Spatial Extension', 'SQLite', 'Geographic Data']
    }
  ]
}
