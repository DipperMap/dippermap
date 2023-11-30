export interface ISearchItem {
    id: string; // 搜索项ID
    name: string; // 搜索引擎名称
    site: string; // 搜索跳转地址
    paramKey: string; // 搜索用的字段
    icon?: string; // 搜索引擎icon
}

export const searchConfig: ISearchItem[] = [
    {
        id: "baidu",
        name: "百度",
        site: "https://www.baidu.com/s",
        paramKey: "wd",
    },
    {
        id: "baidu-dev",
        name: "百度开发者",
        site: "https://kaifa.baidu.com/searchPage",
        paramKey: "wd",
    },
];
