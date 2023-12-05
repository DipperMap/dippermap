import { useState } from 'react'
import { ISearchItem } from '../../data/searchConfig'
import { Input, Button, Space, Drawer, ConfigProvider } from 'antd'

export const NarrowSearch = (props: {
  searchConfig: ISearchItem[]
}) => {
  const { searchConfig } = props
  const [curSearchType, setCurSearchType] = useState<ISearchItem>(
    searchConfig[0]
  )
  const [searchText, setSearchText] = useState<string>()
  const [open, setOpen] = useState(false)

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBorderColor: '#38404D',
              hoverBorderColor: '#38404D',
              activeShadow: '0px 2px 4px 0px #1D25310A'
            },
          }
        }}
      >
        <Input
          size="large"
          placeholder={`回车> ${curSearchType.name}搜索`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          prefix={<Button
            ghost
            icon={curSearchType.icon ? <img src={curSearchType.icon} /> : curSearchType.name[0]}
            style={{
              borderRadius: '10px',
              color: '#000'
            }}
            onClick={() => setOpen(true)}
          />}
          onPressEnter={() => {
            window.open(
              `${curSearchType.site}?${curSearchType.paramKey}=${searchText}`
            )
          }}
        />
      </ConfigProvider>
      <Drawer
        placement='bottom'
        open={open}
        title="选择搜索引擎"
        closeIcon={false}
        className='selectSearchDrawer'
        mask
        maskClosable
        onClose={() => setOpen(false)}
        footer={
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultBg: '#d9d9d9',
                  borderRadius: 8,
                  fontWeight: 500,
                }
              }
            }}
          >
            <Button
              onClick={() => setOpen(false)}
              block
            >
              取消
            </Button>
          </ConfigProvider>
        }
      >
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBorder: '#ccc'
              }
            }
          }}
        >
          <Space wrap>
            {searchConfig.map((item) => {
              return (
                <Button
                  key={item.id}
                  className={item.id === curSearchType.id ? 'activeSearch' : ''}
                  onClick={() => {
                    setCurSearchType(item)
                    setOpen(false)
                  }}
                >
                  {item.name}
                </Button>
              )
            })}
          </Space>
        </ConfigProvider>
      </Drawer >
    </>
  )
}
