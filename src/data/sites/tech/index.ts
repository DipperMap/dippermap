import { ISiteConfig } from '../../types'
import { Tiles3D } from './groups/3d_tiles'
import { comandTools } from './groups/comand_tools'
import { dataSpec } from './groups/data_spec'
import { frontEndTool } from './groups/frontEnd_tool'
import { mapServer } from './groups/map_server'
import { mapVisLib } from './groups/map_vis_lib'
import { renderEnigne } from './groups/render_enigne'
import { spatialDatabase } from './groups/spatial_database'
import { VectorTile } from './groups/vector_tile'
export const Tech: ISiteConfig = {
  name: '技术方案',
  en_name: 'tech',
  groups: [
    Tiles3D,
    comandTools,
    dataSpec,
    frontEndTool,
    mapServer,
    mapVisLib,
    renderEnigne,
    spatialDatabase,
    VectorTile
  ]
}
