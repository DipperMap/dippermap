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
    },
    {
      icon: 'https://ladsweb.modaps.eosdis.nasa.gov/images/favicon/index.ico',
      name: '一级和大气存档与分发系统分布式活动存档中心',
      en_name:
        'Level 1 and Atmospheric Archive and Distribution System Distributed Active Archive Center',
      description:
        'LAADS DAAC是美国国家航空航天局戈达德航天中心用于存储数据的网站接口。该平台提供了MODIS、Envisat、Sentinel等常见遥感数据。',
      en_description:
        "LAADS DAAC, the Level 1 and Atmospheric Archive and Distribution System Distributed Active Archive Center, is a website interface used by NASA's Goddard Space Flight Center for data storage. The platform offers commonly used remote sensing data such as MODIS, Envisat, Sentinel, and more.",
      site_url: 'https://ladsweb.modaps.eosdis.nasa.gov/',
      order: 9,
      tags: ['NASA', 'Remote Sensing Data', 'MODIS', 'Envisat', 'Sentinel']
    },
    {
      icon: 'https://srtm.csi.cgiar.org/wp-content/uploads/2018/11/cropped-cgiar-csi_new_logo_2011_final-2.png',
      name: '航天飞机雷达地形测绘使命SRTM',
      en_name: 'Space Shuttle Radar Topography Mission SRTM',
      description:
        'SRTM是由美国太空总署（NASA）和国防部国家测绘局（NIMA）联合测量的地形测绘使命。该任务主要以航天飞机为平台，对地球表面进行遥感测量，提供高质量的地形数据。',
      en_description:
        "The Space Shuttle Radar Topography Mission (SRTM) is a topographic mapping mission conducted in collaboration between NASA (National Aeronautics and Space Administration) and the National Geospatial-Intelligence Agency (NGA). Using the Space Shuttle as a platform, SRTM performs remote sensing measurements on Earth's surface, providing high-quality terrain data.",
      site_url: 'http://srtm.csi.cgiar.org/srtmdata/',
      order: 10,
      tags: [
        'NASA',
        'Topography Mapping',
        'SRTM',
        'Remote Sensing',
        'Terrain Data'
      ]
    },
    {
      icon: 'https://www.ngdc.noaa.gov/favicon.ico',
      name: '夜光遥感数据',
      en_name: 'Nighttime Lights Remote Sensing Data',
      description:
        '夜光遥感数据由美国国家地球物理数据中心（NGDC）提供。该数据用于观测地球表面的夜光亮度，为研究城市化、经济活动和人口分布等提供重要信息。',
      en_description:
        "Nighttime Lights Remote Sensing Data is provided by the National Geophysical Data Center (NGDC) of the United States. This data is used to observe the nighttime brightness of the Earth's surface, providing crucial information for studying urbanization, economic activities, and population distribution.",
      site_url: 'https://www.ngdc.noaa.gov/eog/download.html',
      order: 11,
      tags: [
        'Nighttime Lights',
        'Remote Sensing Data',
        'Urbanization',
        'Economic Activities',
        'Population Distribution'
      ]
    },
    {
      icon: 'https://landcover100.com/img/logo.png',
      name: '遥感产品数据云',
      en_name: 'Data Cloud of RS products - DEMs & LCs',
      description:
        '由锐多宝提供。目前涵盖了大部分的 DEM 数据和土地覆盖数据下载，以及部分数据的快速预览。下载无需登陆。',
      en_description:
        "Provided by Ruiduobao. The site currently provides freely download service as well as quick preview of most DEM datasets and land cover datasets.",
      site_url: 'https://landcover100.com',
      order: 12,
      tags: [
        'DEM',
        'Land Cover Data'
      ]
    }
  ]
}
