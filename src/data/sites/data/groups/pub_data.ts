import { IGroup } from '../../../types'

export const PubData: IGroup = {
  icon: 'icon-ditupeise',
  name: '出版数据',
  en_name: 'Publised Data',
  order: 2,
  children: [
    {
      icon: 'https://www.geodoi.ac.cn/WebCn/Skin/Images/banner.png',
      tags: ['Earth Science', 'Data Publishing', 'Global Change'],
      name: '全球变化科学研究数据出版系统',
      en_name: 'Global Change Science Research Data Publishing System',
      description:
        '数据种类非常丰富，涉及领域较多，根据需要自己查找。账号注册，直接下载即可。',
      en_description:
        'A rich variety of data covering multiple fields. Users can search for data based on their needs. Direct download available upon account registration.',
      order: 2,
      site_url: 'http://www.geodoi.ac.cn/WebCn/Default.aspx'
    },
    {
      icon: 'https://vsso.nssdc.ac.cn/favicon.ico',
      tags: ['Space Science', 'Virtual Observatory', 'Observational Data'],
      name: '空间科学虚拟观测台',
      en_name: 'Virtual Space Science Observatory',
      description:
        '空间科学虚拟观测台数据资源覆盖空间物理、空间天文、行星科学、空间地球科学四大学科，已建成24个专业数据库。',
      en_description:
        'The data resources of the Space Science Virtual Observatory cover the four major disciplines of space physics, space astronomy, planetary science, and space earth science. Twenty-four professional databases have been established.',
      order: 2,
      site_url: 'https://vsso.nssdc.ac.cn/nssdc_zh/html/vssoindex.html'
    },
    {
      icon: 'https://image.jimcdn.com/app/cms/image/transf/none/path/sc802d58b85de2333/image/i856bc493fbe4440a/version/1471749446/image.jpg',
      name: 'BCL北京城市实验室开放数据专栏',
      en_name: 'BCL Beijing City Lab Open Data Section',
      description:
        'BCL北京城市实验室开放数据专栏提供城市规划、建筑、城市地理、地理信息系统等相关信息。该专栏致力于向用户开放城市研究领域的多种数据，为城市发展和规划研究提供支持。',
      en_description:
        'The BCL Beijing City Lab Open Data Section provides information related to urban planning, architecture, urban geography, and geographic information systems. This section is dedicated to opening up various data sets in the field of urban research, supporting urban development and planning studies.',
      site_url: 'https://www.beijingcitylab.com/data-released-1/',
      tags: [
        'Urban Planning',
        'Architecture',
        'Urban Geography',
        'GIS',
        'Open Data'
      ]
    }
  ]
}
