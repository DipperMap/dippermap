export interface ISearchItem {
  id: string // 搜索项ID
  name: string // 搜索引擎名称
  site: string // 搜索跳转地址
  paramKey: string // 搜索用的字段
  icon?: string // 搜索引擎icon
}

export const searchConfig: ISearchItem[] = [
  {
    id: 'baidu',
    name: '百度',
    site: 'https://www.baidu.com/s',
    paramKey: 'wd',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/www.baidu.com.ico'
  },
  {
    id: 'baidu-dev',
    name: '百度开发者',
    site: 'https://kaifa.baidu.com/searchPage',
    paramKey: 'wd',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/www.baidu.com.ico'
  },
  {
    id: 'google',
    name: 'Google',
    site: 'https://www.google.com/search',
    paramKey: 'q'
  },
  {
    id: 'github',
    name: 'Github',
    site: 'https://github.com/search',
    paramKey: 'q',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/github.com.ico'
  },
  {
    id: 'ecosia',
    name: 'Ecosia',
    site: 'https://www.ecosia.org/search',
    paramKey: 'q',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/www.ecosia.org.ico'
  },
  {
    id: 'yandex',
    name: 'Yandex',
    site: 'https://yandex.com/search/',
    paramKey: 'text',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/yandex.com.ico'
  },
  {
    id: '360-so',
    name: '360',
    site: 'https://www.so.com/s',
    paramKey: 'q'
  },
  {
    id: 'bing',
    name: 'Bing',
    site: 'https://www.bing.com/search',
    paramKey: 'q',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/www.bing.com.ico'
  },
  {
    id: 'zhihu',
    name: '知乎',
    site: 'https://www.zhihu.com/search',
    paramKey: 'q'
  },
  {
    id: 'bilibili',
    name: 'Bilibili',
    site: 'https://search.bilibili.com/all',
    paramKey: 'keyword',
    icon: 'http://sevennorth.lovinghlx.cn/imgbed/search.bilibili.com.ico'
  },
  {
    id: 'douban',
    name: '豆瓣',
    site: 'https://www.douban.com/search',
    paramKey: 'q'
  },
  {
    id: 'figma-plugins',
    name: 'Figma 插件',
    site: 'https://fig-stats.com/plugins',
    paramKey: 'search'
  }
]
