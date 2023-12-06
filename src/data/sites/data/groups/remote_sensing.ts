import { IGroup } from '../../../types'

export const RemoteSensing: IGroup = {
  icon: 'icon-ditupeise',
  name: '遥感数据',
  en_name: 'remote sensing',
  order: 2,
  children: [
    {
      "icon": "http://ids.ceode.ac.cn/images/wen-top.png",
      "tags": ["Remote Sensing", "Satellite", "Earth Observation"],
      "name": "中国遥感数据共享网",
      "en_name": "China Remote Sensing Data Sharing Network",
      "description": "国内存档周期最长的数据网站，对Landsat数据免费共享，也可订购国外商业卫星数据。注册账号，通过审核就可直接下载。",
      "en_description": "The longest-archived data website in China, offering free sharing of Landsat data and the option to order commercial satellite data from abroad. Direct download available upon account registration and approval.",
      "site_url": "http://ids.ceode.ac.cn/"
    },
    {
      "icon": "",
      "tags": ["Remote Sensing", "Satellite", "Earth Observation"],
      "name": "中国资源卫星应用中心",
      "en_name": "China Center for Resources Satellite Data and Application",
      "description": "我国三大卫星应用中心之一，汇集国产卫星数据，注册后可下载HJ卫星数据，高分数据下载需要审核。",
      "en_description": "One of China's three major satellite application centers, collecting domestic satellite data. Registration allows downloading of HJ satellite data, while high-resolution data requires approval.",
      "site_url": "https://data.cresda.cn/#/home"
    },
    {
      "icon": "",
      "tags": ["Remote Sensing", "Satellite", "Earth Observation"],
      "name": "地理空间数据云",
      "en_name": "Geospatial Cloud",
      "description": "数据资源更新比较稳定，免费数据包括Landsat系列、中巴资源卫星、MODIS数据的各种产品、DEM数字高程数据、EO-1数据、NOAAA VHRR数据产品、Sentinel数据等。账号注册，通过审核直接下载即可。",
      "en_description": "Stable data resource updates, including free data such as Landsat series, China-Pakistan Resource Satellite, various products of MODIS data, DEM digital elevation data, EO-1 data, NOAA VHRR data products, Sentinel data, etc. Account registration allows direct download upon approval.",
      "site_url": "http://www.gscloud.cn/sources"
    },
    {
      "icon": "https://www.geodoi.ac.cn/WebCn/Skin/Images/banner.png",
      "tags": ["Earth Science", "Data Publishing", "Global Change"],
      "name": "全球变化科学研究数据出版系统",
      "en_name": "Global Change Science Research Data Publishing System",
      "description": "数据种类非常丰富，涉及领域较多，根据需要自己查找。账号注册，直接下载即可。",
      "en_description": "A rich variety of data covering multiple fields. Users can search for data based on their needs. Direct download available upon account registration.",
      "site_url": "http://www.geodoi.ac.cn/WebCn/Default.aspx"
    },
    {
      "icon": "https://vsso.nssdc.ac.cn/favicon.ico",
      "tags": ["Space Science", "Virtual Observatory", "Observational Data"],
      "name": "空间科学虚拟观测台",
      "en_name": "Virtual Space Science Observatory",
      "description": "空间科学虚拟观测台数据资源覆盖空间物理、空间天文、行星科学、空间地球科学四大学科，已建成24个专业数据库。",
      "en_description": "The data resources of the Space Science Virtual Observatory cover the four major disciplines of space physics, space astronomy, planetary science, and space earth science. Twenty-four professional databases have been established.",
      "site_url": "https://vsso.nssdc.ac.cn/nssdc_zh/html/vssoindex.html"
    },
    {
      "icon": "http://www.geodata.cn/res/images/favicon.png",
      "tags": ["Earth System Science", "Data Center", "Data Sharing"],
      "name": "国家地球系统科学数据中心共享服务平台",
      "en_name": "National Earth System Science Data Center Shared Service Platform",
      "description": "包含各学科数据，整合集成分布在国内外数据中心群、高等院校、科研院所以及科学家个人产生的数据资源。账号注册，直接下载即可。",
      "en_description": "It includes data from various disciplines, integrating and distributing data resources produced by domestic and foreign data center groups, universities, research institutes, and individual scientists. Direct download available upon account registration.",
      "site_url": "http://www.geodata.cn/data/publisher.html"
    },
    {
      "icon": "https://www.forestdata.cn/image/logo1-4-129x128.png",
      "tags": ["Forestry", "Ecology", "Environmental Data"],
      "name": "国家林业和草原科学数据中心",
      "en_name": "National Forestry and Grassland Science Data Center",
      "description": "林业数据中心整合了森林资源、草原资源、湿地资源、荒漠化资源、自然保护资源、林业生态环境资源、森林保护、森林培育、木材科学与技术、林业科技文献、林业科技项目及林业行业发展等科学数据，以提供数据共享服务。用户用注册登录后，填写项目用途，部分数据收费下载。",
      "en_description": "The forestry data center integrates scientific data on forest resources, grassland resources, wetland resources, desertification resources, natural protection resources, forestry ecological environment resources, forest protection, forest cultivation, wood science and technology, forestry science and technology literature, forestry science and technology projects, and forestry industry development to provide data sharing services. After registering and logging in, users can fill in the purpose of the project, and some data are available for a fee.",
      "site_url": "https://www.forestdata.cn/"
    },
    {
      "icon": "",
      "tags": ["Satellite Data", "Earth Observation", "Geoscience"],
      "name": "国家综合地球观测数据共享平台",
      "en_name": "China GEOSS Data Sharing Platform",
      "description": "国内卫星数据：资源、高分、气象、海洋、环境、快舟、北京一号等。国外卫星数据：Landsat系列、MODIS、EO-1、IRS-P6、ENVISAT-1、ERS-2、RESOURCESAT-1。大部分数据可共享下载。",
      "en_description": "Domestic satellite data: Ziyuan, High-Resolution, Meteorological, Ocean, Environmental, Kuaizhou, Beijing-1, etc. Foreign satellite data: Landsat series, MODIS, EO-1, IRS-P6, ENVISAT-1, ERS-2, RESOURCESAT-1. Most data can be shared and downloaded.",
      "site_url": "https://chinageoss.cn/"
    },
    {
      "icon": "http://www.dsac.cn/Content/img/logo_head.png",
      "tags": ["Geospatial Data", "Numerical Simulation", "Ecological Environment"],
      "name": "地理国情监测云平台",
      "en_name": "Geographical National Conditions Monitoring Cloud Platform",
      "description": "云平台主要包含两部分——时空数据平台和数值模拟研究平台，特别是在现已建成的生态环境科学模型库的基础上，发展了数值模拟相关的工具库，并与时空数据平台进行集成，形成了具有国内领先水平的生态环境科学数值研究环境。针对研究、规划、政策制定及决策等不同需求提供科学可靠的空间信息定制产品和系统解决方案，满足从个人用户到国家政府部门的各级用户需求。部分数据免费。",
      "en_description": "The cloud platform mainly includes two parts: the spatiotemporal data platform and the numerical simulation research platform. It has developed a numerical simulation-related tool library based on the existing ecological environment science model library and integrated it with the spatiotemporal data platform, forming a domestically leading ecological environment science numerical research environment. It provides scientific and reliable spatial information customized products and system solutions for different needs such as research, planning, policy formulation, and decision-making, meeting the needs of users at all levels from individuals to national government departments. Some data is free.",
      "site_url": "http://www.dsac.cn/"
    }
  ]
}
