import { searchConfig } from '../../data/searchConfig'
import './index.css'
import { isMobileDevice } from '../../utils'
import { WideSearch } from './WideSearch'
import { NarrowSearch } from './NarrowSearch'

export const AppSearch = () => {
  return (
    <div id="app-search" className="searchWrapper">
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
