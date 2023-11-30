import { IGroup } from '../../../types'
export const MapColor: IGroup = {
    icon: '',
    name: '天气',
    en_name: 'map color',
    order: 2,
    children: [
        {
            icon: "https://www.windy.com/favicon.ico",
            name: "Windy",
            en_name: "Windy",
            description: "全球天气预报",
            en_description: "Global weather forecast",
            site_url: "https://www.windy.com/",
            order: 2,
            tags: ["GIS", "Web", "Data"],
        },

    ]

}
