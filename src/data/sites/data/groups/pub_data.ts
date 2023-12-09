import { IGroup } from '../../../types'

export const PubData: IGroup = {
  icon: 'icon-ditupeise',
  name: '出版数据',
  en_name: 'Publised Data',
  order: 2,
  children: [
    {
      icon: "https://www.geodoi.ac.cn/WebCn/Skin/Images/banner.png",
      tags: ["Earth Science", "Data Publishing", "Global Change"],
      name: "全球变化科学研究数据出版系统",
      en_name: "Global Change Science Research Data Publishing System",
      description: "数据种类非常丰富，涉及领域较多，根据需要自己查找。账号注册，直接下载即可。",
      en_description: "A rich variety of data covering multiple fields. Users can search for data based on their needs. Direct download available upon account registration.",
      order: 2,
      site_url: "http://www.geodoi.ac.cn/WebCn/Default.aspx"
    },
    {
      icon: "https://vsso.nssdc.ac.cn/favicon.ico",
      tags: ["Space Science", "Virtual Observatory", "Observational Data"],
      name: "空间科学虚拟观测台",
      en_name: "Virtual Space Science Observatory",
      description: "空间科学虚拟观测台数据资源覆盖空间物理、空间天文、行星科学、空间地球科学四大学科，已建成24个专业数据库。",
      en_description: "The data resources of the Space Science Virtual Observatory cover the four major disciplines of space physics, space astronomy, planetary science, and space earth science. Twenty-four professional databases have been established.",
      order: 2,
      site_url: "https://vsso.nssdc.ac.cn/nssdc_zh/html/vssoindex.html"
    },
  ]
}
