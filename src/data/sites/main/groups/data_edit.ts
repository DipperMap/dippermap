import { IGroup } from '../../../types'
export const DataEdit: IGroup = {
  icon: 'icon-shujubianji',
  name: '数据编辑',
  en_name: 'data edit',
  order: 0,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*RSdESJd70P8AAAAAAAAAAAAADjWqAQ/original',
      name: 'L7Editor',
      en_name: 'L7Editor',
      description: '多底图地理绘制工具',
      en_description: 'Multi-base map geographic drawing tool',
      site_url: 'https://l7editor.antv.antgroup.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://geojson.io/img/favicon.png',
      name: 'Geojson.io',
      en_name: 'Geojson.io',
      description: '用于创建、查看和共享空间数据的快速、简单的工具。',
      en_description:
        'A quick, simple tool for creating, viewing, and sharing spatial data.',
      site_url: 'https://geojson.io',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    }
  ]
}
