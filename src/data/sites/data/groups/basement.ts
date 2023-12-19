import { IGroup } from '../../../types'

export const Basement: IGroup = {
  icon: 'icon-shujuyuan',
  name: '基础地理',
  en_name: 'Basement',
  order: 30,
  children: [
    {
      icon: 'https://www.geonames.org/geonames.ico',
      name: 'GeoNames',
      en_name: 'GeoNames',
      description:
        'GeoNames是一个地理数据库，覆盖所有国家，包含超过1100万个可免费下载的地名。',
      en_description:
        'GeoNames is a geographical database that covers all countries and includes over 11 million place names available for free download.',
      site_url: 'http://www.geonames.org/',
      order: 1,
      tags: ['Geographic Database', 'Place Names', 'Free Download']
    }
  ]
}
