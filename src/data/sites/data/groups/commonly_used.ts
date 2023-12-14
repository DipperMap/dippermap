import { IGroup } from '../../../types'

export const CommonlyUsed: IGroup = {
  icon: 'icon-shujuyuan',
  name: '常用站点',
  en_name: 'Commonly Used',
  order: 1,
  children: [
    {
      icon: 'https://search.earthdata.nasa.gov/favicon.ico?v=1.1',
      name: 'MODIS-NASA Earthdata Search',
      en_name: 'MODIS-NASA Earthdata Search',
      description: 'MODIS数据发布平台',
      en_description: 'MODIS data publishing platform',
      site_url: 'https://search.earthdata.nasa.gov/search',
      order: 1,
      tags: ['Remote Sensing', 'MODIS']
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
      icon: 'https://dataspace.copernicus.eu/favicon.ico',
      name: '哨兵数据',
      en_name: 'Sentinel data',
      description: '哨兵数据发布平台',
      en_description: 'Sentinel data publish platform',
      site_url: 'https://dataspace.copernicus.eu/browser/',
      order: 3,
      tags: ['Remote Sensing', 'Sentinel']
    },
    {
      icon: '',
      name: '地理空间数据云',
      en_name: 'Geospatial Cloud',
      description:
        '免费DEM数据、Landsat系列、中巴资源卫星、MODIS数据的各种产品、EO-1数据、NOAAA VHRR数据产品、Sentinel数据等。账号注册，通过审核直接下载即可。',
      en_description:
        'Stable data resource updates, including free data such as Landsat series, China-Pakistan Resource Satellite, various products of MODIS data, DEM digital elevation data, EO-1 data, NOAA VHRR data products, Sentinel data, etc. Account registration allows direct download upon approval.',
      site_url: 'http://www.gscloud.cn/sources',
      order: 4,
      tags: ['Remote Sensing', 'Satellite', 'Earth Observation']
    },
    {
      icon: "https://ladsweb.modaps.eosdis.nasa.gov/images/favicon/index.ico",
      name: "一级和大气存档与分发系统分布式活动存档中心",
      en_name: "Level 1 and Atmospheric Archive and Distribution System Distributed Active Archive Center",
      description: "LAADS DAAC是美国国家航空航天局戈达德航天中心用于存储数据的网站接口。该平台提供了MODIS、Envisat、Sentinel等常见遥感数据。",
      en_description: "LAADS DAAC, the Level 1 and Atmospheric Archive and Distribution System Distributed Active Archive Center, is a website interface used by NASA's Goddard Space Flight Center for data storage. The platform offers commonly used remote sensing data such as MODIS, Envisat, Sentinel, and more.",
      site_url: "https://ladsweb.modaps.eosdis.nasa.gov/",
      order:5,
      tags: ["NASA", "Remote Sensing Data", "MODIS", "Envisat", "Sentinel"]
    }
  ]
}
