import { IGroup } from '../../../types'
export const DataCollaboration: IGroup = {
  icon: 'icon-shujuxietong',
  name: '数据协同',
  order: 2,
  en_name: 'Data Collaboration',
  children: [
    {
      icon: 'https://maptable.com/favicon.ico',
      name: 'Maptable',
      en_name: 'Maptable',
      description: '空间数据协同工具',
      en_description: 'Spatial data collaboration tools',
      site_url: 'https://maptable.com/zh-cn/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*yWzeTLsK8cQAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Felt',
      en_name: 'Felt',
      description: '地图制图分享',
      en_description: 'Fast, flexible maps to grow your business',
      site_url: 'https://felt.com',
      order: 1,
      tags: ['Crafts', 'Marketplace', 'Handmade']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*8nBdR6HWreoAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Scribble Maps',
      en_name: 'Scribble Maps',
      description:
        'Create custom maps with scribbles, shapes, and more with this online mapping tool.',
      en_description:
        'Create custom maps with scribbles, shapes, and more with this online mapping tool.',
      site_url: 'https://www.scribblemaps.com/',
      order: 26,
      tags: ['Custom Maps', 'Mapping Tool', 'Online Maps']
    }
  ]
}
