import { ISiteConfig } from '../../types'
import { AIPlatform } from './groups/ai_platform'
import { MapColor } from './groups/color_map'
import { Competition } from './groups/competition'
import { CoordConvert } from './groups/coord_convert'
import { DataCollaboration } from './groups/data_collaboration'
import { DataEdit } from './groups/data_edit'
import { DataFormatConvert } from './groups/data_format_convert'
import { DataProcess } from './groups/data_process'
import { DataSource } from './groups/data_source'
import { OnlineMap } from './groups/onlinemap'
import { RSPlatform } from './groups/rs_platform'
import { Visulization } from './groups/visualization'
import { Weather } from './groups/weather'

export const MainConfig: ISiteConfig = {
  name: '主站',
  en_name: 'main',
  groups: [
    Competition,
    DataEdit,
    DataProcess,
    AIPlatform,
    DataFormatConvert,
    CoordConvert,
    Visulization,
    MapColor,
    DataCollaboration,
    OnlineMap,
    DataSource,
    RSPlatform,
    Weather
  ].sort((a, b) => a.order - b.order)
}
