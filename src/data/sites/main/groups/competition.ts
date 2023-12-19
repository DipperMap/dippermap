import { IGroup } from '../../../types'

export const Competition: IGroup = {
  icon: 'icon-ditupeise',
  name: '竞赛',
  en_name: 'Competition',
  order: 13,
  children: [
    {
      icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
      name: '阿里天池 Tianchi',
      en_name: 'Tianchi',
      description:
        '阿里天池是一个数据科学和人工智能竞赛平台，致力于为数据科学家、工程师和研究人员提供一个开放、共享的创新空间。在阿里天池，你可以参与各种数据竞赛，与全球的数据科学家共同解决实际问题，学习最新的数据科学和人工智能技术。',
      en_description:
        'Tianchi, powered by Alibaba, is a platform for data science and artificial intelligence competitions. It aims to provide an open and collaborative space for data scientists, engineers, and researchers. On Tianchi, you can participate in various data competitions, collaborate with data scientists worldwide to solve real-world problems, and stay updated on the latest advancements in data science and artificial intelligence.',
      site_url: 'https://tianchi.aliyun.com/',
      order: 4,
      tags: ['Data Science', 'Machine Learning', 'Competition', 'Community']
    },
    {
      icon: 'https://contest.geoscene.cn/favicon.ico',
      name: '易智瑞杯中国大学生GIS软件开发竞赛',
      en_name: 'Geoscene Cup',
      description:
        '易智瑞杯中国大学生GIS软件开发竞赛官方网站，是中国大学生GIS领域的重要赛事平台。竞赛旨在促进大学生在地理信息系统（GIS）领域的创新和技术发展，提供一个展示和交流GIS软件开发技能的舞台。',
      en_description:
        'The official website of the Geoscene Cup, the EasyGIS Cup Chinese University GIS Software Development Competition, is a significant platform for GIS competitions among Chinese university students. The competition aims to foster innovation and technological development in the field of Geographic Information Systems (GIS) among college students, providing a stage to showcase and exchange skills in GIS software development.',
      site_url: 'https://contest.geoscene.cn/',
      order: 5,
      tags: ['GIS', 'Software Development', 'Competition', 'Education']
    },
    {
      icon: 'http://contest.gisera.com/theme/default/images/favicon.ico',
      name: '全国高校GIS技能大赛官网',
      en_name: 'National College GIS Skills Competition',
      description:
        '全国高校GIS技能大赛官方网站，是中国各高校GIS技能竞赛的统一平台。该赛事旨在推动高校学生在地理信息系统（GIS）领域的学习与交流，促进GIS技能的提升与创新。',
      en_description:
        'The official website of the National College GIS Skills Competition is the unified platform for GIS skills competitions in various universities across China. The competition aims to promote learning and exchange among university students in the field of Geographic Information Systems (GIS), fostering the improvement and innovation of GIS skills.',
      site_url: 'https://gisera.com/',
      order: 6,
      tags: ['GIS', 'Skills Competition', 'Education', 'Technology']
    },
    {
      icon: '',
      name: '全国大学生测绘学科创新创业智能大赛',
      en_name:
        "National College Students' Innovation and Entrepreneurship Intelligent Competition in Surveying and Mapping",
      description:
        '全国大学生测绘学科创新创业智能大赛旨在促进大学生在测绘学科领域的创新和创业，为他们提供展示才华和交流经验的平台。该赛事关注测绘科技的前沿发展，鼓励学生运用智能技术、创新思维解决实际问题，推动测绘行业的发展。',
      en_description:
        "The National College Students' Innovation and Entrepreneurship Intelligent Competition in Surveying and Mapping aims to promote innovation and entrepreneurship among college students in the field of surveying and mapping. It provides a platform for students to showcase their talents and exchange experiences. The competition focuses on the cutting-edge development of surveying and mapping technology, encouraging students to apply intelligent technology and innovative thinking to solve practical problems, thereby advancing the development of the surveying and mapping industry.",
      site_url: 'https://smt.whu.edu.cn/sshd/dxscxcyznds.htm',
      order: 7,
      tags: [
        'Surveying and Mapping',
        'Innovation',
        'Entrepreneurship',
        'Intelligent Technology'
      ]
    }
  ]
}
