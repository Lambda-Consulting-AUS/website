
import { useState } from "react"
import { Row, Col, Drawer } from "antd"
import { Link } from "./components"
import { MenuOutlined } from "@ant-design/icons"

export default function Header () {
  const [visible, setVisibility] = useState(false)
  const toggleMenu = () => setVisibility(!visible)
  const hideMenu = () => setVisibility(false)

  const MenuItem = () => (
    <>
      <Link href="#why-us" onClick={hideMenu}>
        Why us?
      </Link>
      <Link href="#portfolio" onClick={hideMenu}>
        Portfolio
      </Link>
      <Link href="#team" onClick={hideMenu}>
        Our Team
      </Link>
      <Link href="#contact" onClick={hideMenu}>
        Contact
      </Link>
    </>
  )

  const BurgerIcon = () => <MenuOutlined style={{ fontSize: 22, cursor: 'pointer' }} />

  return <div class='header-container'>
    <div className='container header'>
      <header>
        <Row justify="space-between">
          <img src="logo-text.svg" width="200" height="64"
            alt='Lambda Consulting logo' />
          <div className='desktop'>
            <MenuItem />
          </div>
          <div className='mobile' onClick={toggleMenu}>
            <BurgerIcon />
          </div>
        </Row>
        <Drawer closable={false} visible={visible} onClose={hideMenu} className='mobile'>
          <div className='drawer-header' onClick={toggleMenu}>
            <Col span={12}>
              <h5>Menu</h5>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <BurgerIcon />
            </Col>
          </div>
          <MenuItem />
        </Drawer>
      </header>
    </div>
  </div>
};
