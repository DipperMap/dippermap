import { IGroup } from '../../../types'

export const MapColor: IGroup = {
  icon: 'icon-ditupeise',
  name: '地图颜色',
  en_name: 'map color',
  order: 2,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*j48OTLE2f4AAAAAAAAAAAAAADrZ5AQ/original',
      name: 'ColorBrewer',
      en_name: 'ColorBrewer',
      description: '地图配色',
      en_description: 'Map color',
      site_url: 'https://colorbrewer2.org/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    }
  ]
}
