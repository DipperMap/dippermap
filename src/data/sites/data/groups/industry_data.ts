import { IGroup } from '../../../types'

export const IndustryData: IGroup = {
  icon: 'icon-ditupeise',
  name: '行业数据',
  en_name: 'Industry Data',
  order: 3,
  children: [
    {
      icon: 'https://www.forestdata.cn/image/logo1-4-129x128.png',
      name: '国家林业和草原科学数据中心',
      en_name: 'National Forestry and Grassland Science Data Center',
      description:
        '林业数据中心整合了森林资源、草原资源、湿地资源、荒漠化资源、自然保护资源、林业生态环境资源、森林保护、森林培育、木材科学与技术、林业科技文献、林业科技项目及林业行业发展等科学数据，以提供数据共享服务。用户用注册登录后，填写项目用途，部分数据收费下载。',
      en_description:
        'The forestry data center integrates scientific data on forest resources, grassland resources, wetland resources, desertification resources, natural protection resources, forestry ecological environment resources, forest protection, forest cultivation, wood science and technology, forestry science and technology literature, forestry science and technology projects, and forestry industry development to provide data sharing services. After registering and logging in, users can fill in the purpose of the project, and some data are available for a fee.',
      site_url: 'https://www.forestdata.cn/',
      order: 2,
      tags: ['Forestry', 'Ecology', 'Environmental Data']
    },
    {
      icon: 'https://vsso.nssdc.ac.cn/favicon.ico',
      name: '空间科学虚拟观测台',
      en_name: 'Virtual Space Science Observatory',
      description:
        '空间科学虚拟观测台数据资源覆盖空间物理、空间天文、行星科学、空间地球科学四大学科，已建成24个专业数据库。',
      en_description:
        'The data resources of the Space Science Virtual Observatory cover the four major disciplines of space physics, space astronomy, planetary science, and space earth science. Twenty-four professional databases have been established.',
      site_url: 'https://vsso.nssdc.ac.cn/nssdc_zh/html/vssoindex.html',
      order: 4,
      tags: ['Space Science', 'Virtual Observatory', 'Observational Data']
    },
    {
      icon: 'http://www.envicloud.cn/images/head/envicloud.ico',
      name: '环境云',
      en_name: 'Envicloud',
      description:
        '环境云收录了专业数据源，包括国家环保部数据中心、美国全球地震信息中心等发布的各类环境数据。通过该平台，用户可以获取全面的环境监测信息，涵盖空气质量、水质监测、生态环境等多个领域。',
      en_description:
        'Envicloud compiles data from various professional sources, including the National Environmental Protection Data Center and the U.S. Global Seismic Information Center. The platform provides comprehensive environmental data, covering areas such as air quality, water quality monitoring, and ecological environment. Users can access a wide range of environmental monitoring information.',
      site_url: 'http://www.envicloud.cn/',
      order: 4,
      tags: [
        'Environmental Science',
        'Data Platform',
        'Environmental Monitoring'
      ]
    },
    {
      icon: "https://openflights.org/img/icon_favicon.png",
      name: "OpenFlights",
      en_name: "OpenFlights",
      description: "OpenFlights提供航空航天以及航线数据，可用于绘制全球航班地图。用户可以通过搜索和过滤航班，并自动计算统计数据。",
      en_description: "OpenFlights provides aviation and route data for creating global flight maps. Users can search and filter flights, and automatically calculate statistical data.",
      site_url: "https://openflights.org/data",
      tags: ["Aviation Data", "Flight Routes", "Global Flight Map", "Statistical Data"]
    }
  ]
}
