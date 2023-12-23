import { IGroup } from '../../../types'
export const WebMapServer: IGroup = {
  icon: 'icon-ChartMap',
  name: 'Web 地图服务',
  en_name: 'Web Map Servers',
  order: 5,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lvWgQa9WbVwAAAAAAAAAAAAADrZ5AQ/original',
      name: 'ArcGIS Server',
      en_name: 'ArcGIS Server',
      description: '用于企业应用程序的GIS服务器。',
      en_description: 'A GIS server for enterprise application.',
      site_url: 'http://server.arcgis.com/',
      order: 108,
      tags: ['Enterprise Application', 'GIS Server']
    },
    {
      icon: '',
      name: 'Baremaps',
      en_name: 'Baremaps',
      description:
        'Apache Baremaps是用于创建、发布和运行在线地图的工具包和基础设施组件。',
      en_description:
        'Apache Baremaps is a toolkit and a set of infrastructure components for creating, publishing, and operating online maps.',
      site_url: 'https://www.baremaps.com/',
      order: 109,
      tags: [
        'Apache Baremaps',
        'Toolkit',
        'Infrastructure Components',
        'Online Maps'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*3wjFSZ6NicIAAAAAAAAAAAAADjDHAQ/original',
      name: 'deegree',
      en_name: 'deegree',
      description: '用于空间数据基础设施和地理空间Web的开源软件。',
      en_description:
        'An open source software for spatial data infrastructures and the geospatial web.',
      site_url: 'http://www.deegree.org/',
      order: 110,
      tags: ['Spatial Data Infrastructures', 'Geospatial Web', 'Open Source']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*-m_JSqNzcwYAAAAAAAAAAAAADjDHAQ/original',
      name: 'GeoDjango',
      en_name: 'GeoDjango',
      description: '使用Python Web框架Django构建的GIS服务器。',
      en_description: 'A GIS server built with Python web framework -- Django.',
      site_url: 'https://docs.djangoproject.com/en/3.1/ref/contrib/gis/',
      order: 111,
      tags: ['Python Web Framework', 'Django', 'GIS Server']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*kSqVSohpafkAAAAAAAAAAAAADjDHAQ/original',
      name: 'GeoMOOSE',
      en_name: 'GeoMOOSE',
      description: '用于显示分布式制图数据的Web客户端JavaScript框架。',
      en_description:
        'A Web Client JavaScript Framework for displaying distributed cartographic data.',
      site_url: 'http://www.geomoose.org/',
      order: 113,
      tags: ['Web Client', 'JavaScript Framework', 'Cartographic Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*z1MMSraMrdUAAAAAAAAAAAAADjDHAQ/original',
      name: 'GeoNode',
      en_name: 'GeoNode',
      description: '开源地理空间内容管理系统。',
      en_description: 'Open Source Geospatial Content Management System.',
      site_url: 'http://geonode.org/',
      order: 114,
      tags: ['Open Source', 'Geospatial Content Management System']
    },
    {
      icon: 'http://geoserver.org/img/geoserver-logo.png',
      name: 'GeoServer',
      en_name: 'GeoServer',
      description: '用于共享地理空间数据的开源服务器。',
      en_description: 'An open source server for sharing geospatial data.',
      site_url: 'http://geoserver.org/',
      order: 115,
      tags: ['Open Source', 'Geospatial Data Sharing', 'Server']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'GeoTrellis',
      en_name: 'GeoTrellis',
      description:
        '用于高性能应用程序的地理数据处理引擎，使用Spark处理栅格数据。',
      en_description:
        'A geographic data processing engine for high-performance applications that uses Spark to work with raster data.',
      site_url: 'https://github.com/locationtech/geotrellis',
      order: 116,
      tags: [
        'High-Performance Applications',
        'Geographic Data Processing Engine',
        'Raster Data',
        'Spark'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*YGeCSql8yd4AAAAAAAAAAAAADjDHAQ/original',
      name: 'GeoWebCache',
      en_name: 'GeoWebCache',
      description: '用于加速和优化地图图像交付的Java Web应用程序。',
      en_description:
        'A java web application used to cache map tiles coming from a variety of sources such as OGC WMS in order to accelerate and optimize map image delivery.',
      site_url: 'https://www.geowebcache.org/',
      order: 117,
      tags: ['Java Web Application', 'Map Image Delivery', 'Cache']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lImyTYAmEoYAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Google Earth Enterprise',
      en_name: 'Google Earth Enterprise',
      description:
        'Google Earth Enterprise的开源版本，是一个地理空间应用，可以构建和托管定制的3D地球和2D地图。',
      en_description:
        'The open source release of Google Earth Enterprise, a geospatial application which provides the ability to build and host custom 3D globes and 2D maps.',
      site_url: 'https://github.com/google/earthenterprise',
      order: 118,
      tags: ['Open Source', 'Geospatial Application', '3D Globes', '2D Maps']
    },
    {
      icon: 'https://mapbender.org/fileadmin/mapbender/templates/assets/mapbender-logo-brand.png',
      name: 'mapbender3',
      en_name: 'mapbender3',
      description: '在Symfony 2 PHP上发布空间数据基础设施服务。',
      en_description:
        'Publishing spatial data infrastructure services on the Symfony 2 PHP.',
      site_url: 'http://mapbender3.org/',
      order: 119,
      tags: ['Spatial Data Infrastructure Services', 'Symfony 2 PHP']
    },
    {
      icon: 'http://www.mapfish.org/static/mapfish_white.png',
      name: 'MapFish',
      en_name: 'MapFish',
      description:
        '使用Pylons Python Web框架构建的用于构建丰富的Web地图应用程序的框架。',
      en_description:
        'A framework for building rich web-mapping applications built with Pylons Python web framework.',
      site_url: 'http://www.mapfish.org/',
      order: 120,
      tags: ['Web-Mapping Applications', 'Python Web Framework']
    },
    {
      icon: 'https://www.osgeo.org/wp-content/uploads/cropped-osgeo-emblem-rgb-1-32x32.png',
      name: 'MapGuide',
      en_name: 'MapGuide',
      description: '用于显示分布式制图数据的Web客户端JavaScript框架。',
      en_description:
        'A Web Client JavaScript Framework for displaying distributed cartographic data.',
      site_url: 'http://mapguide.osgeo.org/',
      order: 121,
      tags: ['Web Client', 'JavaScript Framework', 'Cartographic Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*ZQUtRpmMY7EAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Mapnik',
      en_name: 'Mapnik',
      description: '用于桌面和服务器端地图渲染的C++编写的开源映射工具包。',
      en_description:
        'An open source mapping toolkit written in C++ for desktop-based and server-based map rendering.',
      site_url: 'http://mapnik.org/',
      order: 122,
      tags: ['Open Source', 'Mapping Toolkit', 'C++', 'Desktop', 'Server']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*AD1zSIfOtEoAAAAAAAAAAAAADjDHAQ/original',
      name: 'MapServer',
      en_name: 'MapServer',
      description: '发布空间数据和交互式地图应用程序到Web。',
      en_description:
        'Publishing spatial data and interactive mapping applications to the web.',
      site_url: 'http://www.mapserver.org/',
      order: 123,
      tags: ['Spatial Data', 'Interactive Mapping', 'Web']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*cKHJQ5ATqkMAAAAAAAAAAAAADjDHAQ/original',
      name: 'MapTiler Server',
      en_name: 'MapTiler Server',
      description:
        '用于自主托管矢量瓦片、卫星图像、自有地理数据和PostGIS数据库数据的地图服务器。',
      en_description:
        'Map server for self-hosting of vector tiles, satellite imagery, own geodata and data from PostGIS database.',
      site_url: 'https://www.maptiler.com/server/',
      order: 124,
      tags: [
        'Map Server',
        'Vector Tiles',
        'Satellite Imagery',
        'Geodata',
        'PostGIS Database'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*jW3sQoEFC7EAAAAAAAAAAAAADjDHAQ/original',
      name: 'NextGIS Web',
      en_name: 'NextGIS Web',
      description: '一种用于存储、可视化和管理各种地理空间数据的开源框架。',
      en_description:
        'An open source framework for storage, visualization and permissions management of all kinds of geospatial data.',
      site_url: 'http://nextgis.com/nextgis-web',
      order: 126,
      tags: [
        'Open Source',
        'Storage',
        'Visualization',
        'Permissions Management',
        'Geospatial Data'
      ]
    },
    {
      icon: '',
      name: 'OpenTileServer',
      en_name: 'OpenTileServer',
      description: '用于构建基本瓦片服务器与OpenStreetMap数据的脚本。',
      en_description:
        'This script is for building a basic tile server with OpenStreetMap data.',
      site_url: 'https://opentileserver.org/',
      order: 127,
      tags: ['Tile Server', 'OpenStreetMap Data']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*kpIwTZzKPrkAAAAAAAAAAAAADrZ5AQ/original',
      name: 'QGIS Server',
      en_name: 'QGIS Server',
      description: '一个用C++编写的FastCGI/CGI应用程序，与Web服务器一起使用。',
      en_description:
        'A FastCGI/CGI application written in C++ that works together with a webserver.',
      site_url:
        'https://docs.qgis.org/3.16/en/docs/user_manual/working_with_ogc/ogc_server_support.html',
      order: 128,
      tags: ['FastCGI/CGI Application', 'C++', 'Webserver']
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*lvWgQa9WbVwAAAAAAAAAAAAADrZ5AQ/original',
      name: 'SuperMap iServer',
      en_name: 'SuperMap iServer',
      description:
        '基于高效的跨平台GIS内核的云GIS应用服务器，具有2D和3D一体化服务发布、管理和集群等功能。',
      en_description:
        'A Cloud GIS application server based on high-efficiency cross-platform GIS kernel, having the functions like 2D & 3D integration service publishing, management and cluster, providing multi-layer extension development abilities.',
      site_url:
        'https://www.supermap.com/en/html/SuperMap_GIS_products1160212.html',
      order: 129,
      tags: [
        'Cloud GIS',
        'GIS Kernel',
        '2D & 3D Integration',
        'Service Publishing',
        'Cluster'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*14gGQa9DgisAAAAAAAAAAAAADjDHAQ/original',
      name: 'Telemac',
      en_name: 'Telemac',
      description: '开源的水动力学软件包，用于模拟河流和沿海地区的复杂流动。',
      en_description:
        'Open-source hydrodynamics software package for simulating complex flows in rivers and coastal areas.',
      site_url: 'http://www.opentelemac.org/',
      order: 131,
      tags: [
        'Open Source',
        'Hydrodynamics',
        'River Simulation',
        'Coastal Area Simulation'
      ]
    },
    {
      icon: 'https://mdn.alipayobjects.com/huamei_gjo0cl/afts/img/A*3U1YSJsMrbcAAAAAAAAAAAAADjDHAQ/original',
      name: 'uDig',
      en_name: 'uDig',
      description:
        '基于Eclipse Rich Client技术构建的开源（EPL和BSD）桌面应用程序框架。',
      en_description:
        'An open-source (EPL and BSD) desktop application framework, built with Eclipse Rich Client (RCP) technology.',
      site_url: 'http://udig.refractions.net/',
      order: 132,
      tags: [
        'Open Source',
        'Eclipse Rich Client',
        'Desktop Application Framework'
      ]
    },
    {
      icon: 'https://www.unavco.org/wordpress/wp-content/uploads/2023/07/cropped-favicon-192x192.png',
      name: 'teqc',
      en_name: 'teqc',
      description: '用于GNSS数据质量控制的工具。',
      en_description: 'Toolkit for GNSS data quality control.',
      site_url:
        'https://www.unavco.org/software/data-processing/teqc/teqc.html',
      order: 133,
      tags: ['GNSS', 'Data Quality Control']
    }
  ]
}
