import { IGroup } from '../../../../types'
export const C: IGroup = {
  icon: 'icon-cyuyan',
  name: 'C 语言',
  en_name: 'C',
  order: 5,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Datamaps',
      en_name: 'Datamaps',
      description:
        '用于索引大型地理点或线列表并从索引动态生成地图瓦片以进行显示的工具。',
      en_description:
        'This is a tool for indexing large lists of geographic points or lines and dynamically generating map tiles from the index for display.',
      site_url: 'https://github.com/ericfischer/datamaps',
      order: 84,
      tags: ['Geographic Points', 'Map Tiles', 'Indexing']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'H3',
      en_name: 'H3',
      description: '六边形分层地理空间索引系统。',
      en_description: 'Hexagonal hierarchical geospatial indexing system.',
      site_url: 'https://github.com/uber/h3',
      order: 85,
      tags: ['Hexagonal', 'Geospatial Indexing']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'libpostal',
      en_name: 'libpostal',
      description:
        '用于解析/标准化世界各地街道地址的 C 库。由统计自然语言处理和开放地理数据驱动。',
      en_description:
        'A C library for parsing/normalizing street addresses around the world. Powered by statistical NLP and open geo data.',
      site_url: 'https://github.com/openvenues/libpostal',
      order: 86,
      tags: ['Street Addresses', 'C Library', 'NLP', 'Geodata']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'libvips',
      en_name: 'libvips',
      description: '低内存需求的快速图像处理库。',
      en_description: 'A fast image processing library with low memory needs.',
      site_url: 'https://github.com/libvips/libvips',
      order: 87,
      tags: ['Image Processing', 'Low Memory']
    },
    {
      icon: '',
      name: 'Shapefile C Library',
      en_name: 'Shapefile C Library',
      description:
        '提供用于读取、写入和更新（在有限程度上）.shp 和 .dbf 文件的简单 C 程序的能力。',
      en_description:
        'Provides the ability to write simple C programs for reading, writing and updating (to a limited extent) .shp and .dbf files.',
      site_url: 'http://shapelib.maptools.org/',
      order: 88,
      tags: ['.shp Files', '.dbf Files', 'C Library']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'YOLT',
      en_name: 'YOLT',
      description: 'You Only Look Twice: 快速多尺度卫星图像对象检测。',
      en_description:
        'You Only Look Twice: Rapid Multi-Scale Object Detection In Satellite Imagery.',
      site_url: 'https://github.com/CosmiQ/yolt',
      order: 89,
      tags: ['Satellite Imagery', 'Object Detection']
    }
  ]
}
