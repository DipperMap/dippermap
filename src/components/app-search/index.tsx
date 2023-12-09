// import { useState, useMemo } from 'react'
import { searchConfig } from '../../data/searchConfig'
// import { Input, Button, Space, ConfigProvider } from 'antd'

import './index.css'
import { isMobileDevice } from '../../utils'
import { WideSearch } from './WideSearch'
import { NarrowSearch } from './NarrowSearch'

export const AppSearch = () => {
  return (
    <div className="searchWrapper">
      <div className="searchBox">
        {isMobileDevice() ? (
          <NarrowSearch searchConfig={searchConfig} />
        ) : (
          <WideSearch searchConfig={searchConfig} />
        )}
      </div>
    </div>
  )
}
