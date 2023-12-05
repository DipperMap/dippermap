import { ISiteConfig } from '../../types'
import { Tiles3D } from './groups/3d_tiles'
import { comandTools } from './groups/comand_tools'
import { dataSpec } from './groups/data_spec'
import { MapEngine } from './groups/map_engine'
import { mapServer } from './groups/map_server'
import { spatialDatabase } from './groups/spatial_database'
import { VectorTile } from './groups/vector_tile'
import { Visualization } from './groups/visualization_engine'
import { GeospatialAnalysis } from './groups/geospatial_analysis'

export const Tech: ISiteConfig = {
  name: '开源技术',
  en_name: 'tech',
  groups: [
    Tiles3D,
    comandTools,
    dataSpec,
    mapServer,
    Visualization,
    MapEngine,
    spatialDatabase,
    VectorTile,
    GeospatialAnalysis
  ].sort((a, b) => a.order - b.order)
}
