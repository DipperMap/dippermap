import { ISiteConfig } from '../types'
import { MainConfig } from './main'
import { Tech } from './tech'
import { Data } from './data'
export const SitesConfig: { [key: string]: ISiteConfig } = {
  main: MainConfig,
  tech: Tech,
  data: Data
}
