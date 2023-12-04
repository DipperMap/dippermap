import { ISiteConfig } from '../../types'
import { MapColor } from './groups/color_map'
import { CoordConvert } from './groups/coord_convert'
import { DataCollaboration } from './groups/data_collaboration'
import { DataEdit } from './groups/data_edit'
import { DataFormatConvert } from './groups/data_format_convert'
import { DataProcess } from './groups/data_process'
import { DataSource } from './groups/data_source'
import { GeoCoding } from './groups/geocoding'
import { OnlineMap } from './groups/onlinemap'
import { RSPlatform } from './groups/rs_platform'
import { GeospatialAnalysis } from './groups/geospatial_analysis'
import { Visulization } from './groups/visualization'
import { Weather } from './groups/weather'

export const MainConfig: ISiteConfig = {
  name: '主站',
  en_name: 'main',
  groups: [
    DataEdit,
    DataProcess,
    DataFormatConvert,
    CoordConvert,
    Visulization,
    MapColor,
    DataCollaboration,
    OnlineMap,
    GeoCoding,
    DataSource,
    RSPlatform,
    GeospatialAnalysis,
    Weather
  ].filter(v=>v.visible !== false).sort((a, b) => a.order - b.order)
}
