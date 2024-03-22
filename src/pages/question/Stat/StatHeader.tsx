import { useMemo, useRef } from 'react'
import { Space, Button, Typography, Input, InputRef, message, Tooltip, Popover } from 'antd'
import { LeftOutlined, CopyOutlined, QrcodeOutlined } from '@ant-design/icons'
import { QRCodeCanvas } from 'qrcode.react'

import styles from './statHeader.module.scss'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { useNavigate, useParams } from 'react-router-dom'

const { Title } = Typography
const StatHeader = () => {
  const navigate = useNavigate()
  const { isPublished } = useGetPageInfo()
  const { id } = useParams()

  const { title } = useGetPageInfo()

  const InputElm = useRef<InputRef>(null)

  // 拷贝链接
  const onCopyUrl = () => {
    const elem = InputElm.current
    if (!elem) return
    elem.select()
    document.execCommand('copy')
    message.success('已复制链接')
  }

  const copyLinkComponent = useMemo(() => {
    if (!isPublished) return null

    const url = `http://localhost:3000/question/${id}`

    const QRCode = <QRCodeCanvas value={url} size={150}></QRCodeCanvas>

    return (
      <Space>
        <Input value={url} ref={InputElm} />
        <Tooltip title="拷贝链接">
          <Button icon={<CopyOutlined />} onClick={onCopyUrl} />
        </Tooltip>
        <Popover content={QRCode}>
          <Button icon={<QrcodeOutlined />} />
        </Popover>
      </Space>
    )
  }, [isPublished, id])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
              返回
            </Button>
            <Title level={3} style={{ fontSize: '18px', margin: 0 }}>
              {title}
            </Title>
          </Space>
        </div>
        <div className={styles.center}>{copyLinkComponent}</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => navigate(`/question/edit/${id}`)}>
            编辑问卷
          </Button>
        </div>
      </div>
    </>
  )
}

export default StatHeader
