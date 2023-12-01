import { ISiteConfig } from '../types'
import { MainConfig } from './main'
import { Tech } from './tech'
export const SitesConfig:{[key:string]:ISiteConfig} = {
    main:MainConfig,
    tech:Tech
}