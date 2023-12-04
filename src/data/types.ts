export type toolsType = 'tool' | 'data' | 'tool' | 'DataBase' | 'Map Server'
export interface IItem {
  icon: string
  name: string
  en_name: string
  description: string
  en_description: string
  site_url?: string
  tags: string[]
  github?: string
  order?: number
  favorite?: boolean
}
export interface IGroup {
  icon?: string
  name: string
  en_name: string
  order: number
  children: IItem[]
  visible?: boolean
}
export interface IConfig {
  [key: string]: IGroup
}

export interface ISiteConfig {
  name: string
  en_name: string
  groups: IGroup[]
}
