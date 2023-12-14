import { IGroup } from '../../../types'

export const VectorData: IGroup = {
  icon: 'icon-shujuyuan',
  name: '矢量边界',
  en_name: 'Commonly Used',
  order: 1,
  children: [
    {
      icon: 'http://www.naturalearthdata.com/favicon.ico',
      name: '自然地球数据',
      en_name: 'Natural Earth Data',
      description:
        '自然地球数据提供全球范围内的矢量和影像数据。其最大优势在于数据的开放性，用户具有传播和修改数据的权限。',
      en_description:
        'Natural Earth Data provides global vector and raster data. Its major advantage lies in the openness of the data, granting users the permission to distribute and modify the data.',
      site_url: 'http://www.naturalearthdata.com/',
      order: 1,
      tags: ['地理空间数据', '栅格数据', '矢量数据', '开放数据']
    }
  ]
}
