
import * as React from 'react'
import { Row, Col, Avatar } from 'antd'
import { MailOutlined, PhoneOutlined, GithubFilled, LinkedinFilled } from '@ant-design/icons'
import * as globals from './globals'

export function MailtoLink () {
  return (
    <a href={`mailto:${globals.EMAIL_ADDRESS}`}>
      <MailOutlined /> {globals.EMAIL_ADDRESS}
    </a>
  )
}

export function PhoneLink () {
  return (
    <a href={`tel:${globals.PHONE_NUMBER}`}>
      <PhoneOutlined /> {globals.PHONE_NUMBER}
    </a>
  )
}

// Like <a> except for #anchor links it smoothly scrolls to the element
export function Link ({ href, onClick, children, ...props }) {
  if (href.startsWith('#')) {
    const click = e => {
      e.preventDefault()
      if (onClick) onClick()
      let elem = document.querySelector(href)
      if (elem)
        elem.scrollIntoView({
          behavior: 'smooth'
        })
    }
    return <a onClick={click} href={href} {...props}>{children}</a>
  } else {
    return <a href={href} {...props}>{children}</a>
  }
}

// ContentBlock has two children and arranges them left to right on desktop
// and top to bottom on mobile (screen width <= 576px)
// If flipped is set, it will make it right to left on desktop without changing mobile
export function ContentBlock ({ children, flipped, className, ...props }) {
  children = flipped ? children.reverse() : children
  const cl = 'content-section ' + (flipped ? 'flipped ' : '') + (className || '')
  return (
    <div className='container'>
      <Row justify='space-between' align='middle' className={cl} {...props}>
        {children.map(child => (
          <Col lg={11} md={11} sm={11} xs={24}>
            {child}
          </Col>
        ))}
      </Row>
    </div>
  )
}

export function Partner ({ children, name, photo, flipped, title, linkedin, github, email, phone, ...props }) {
  return (
    <ContentBlock flipped={flipped} className='compact partner' {...props}>
      <div className='profile'>
        <Avatar src={photo} alt={name} size={200} />
        <h2>{name}</h2>
        <em>{title}</em>
        <div className='socials'>
          <a href={linkedin}><LinkedinFilled /></a>
          <a href={github}><GithubFilled /></a>
          <a href={`mailto:${email}`}><MailOutlined /></a>
          <a href={`tel:${phone}`}><PhoneOutlined /></a>
        </div>
      </div>
      <>
        {children}
      </>
    </ContentBlock>
  )
}

export function SectionLabel ({ children, ...props }) {
  return (
    <div className='section-header' {...props}>
      <div className='container'>
        <h1>{children}</h1>
      </div>
    </div>
  )
}