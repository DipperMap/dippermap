import { ISiteConfig } from '../../types'
import { Basement } from './groups/basement'
import { CommonlyUsed } from './groups/commonly_used'
import { DigitalLibrary } from './groups/digital_library'
import { IndustryData } from './groups/industry_data'
import { Policy } from './groups/policy'
import { PubData } from './groups/pub_data'
import { RSSharingStationCN } from './groups/rs_sharing_station_zh_cn'
import { SharingStation } from './groups/sharing_station'
import { VectorData } from './groups/vector_data'
export const Data: ISiteConfig = {
  name: '数据资源',
  en_name: 'data',
  groups: [
    Basement,
    CommonlyUsed,
    DigitalLibrary,
    IndustryData,
    RSSharingStationCN,
    Policy,
    PubData,
    SharingStation,
    VectorData
  ].sort((a, b) => a.order - b.order)
}
