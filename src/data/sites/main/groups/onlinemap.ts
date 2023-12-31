import { IGroup } from '../../../types'
export const OnlineMap: IGroup = {
  icon: 'icon-a-zaixianditu2',
  name: '在线地图',
  order: 8,
  en_name: 'onlinemap',
  children: [
    {
      icon: 'https://www.tianditu.gov.cn/static/favicon.ico',
      name: '天地图',
      en_name: 'Tianditu',
      description: '天地图',
      en_description: 'Tianditu',
      site_url: 'https://www.tianditu.gov.cn/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://www.baidu.com/favicon.ico',
      name: '百度地图',
      en_name: 'Baidu Map',
      description: '百度地图',
      en_description: 'Baidu Map',
      site_url: 'https://map.baidu.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://www.amap.com/favicon.ico',
      name: '高德地图',
      en_name: 'Amap',
      description: '高德地图',
      en_description: 'Amap',
      site_url: 'https://www.amap.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://map.qq.com/favicon.ico',
      name: '腾讯地图',
      en_name: 'Tencent Map',
      description: '腾讯地图',
      en_description: 'Tencent Map',
      site_url: 'https://map.qq.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kqR8Q7bJYiwAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Here Map',
      en_name: 'Here Map',
      description: 'Here Map',
      en_description: 'Here Map',
      site_url: 'https://maps.here.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*TrBASa3dWpkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Google Map',
      en_name: 'Google Map',
      description: 'Google Map',
      en_description: 'Google Map',
      site_url: 'https://www.google.com/maps',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    }
  ]
}
