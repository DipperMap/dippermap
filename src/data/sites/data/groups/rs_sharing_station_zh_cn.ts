import { IGroup } from '../../../types'

export const RSSharingStationCN: IGroup = {
  icon: 'icon-yaogancehui',
  name: '遥感',
  en_name: 'RS Data Sharing station',
  order: 2,
  children: [
    {
      icon: 'http://ids.ceode.ac.cn/images/wen-top.png',
      name: '中国遥感数据共享网',
      en_name: 'China Remote Sensing Data Sharing Network',
      description:
        '国内存档周期最长的数据网站，对Landsat数据免费共享，也可订购国外商业卫星数据。注册账号，通过审核就可直接下载。',
      en_description:
        'The longest-archived data website in China, offering free sharing of Landsat data and the option to order commercial satellite data from abroad. Direct download available upon account registration and approval.',
      site_url: 'http://ids.ceode.ac.cn/',
      order: 12,
      tags: ['Remote Sensing', 'Satellite', 'Earth Observation']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*RCHPRq0zdWkAAAAAAAAAAAAADrZ5AQ/original',
      name: '卫星资源中心数据平台',
      en_name: 'Cresda Data Platform',
      description: 'Cresda 数据平台提供地球空间数据的集成、管理和应用服务。',
      en_description:
        'Cresda Data Platform offers integrated, managed, and applied services for Earth spatial data.',
      site_url: 'https://data.cresda.cn/#/home',
      order: 12,
      tags: [
        'Spatial Data',
        'Data Integration',
        'Data Management',
        'Data Application'
      ]
    },
    {
      icon: 'https://dataspace.copernicus.eu/favicon.ico',
      name: '哨兵数据',
      en_name: 'Sentinel data',
      description: '哨兵数据发布平台',
      en_description: 'Sentinel data publish platform',
      site_url: 'https://dataspace.copernicus.eu/browser/',
      order: 2,
      tags: ['Remote Sensing', 'Sentinel']
    },
    {
      icon: 'https://earthexplorer.usgs.gov/img/favicon.ico',
      name: 'Landsat-USGS',
      en_name: 'USGS',
      description: 'Landsat数据发布平台，同时也包含多种遥感数据浏览和发布',
      en_description:
        'Landsat data publishing platform, but also includes a variety of remote sensing data browsing and publishing',
      site_url: 'https://earthexplorer.usgs.gov/',
      order: 2,
      tags: ['Remote Sensing', 'Landsat']
    },
    {
      icon: 'https://search.earthdata.nasa.gov/favicon.ico?v=1.1',
      name: 'MODIS-NASA Earthdata Search',
      en_name: 'MODIS-NASA Earthdata Search',
      description: 'MODIS数据发布平台',
      en_description: 'MODIS data publishing platform',
      site_url: 'https://search.earthdata.nasa.gov/search',
      order: 2,
      tags: ['Remote Sensing', 'MODIS']
    },
    {
      icon: 'https://search.earthdata.nasa.gov/favicon.ico?v=1.1',
      name: '吉林一号',
      en_name: 'Jilin No.1',
      description: '吉林一号卫星商城',
      en_description: 'Jilin yihao satellite shopping mall',
      site_url: 'https://www.jl1mall.com/store/',
      order: 2,
      tags: ['Remote Sensing', 'Jilin']
    },
    {
      icon: 'https://www.geoportal.org/favicon.ico',
      name: 'GEOSS Portal',
      en_name: 'Global Earth Observation System of Systems (GEOSS) Portal',
      description:
        'GEOSS Portal is the primary access point for the Global Earth Observation System of Systems (GEOSS), a collaborative effort to build a comprehensive and coordinated global network of Earth observation systems. The portal provides users with access to a wealth of Earth observation data, information, and services contributed by various international organizations, space agencies, and research institutions.',
      en_description:
        'The GEOSS Portal serves as a central hub for accessing a wide range of Earth observation data and resources. It plays a crucial role in promoting the sharing of environmental data and information on a global scale. Users, including scientists, policymakers, and the general public, can explore and utilize the diverse datasets available through the portal to address environmental challenges, monitor changes, and support informed decision-making.',
      site_url: 'https://www.geoportal.org/',
      order: 8,
      tags: [
        'Earth Observation',
        'Global Collaboration',
        'Data Access',
        'Environmental Monitoring'
      ]
    }
  ]
}
