import { IGroup } from '../../../types'

export const SharingStation: IGroup = {
  icon: 'icon-ditupeise',
  name: '综合分享站',
  en_name: 'Sharing station',
  order: 2,
  children: [
    {
      icon: '',
      name: '地理空间数据云',
      en_name: 'Geospatial Cloud',
      description:
        '数据资源更新比较稳定，免费数据包括Landsat系列、中巴资源卫星、MODIS数据的各种产品、DEM数字高程数据、EO-1数据、NOAAA VHRR数据产品、Sentinel数据等。账号注册，通过审核直接下载即可。',
      en_description:
        'Stable data resource updates, including free data such as Landsat series, China-Pakistan Resource Satellite, various products of MODIS data, DEM digital elevation data, EO-1 data, NOAA VHRR data products, Sentinel data, etc. Account registration allows direct download upon approval.',
      site_url: 'http://www.gscloud.cn/sources',
      tags: ['Remote Sensing', 'Satellite', 'Earth Observation']
    },

    {
      icon: 'http://www.geodata.cn/res/images/favicon.png',
      name: '国家地球系统科学数据中心共享服务平台',
      en_name:
        'National Earth System Science Data Center Shared Service Platform',
      description:
        '包含各学科数据，整合集成分布在国内外数据中心群、高等院校、科研院所以及科学家个人产生的数据资源。账号注册，直接下载即可。',
      en_description:
        'It includes data from various disciplines, integrating and distributing data resources produced by domestic and foreign data center groups, universities, research institutes, and individual scientists. Direct download available upon account registration.',
      site_url: 'http://www.geodata.cn/data/publisher.html',
      order: 2,
      tags: ['Earth System Science', 'Data Center', 'Data Sharing']
    },
    {
      icon: 'https://chinageoss.cn/favicon.ico',
      name: '国家综合地球观测数据共享平台',
      en_name: 'China GEOSS Data Sharing Platform',
      description:
        '国内卫星数据：资源、高分、气象、海洋、环境、快舟、北京一号等。国外卫星数据：Landsat系列、MODIS、EO-1、IRS-P6、ENVISAT-1、ERS-2、RESOURCESAT-1。大部分数据可共享下载。',
      en_description:
        'Domestic satellite data: Ziyuan, High-Resolution, Meteorological, Ocean, Environmental, Kuaizhou, Beijing-1, etc. Foreign satellite data: Landsat series, MODIS, EO-1, IRS-P6, ENVISAT-1, ERS-2, RESOURCESAT-1. Most data can be shared and downloaded.',
      site_url: 'https://chinageoss.cn/',
      tags: ['Satellite Data', 'Earth Observation', 'Geoscience']
    },
    {
      icon: 'http://www.dsac.cn/Content/img/logo_head.png',

      name: '地理监测云平台',
      en_name: 'Geographical National Conditions Monitoring Cloud Platform',
      description:
        '云平台主要包含两部分——时空数据平台和数值模拟研究平台，特别是在现已建成的生态环境科学模型库的基础上，发展了数值模拟相关的工具库，并与时空数据平台进行集成，形成了具有国内领先水平的生态环境科学数值研究环境。针对研究、规划、政策制定及决策等不同需求提供科学可靠的空间信息定制产品和系统解决方案，满足从个人用户到国家政府部门的各级用户需求。部分数据免费。',
      en_description:
        'The cloud platform mainly includes two parts: the spatiotemporal data platform and the numerical simulation research platform. It has developed a numerical simulation-related tool library based on the existing ecological environment science model library and integrated it with the spatiotemporal data platform, forming a domestically leading ecological environment science numerical research environment. It provides scientific and reliable spatial information customized products and system solutions for different needs such as research, planning, policy formulation, and decision-making, meeting the needs of users at all levels from individuals to national government departments. Some data is free.',
      site_url: 'http://www.dsac.cn/',
      order: 4,
      tags: [
        'Geospatial Data',
        'Numerical Simulation',
        'Ecological Environment'
      ]
    },
    {
      icon: 'https://resourcewatch.org/favicon.ico',
      name: '全球资源观察',
      en_name: 'Global Resource Watch',
      description: '世界资源研究所主办的动态数据集发布平台',
      en_description:
        'Resource Watch provides trusted and timely data for a sustainable future.',
      site_url: 'https://resourcewatch.org/data/explore',
      order: 4,
      tags: ['Geospatial Data', 'Ecological Environment']
    },
    {
      icon: 'http://www.data.ac.cn/favicon.ico',
      name: '资源学科创新平台',
      en_name: 'Resource Science Innovation Platform',
      description:
        '资源学科创新平台是面向人地系统基础研究、国家经济建设和国家战略需求的数据库服务系统。以人口、资源、环境和发展（PRED）为核心，平台功能丰富，使用简单、方便。',
      en_description:
        'The Resource Science Innovation Platform is a database service system oriented towards fundamental research in human-land systems, national economic development, and strategic national needs. With a core focus on population, resources, environment, and development (PRED), the platform offers rich functionality and is user-friendly.',
      site_url: 'http://www.data.ac.cn/',
      order: 4,
      tags: ['Resource Science', 'Innovation Platform', 'Data Services']
    },
    {
      icon: 'https://worldmap.maps.arcgis.com/favicon.ico',
      name: '哈佛大学世界地图',
      en_name: 'Harvard World Map',
      description:
        '哈佛大学世界地图提供多种数据类型，包括交通网络（含高铁、高速、机场等）、宗教信仰分布、人口密度图、能源图、教育分布、环境（水质、空气质量、CO2、PM2.5等）。',
      en_description:
        'The Harvard World Map provides various types of data, including transportation networks (including high-speed rail, highways, airports), religious beliefs distribution, population density maps, energy maps, education distribution, and environmental data (water quality, air quality, CO2, PM2.5, etc.).',
      site_url: 'https://worldmap.maps.arcgis.com/home/index.html',
      order: 5,
      tags: [
        'Geospatial Data',
        'Transportation Network',
        'Religious Distribution',
        'Population Density',
        'Energy Map',
        'Education Distribution',
        'Environmental Data'
      ]
    }
  ]
}
