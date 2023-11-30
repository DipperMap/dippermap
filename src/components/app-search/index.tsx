import { useState } from 'react';
import { ISearchItem, searchConfig } from "../../data/searchConfig";
import { Input, Button, Space, ConfigProvider } from "antd";
import "./index.css";

export const AppSearch = () => {

  const [curSearchType, setCurSearchType] = useState<ISearchItem>(searchConfig[0])
  const [searchText, setSearchText] = useState<string>()

  return <div
    className="searchWrapper"
  >
    <div
      className="searchBox"
    >
      <ConfigProvider
        theme={{
          components: {
            Button: {
              textHoverBg: '#38404D',
            }
          },
        }}
      >
        <Space>
          {
            searchConfig.map(item => {
              return <Button
                type='text'
                key={item.id}
                className={item.id === curSearchType.id ? 'activeSearch' : ''}
                onClick={() => {
                  setCurSearchType(item)
                }}
              >
                {item.name}
              </Button>
            })
          }
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
          size='large'
          placeholder={`回车> ${curSearchType.name}搜索`}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onPressEnter={() => {
            window.open(`${curSearchType.site}?${curSearchType.paramKey}=${searchText}`)
          }}
        />
      </ConfigProvider>
    </div>

  </div>
    ;
};
