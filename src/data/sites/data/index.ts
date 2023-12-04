import { ISiteConfig } from '../../types'
import { ToBeSorted } from './groups/to_be_sorted'
export const Data: ISiteConfig = {
  name: '数据资源',
  en_name: 'data',
  groups: [ 
    ToBeSorted
  ].sort((a, b) => a.order - b.order)
}
