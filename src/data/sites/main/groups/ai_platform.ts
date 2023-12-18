import { IGroup } from '../../../types'

export const AIPlatform: IGroup = {
  icon: 'icon-rengongzhinengdanao',
  name: 'AI 平台',
  en_name: 'AI platform',
  order: 12,
  children: [
    {
      icon: 'https://aistudio-fe-online.cdn.bcebos.com/aistudio/dist/1702030665650/favicon-32.ico',
      name: '飞桨AI Studio',
      en_name: 'PaddlePaddle AI Studio',
      description:
        '开源的深度学习平台，由百度公司开发并推出的。它旨在提供一个易于使用、高效和灵活的平台，供开发人员和研究人员使用深度学习进行各种任务，包括图像分类、目标检测、语言处理、推荐系统等。',
      en_description:
        "Baidu's AI Studio provides a platform for AI development, offering tools and resources for machine learning, deep learning, and artificial intelligence projects.",

      site_url: 'https://aistudio.baidu.com/learnmap',
      order: 2,
      tags: [
        'AI Development',
        'Machine Learning',
        'Deep Learning',
        'Artificial Intelligence'
      ]
    },
    {
      icon: 'https://cdn.kesci.com/favicon.ico',
      name: '和鲸 Heywhale',
      en_name: 'Heywhale',
      description:
        '和鲸社区是数据科学开源社区，帮助数据人才在交流中享受学习，在实践中快速成长。众多数据科学从业者及爱好者在这里分享开源代码、复现实战案例、参与数据竞赛、记录成长历程。',
      en_description:
        'Heywhale is a platform that supports data science and machine learning projects. It provides resources, collaboration tools, and a community for data enthusiasts and professionals.',
      site_url: 'https://www.heywhale.com/home',
      order: 30,
      tags: ['Data Science', 'Machine Learning', 'Collaboration', 'Community']
    },
    {
      icon: 'https://samgeo.gishub.org/assets/images/favicon.png',
      name: 'segment-geospatial',
      en_name: 'SAM Geo',
      description:
        'SAM Geo is a platform for spatial analysis and mapping, providing tools and resources for geographic information systems (GIS) and remote sensing.',
      en_description:
        'SAM Geo is a platform for spatial analysis and mapping, providing tools and resources for geographic information systems (GIS) and remote sensing.',
      site_url: 'https://samgeo.gishub.org/',
      order: 31,
      tags: ['Spatial Analysis', 'Mapping', 'GIS', 'Remote Sensing']
    }
  ]
}
