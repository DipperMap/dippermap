import { IGroup } from '../../../types'
export const DataCollaboration: IGroup = {
    icon: '',
    name: '数据协同',
    order: 2,
    en_name: 'Data Collaboration',
    children: [{
        icon: "https://maptable.com/favicon.ico",
        name: "Maptable",
        en_name: "Maptable",
        description: "空间数据协同工具",
        en_description: "Spatial data collaboration tools",
        site_url: "https://maptable.com/zh-cn/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },
      {
        "icon": "https://app-assets.felt.com/images/felt-favicon-06e217d081cb4b0a09a450d82538a9b1.png?vsn=d",
        "name": "Felt",
        "en_name": "Felt",
        "description": "地图制图分享",
        "en_description": "Fast, flexible maps to grow your business",
        "site_url": "https://felt.com",
        "order": 1,
        "tags": ["Crafts", "Marketplace", "Handmade"]
      }

    ]
}
