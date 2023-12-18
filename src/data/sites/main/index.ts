import { ISiteConfig } from '../../types'
import { AIPlatform } from './groups/ai_platform'
import { Competition } from './groups/competition'
import { CoordConvert } from './groups/coord_process'
import { DataProcess } from './groups/gis_tools'
import { DataSource } from './groups/data_source'
import { OnlineMap } from './groups/onlinemap'
import { RSPlatform } from './groups/rs_platform'
import { Visulization } from './groups/visualization'
import { Weather } from './groups/weather'
import { Awesome } from './groups/awesome'

export const MainConfig: ISiteConfig = {
  name: '首页',
  en_name: 'main',
  groups: [
    Competition,
    DataProcess,
    AIPlatform,
    CoordConvert,
    Visulization,
    Awesome,
    OnlineMap,
    DataSource,
    RSPlatform,
    Weather
  ].sort((a, b) => a.order - b.order)
}
