import { IGroup } from '../../../types'

export const Policy: IGroup = {
  icon: 'icon-ditupeise',
  name: '政策',
  en_name: 'Policy',
  order: 3,
  children: [
    {
      icon: 'https://climateactiontracker.org/static/images/favicon.ico',
      name: 'Climate Action Tacker',
      en_name: 'Climate Action Tacker',
      description: '汇集了各国的气候变化的政策和法规',
      en_description: 'The Climate Action Tracker is an independent scientific project that tracks government climate action and measures it against the globally agreed Paris Agreement aim of "holding warming well below 2°C, and pursuing efforts to limit warming to 1.5°C." ',
      site_url: 'https://climateactiontracker.org/countries/china/targets/',
      order: 2,
      tags: ['GIS', 'Web', 'Data','Climate']
    },

  ]
}
