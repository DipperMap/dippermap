import { IGroup } from '../../../types'
export const spatialDatabase: IGroup = {
  icon: '',
  name: '空间数据库',
  en_name: ' Spatial Database',
  order: 1,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*gwoVRaoQDKcAAAAAAAAAAAAADrZ5AQ/original',
      name: 'DB2 Spatial Extender',
      en_name: 'DB2 Spatial Extender',
      description:
        '用于IBM DB2的扩展程序，用于生成和分析有关地理要素的空间信息，以及存储和管理基于此信息的数据。',
      en_description:
        'An extender for IBM DB2 to generate and analyze spatial information about geographic features, and to store and manage the data on which this information is based.',
      site_url:
        'https://www.ibm.com/support/knowledgecenter/SSEPGG_9.7.0/com.ibm.db2.luw.spatial.topics.doc/doc/db2sb03.html',
      order: 160,
      tags: [
        'IBM DB2',
        'Spatial Extender',
        'Geographic Features',
        'Data Management'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lvWgQa9WbVwAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Esri Enterprise Geodatabase',
      en_name: 'Esri Enterprise Geodatabase',
      description:
        '它是对关系数据库引擎（如PostgreSQL）的补充。除了进行空间计算和应用拓扑规则之外，还添加了数据版本控制等功能。',
      en_description:
        "It's an addition to a relational database engine like PostgreSQL. Besides to make spatial calculations and apply topological rules, adds data version control, etc.",
      site_url:
        'https://pro.arcgis.com/en/pro-app/help/data/geodatabases/overview/what-is-a-geodatabase-.htm',
      order: 161,
      tags: [
        'Esri',
        'Geodatabase',
        'Relational Database',
        'Spatial Calculations'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*RCXNT6zlSGUAAAAAAAAAAAAADrZ5AQ/original',
      name: 'GeoMesa',
      en_name: 'GeoMesa',
      description:
        '一个构建在多个分布式云数据存储系统上的开源、分布式的时空数据库，包括Accumulo、HBase、Cassandra和Kafka。',
      en_description:
        'An open-source, distributed, spatio-temporal database built on a number of distributed cloud data storage systems, including Accumulo, HBase, Cassandra, and Kafka.',
      site_url: 'http://www.geomesa.org/',
      order: 162,
      tags: [
        'Open Source',
        'Distributed Database',
        'Spatio-temporal Database',
        'Cloud Data Storage'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*9Y_qQ4A502AAAAAAAAAAAAAADrZ5AQ/original',
      name: 'GeoPackage based on SQLite',
      en_name: 'GeoPackage based on SQLite',
      description:
        'GeoPackage编码标准描述了在SQLite数据库中存储以下内容的一组约定。',
      en_description:
        'The GeoPackage Encoding Standard describes a set of conventions for storing the following within an SQLite database.',
      site_url: 'https://www.geopackage.org/',
      order: 163,
      tags: ['GeoPackage', 'SQLite', 'Encoding Standard']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*pHESQIfUEfkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'GeoWave',
      en_name: 'GeoWave',
      description:
        '它在Accumulo、HBase、BigTable、Cassandra和DynamoDB之上提供地理空间和时间索引。',
      en_description:
        'It provides geospatial and temporal indexing on top of Accumulo, HBase, BigTable, Cassandra, and DynamoDB.',
      site_url: 'https://locationtech.github.io/geowave/',
      order: 164,
      tags: [
        'Geospatial Indexing',
        'Temporal Indexing',
        'Distributed Databases'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*0Wu7SKAVHXIAAAAAAAAAAAAADrZ5AQ/original',
      name: 'H2GIS',
      en_name: 'H2GIS',
      description: 'H2数据库的空间扩展。',
      en_description: 'A spatial extension of the H2 database.',
      site_url: 'http://www.h2gis.org/',
      order: 165,
      tags: ['H2 Database', 'Spatial Extension']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*AovwR7a7TqkAAAAAAAAAAAAADrZ5AQ/original',  
      name: 'MBtiles',
      en_name: 'MBtiles',
      description: '用于在SQLite数据库中存储瓦片地图数据的规范。',
      en_description:
        'A specification for storing tiled map data in SQLite databases.',
      site_url: 'https://github.com/mapbox/mbtiles-spec',
      order: 166,
      tags: ['Map Data', 'SQLite', 'Specification']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*gWZuSoRycU8AAAAAAAAAAAAADrZ5AQ/original',
      name: 'mongoDB',
      en_name: 'mongoDB',
      description: '一种为开发和扩展而设计的开源文档数据库。',
      en_description:
        'An open-source, document database designed for ease of development and scaling.',
      site_url: 'https://www.mongodb.org/',
      order: 167,
      tags: ['Open Source', 'Document Database', 'Development', 'Scaling']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*y-ExSp5xVbkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'MSSQL',
      en_name: 'MSSQL',
      description: '由Microsoft支持的高性能数据库。',
      en_description: 'A high-performance database supported by Microsoft.',
      site_url:
        'https://www.microsoft.com/en-us/server-cloud/products/sql-server/',
      order: 168,
      tags: ['Microsoft', 'High-performance Database']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*HLQ-QaqPOgUAAAAAAAAAAAAADrZ5AQ/original',
      name: 'MySQL',
      en_name: 'MySQL',
      description: '全球最流行的开源数据库。',
      en_description: "The world's most popular open source database.",
      site_url: 'https://www.mysql.com/',
      order: 169,
      tags: ['Open Source', 'Database']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*ATrwSazyj8AAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Omnisci',
      en_name: 'Omnisci',
      description: '利用GPU的并行处理能力查询数十亿行的SQL引擎。',
      en_description:
        'SQL engine that leverages the parallel processing power of GPUs to query billions of rows in milliseconds.',
      site_url: 'https://www.omnisci.com/',
      order: 170,
      tags: ['SQL Engine', 'GPU', 'Parallel Processing']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*bQAYTp-a28EAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Oracle Spatial',
      en_name: 'Oracle Spatial',
      description: '基于Oracle的先进空间数据分析。',
      en_description: 'Oracle-based advanced spatial data analysis.',
      site_url:
        'http://www.oracle.com/us/products/database/options/spatial/overview/index.html',
      order: 171,
      tags: ['Oracle', 'Spatial Data Analysis']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*dTfASINHNyEAAAAAAAAAAAAADrZ5AQ/original',
      name: 'PostGIS based on PostgreSQL',
      en_name: 'PostGIS based on PostgreSQL',
      description: '最先进的开源数据库。',
      en_description: 'Most advanced open source database.',
      site_url: 'http://postgis.net/',
      order: 172,
      tags: ['PostGIS', 'PostgreSQL', 'Open Source Database']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*MtTvSYNbIzsAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Spatialite based on SQLite',
      en_name: 'Spatialite based on SQLite',
      description: '轻量级SQL库，支持完全的空间能力。',
      en_description:
        'Lightweight SQL library to support fully spatially capability.',
      site_url: 'https://www.gaia-gis.it/fossil/libspatialite/index',
      order: 173,
      tags: ['Spatialite', 'SQLite', 'SQL Library', 'Spatial Capability']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*Xg5fSoGXOxgAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Tile38',
      en_name: 'Tile38',
      description: 'Tile38是一个地理空间数据库、空间索引和实时地理围栏。',
      en_description:
        'Tile38 is a geospatial database, spatial index, and realtime geofence.',
      site_url: 'https://github.com/tidwall/tile38',
      order: 174,
      tags: ['Geospatial Database', 'Spatial Index', 'Realtime Geofence']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*pIszS5W0Jg0AAAAAAAAAAAAADrZ5AQ/original',
      name: 'TimescaleDB',
      en_name: 'TimescaleDB',
      description:
        '一种开源的时间序列SQL数据库，针对快速摄入和复杂查询进行了优化。',
      en_description:
        'An open-source time-series SQL database optimized for fast ingest and complex queries.',
      site_url: 'https://www.timescale.com/',
      order: 44,
      tags: ['Time Series', 'SQL Database', 'Open Source']
    }
  ]
}
