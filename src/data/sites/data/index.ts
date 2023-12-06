import { ISiteConfig } from '../../types'
import { RemoteSensing } from './groups/remote_sensing'
import { USData } from './groups/us_data'
export const Data: ISiteConfig = {
  name: '数据资源',
  en_name: 'data',
  groups: [ 
    USData,
    RemoteSensing
  ].sort((a, b) => a.order - b.order)
}
