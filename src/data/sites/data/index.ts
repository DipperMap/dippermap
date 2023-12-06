import { ISiteConfig } from '../../types'
import { RemoteSensing } from './groups/remote_sensing'
import { ToBeSorted } from './groups/to_be_sorted'
export const Data: ISiteConfig = {
  name: '数据资源',
  en_name: 'data',
  groups: [ 
    ToBeSorted,
    RemoteSensing
  ].sort((a, b) => a.order - b.order)
}
