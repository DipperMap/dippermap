import { useState } from 'react'
import { ISearchItem } from '../../data/searchConfig'
import { Input, Button, Space, ConfigProvider } from 'antd'

export const WideSearch = (props: {
  searchConfig: ISearchItem[]
}) => {
  const { searchConfig } = props
  const [curSearchType, setCurSearchType] = useState<ISearchItem>(
    searchConfig[0]
  )
  const [searchText, setSearchText] = useState<string>()

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              textHoverBg: '#38404D'
            }
          }
        }}
      >
        <Space>
          {searchConfig.map((item) => {
            return (
              <Button
                type="text"
                key={item.id}
                className={item.id === curSearchType.id ? 'activeSearch' : ''}
                onClick={() => {
                  setCurSearchType(item)
                }}
              >
                {item.name}
              </Button>
            )
          })}
        </Space>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBorderColor: '#38404D',
              hoverBorderColor: '#38404D',
              activeShadow: '0px 2px 4px 0px #1D25310A'
            }
          }
        }}
      >
        <Input
          size="large"
          placeholder={`回车> ${curSearchType.name}搜索`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onPressEnter={() => {
            window.open(
              `${curSearchType.site}?${curSearchType.paramKey}=${searchText}`
            )
          }}
        />
      </ConfigProvider>
    </>
  )
}
