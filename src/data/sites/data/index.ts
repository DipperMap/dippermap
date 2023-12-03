import { ISiteConfig } from '../../types'
import { DataEdit } from './groups/data_edit'
import { DataFormatConvert } from './groups/data_format_convert'
import { DataProcess } from './groups/data_process'
export const Data: ISiteConfig = {
  name: '数据资源',
  en_name: 'data',
  groups: [
    DataEdit,
    DataProcess,
    DataFormatConvert
  ].sort((a, b) => a.order - b.order)
}
