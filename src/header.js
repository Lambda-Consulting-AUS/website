
import { useState } from "react"
import { Row, Col, Drawer } from "antd"
import { AnchorLink } from "./components"
import { MenuOutlined } from "@ant-design/icons"

export default function Header () {
  const [visible, setVisibility] = useState(false)
  const toggleMenu = () => setVisibility(!visible)
  const hideMenu = () => setVisibility(false)

  const MenuItem = () => (
    <>
      <AnchorLink href="about" onClick={hideMenu}>
        About
      </AnchorLink>
      <AnchorLink href="mission" onClick={hideMenu}>
        Mission
      </AnchorLink>
      <AnchorLink href="product" onClick={hideMenu}>
        Product
      </AnchorLink>
      <AnchorLink href="contact" onClick={hideMenu}>
        Contact
      </AnchorLink>
    </>
  )

  const BurgerIcon = () => <MenuOutlined style={{ fontSize: 22, cursor: 'pointer' }} />

  return (<div className='container'>
    <header>
      <Row justify="space-between">
        <img src="logo-text.svg" width="200px" height="64px" />
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
  </div>);
};
