export type toolsType = 'tool' | 'data' | 'tool' | 'DataBase' | 'Map Server';
export interface IItem {
    icon: string;
    name: string;
    en_name: string;
    description: string;
    en_description: string;
    site_url?: string;
    tags: string[];
    github?: string;
    order?: number;
    favorite?: boolean
}
export interface IGroup {
    icon: string;
    name: string;
    en_name: string;
    children: IItem[];
}
export interface IConfig {
    [key: string]: IGroup;
}
export const siteConfig: IConfig = {
    tool: {
        icon: 'tool',
        name: '工具',
        en_name: 'Tools',
        children: [{
            logo: 'https://www.qgis.org/en/_images/logo_qgis_org.png',
            name: 'QGIS',
            en_name: 'QGIS',
            description: 'QGIS is a free and open-source cross-platform desktop geographic information system (GIS) application that supports viewing, editing, and analysis of geospatial data.',
            en_description: 'QGIS is a free and open-source cross-platform desktop geographic information system (GIS) application that supports viewing, editing, and analysis of geospatial data.',
            site_url: 'https://www.qgis.org/en/site/',
            order: 0,
            tags: ['GIS', 'Desktop']
        }, {
            logo: 'https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*RSdESJd70P8AAAAAAAAAAAAADjWqAQ/original',
            name: 'L7Editor',
            en_name: 'L7Editor',
            description: '多底图地理绘制工具',
            en_description: "Multi-base map geographic drawing tool",
            site_url: 'https://l7editor.antv.antgroup.com/',
            order: 2,
            tags: ['GIS', 'Web', 'Data']
        }
    ]
    }
}