import { IGroup } from '../../../../types'
export const Week1: IGroup = {
  icon: 'icon-ditushezhi',
  name: 'Week1 第一周',
  en_name: 'week1',
  order: 1,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'tianditu tools 天地图工具',
      en_name: 'tianditu tools',
      description:
        '该插件整合了天地图服务，使用户能够轻松在QGIS中加载天地图的底图。支持多种地图服务类型和图层，提供了多样的地图底图选择。',
      en_description:
        'This plugin integrates TianDiTu services, allowing users to easily load TianDiTu basemaps in QGIS. It supports various map service types and layers, providing diverse options for basemap selection.',
      site_url: 'https://plugins.qgis.org/plugins/tianditu-tools/',
      order: 1,
      tags: ['Map Service', 'Basemap', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Land Use Analyzer 土地利用空间分析工具插件',
      en_name: 'Land Use Analyzer',
      description:
        'Land Use Analyzer专注于土地利用的空间分析，助力用户更全面地理解和评估地表覆盖。通过该插件，用户能够进行土地利用数据的可视化、分析和比较，为城市规划和环境研究提供有力支持。',
      en_description:
        'Land Use Analyzer focuses on spatial analysis of land use, helping users to comprehensively understand and evaluate land cover. The plugin enables visualization, analysis, and comparison of land use data, providing strong support for urban planning and environmental research.',
      site_url: 'https://plugins.qgis.org/plugins/land_use_analyzer_local/',
      order: 2,
      tags: ['Spatial Analysis', 'Land Use', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Fast Field Filler',
      en_name: 'Fast Field Filler',
      description:
        'Fast Field Filler旨在提高数据编辑效率，允许用户快速填充属性表中的字段。通过简化字段填充流程，该插件加速了数据编辑过程，提高了用户的工作效率。',
      en_description:
        'Fast Field Filler aims to improve data editing efficiency by allowing users to quickly fill fields in the attribute table. By simplifying the field filling process, the plugin accelerates data editing and enhances user productivity.',
      site_url: 'https://plugins.qgis.org/plugins/fast_field_filler/',
      order: 3,
      tags: ['Data Editing', 'Attribute Table', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'CSV Batch Import',
      en_name: 'CSV Batch Import',
      description:
        'CSV Batch Import为用户提供了批量导入CSV矢量层的便捷工具。用户能够轻松将多个CSV文件导入到QGIS中，简化了矢量数据导入的操作步骤。',
      en_description:
        'CSV Batch Import provides a convenient tool for users to batch import CSV vector layers. Users can easily import multiple CSV files into QGIS, streamlining the process of importing vector data.',
      site_url: 'https://plugins.qgis.org/plugins/csv_batch_import/',
      order: 4,
      tags: ['Data Import', 'CSV', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Geojson Filling',
      en_name: 'Geojson Filling',
      description:
        'Geojson Filling允许用户使用预定义的字段值填充导入的GeoJSON层，提高了数据编辑的定制性和灵活性。用户可以更方便地管理和编辑GeoJSON数据。',
      en_description:
        'Geojson Filling allows users to fill imported GeoJSON layers with predefined field values, enhancing the customization and flexibility of data editing. Users can conveniently manage and edit GeoJSON data.',
      site_url: 'https://plugins.qgis.org/plugins/geojson_filling/',
      order: 5,
      tags: ['Data Editing', 'GeoJSON', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'SRTM-Downloader',
      en_name: 'SRTM-Downloader',
      description:
        'SRTM-Downloader提供了方便地下载SRTM（Shuttle Radar Topography Mission）DEM（数字高程模型）数据的功能。用户可以直接在QGIS中获取高程数据，省去了手动从外部网站下载的步骤。',
      en_description:
        'SRTM-Downloader offers convenient downloading of Shuttle Radar Topography Mission (SRTM) Digital Elevation Model (DEM) data. Users can directly obtain elevation data in QGIS, eliminating the need to manually download from external websites.',
      site_url: 'https://plugins.qgis.org/plugins/SRTM-Downloader/',
      order: 6,
      tags: ['Data Download', 'SRTM', 'DEM', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Save All 文件保存脚本',
      en_name: 'Save All',
      description:
        '该插件用于将QGIS项目文件以及所有矢量和光栅图层保存到用户指定的文件夹中。它自动检测文件类型并另存为该文件类型（支持SHP、GPKG、KML、CSV和TIF）。所有样式和格式都与每个图层一起保存（KML除外），以确保下次打开项目时以正确的样式打开这些样式和格式，临时图层将自动变为永久图层。',
      en_description:
        'The Save All plugin is used to save QGIS project files and all vector and raster layers to a user-specified folder. It automatically detects the file type and saves it as that file type (supports SHP, GPKG, KML, CSV, and TIF). All styles and formats are saved with each layer to ensure that the next time the project is opened, these styles and formats are opened with the correct styles. Temporary layers will automatically become permanent layers.',
      site_url: 'https://plugins.qgis.org/plugins/SaveAllScript/',
      order: 7,
      tags: ['File Management', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'FilePath',
      en_name: 'FilePath',
      description:
        'FilePath插件用于复制层的路径，并将层的路径复制到剪贴板。这使得用户能够轻松地获取图层的路径信息，方便后续的文件管理和处理。',
      en_description:
        "The FilePath plugin is used to copy the path of a layer and copy the layer's path to the clipboard. This allows users to easily obtain layer path information for subsequent file management and processing.",
      site_url: 'https://plugins.qgis.org/plugins/FilePath/',
      order: 8,
      tags: ['File Management', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'feature_space',
      en_name: 'feature_space',
      description:
        'feature_space插件用于打印要素空间并将区域导出为光栅或矢量。用户可以更灵活地处理要素空间，并将其导出为符合需求的数据格式。',
      en_description:
        'The feature_space plugin is used to print feature space and export regions as raster or vector. Users can more flexibly manipulate feature space and export it in a data format that meets their requirements.',
      site_url: 'https://plugins.qgis.org/plugins/feature_space/',
      order: 9,
      tags: ['Data Processing', 'QGIS']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'GeoHey Toolbox',
      en_name: 'GeoHey Toolbox',
      description:
        'GeoHey Toolbox插件提供了WGS、GCJ02和WGS84坐标之间的转换功能，为用户在不同坐标系下的地理数据处理提供了便利。',
      en_description:
        'The GeoHey Toolbox plugin provides functionality for converting coordinates between WGS, GCJ02, and WGS84. It facilitates convenient geographic data processing in different coordinate systems.',
      site_url: 'https://plugins.qgis.org/plugins/geohe/',
      order: 10,
      tags: ['Coordinate Transformation', 'QGIS']
    }
  ]
}
