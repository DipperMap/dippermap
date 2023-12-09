import { ISiteConfig } from '../../types'
import { DigitalLibrary } from './groups/digital_library'
import { IndustryData } from './groups/industry_data'
import { Policy } from './groups/policy'
import { PubData } from './groups/pub_data'
import { RSSharingStationCN } from './groups/rs_sharing_station_zh_cn'
import { SharingStation } from './groups/sharing_station'
export const Data: ISiteConfig = {
  name: '数据资源',
  en_name: 'data',
  groups: [
    DigitalLibrary,
    IndustryData,
    RSSharingStationCN,
    Policy,
    PubData,
    SharingStation
  ].sort((a, b) => a.order - b.order)
}
