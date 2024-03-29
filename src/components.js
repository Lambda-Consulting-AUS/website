
import * as React from 'react'
import { Row, Col, Avatar, Carousel } from 'antd'
import { MailOutlined, PhoneOutlined, GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import * as globals from './globals'

export function MailtoLink() {
  return globals.EMAIL_ADDRESS && (
    <a href={`mailto:${globals.EMAIL_ADDRESS}`}>
      <MailOutlined /> {globals.EMAIL_ADDRESS}
    </a>
  )
}

export function PhoneLink() {
  return globals.PHONE_NUMBER && (
    <a href={`tel:${globals.PHONE_NUMBER}`}>
      <PhoneOutlined /> {globals.PHONE_NUMBER}
    </a>
  )
}

// Like <a> except for #anchor links it smoothly scrolls to the element
export function Link({ href, onClick, children, ...props }) {
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
export function ContentBlock({ children, flipped, className, ...props }) {
  children = [
    <Col lg={12} md={12} sm={11} xs={24}>
      {children[0]}
    </Col>,
    <Col lg={11} md={11} sm={11} xs={24}>
      {children[1]}
    </Col>
  ]
  if (flipped) children = children.reverse()
  const cl = 'content-section ' + (flipped ? 'flipped ' : '') + (className || '')
  return (
    <div className='container'>
      <Row justify='space-between' align='middle' className={cl} {...props}>
        {children}
      </Row>
    </div>
  )
}

export function PartnerArray({ children, className, ...props }) {
  children = [
    <Col lg={6} md={12} sm={12} xs={24}>
      {children[0]}
    </Col>,
    <Col lg={6} md={12} sm={12} xs={24}>
      {children[1]}
    </Col>,
    <Col lg={6} md={12} sm={12} xs={24}>
      {children[2]}
    </Col>,
    <Col lg={6} md={12} sm={12} xs={24}>
      {children[3]}
    </Col>
  ]
  const cl = 'compact partner' + (className || '')
  return (
    <div className='partner-container'>
      <Row justify='space-between' align='top' className={cl} {...props}>
        {children}
      </Row>
    </div>
  )
}

export function Partner({ children, name, photo, flipped, title, linkedin, github, email, phone, ...props }) {
  return (
    <ContentBlock flipped={flipped} className='compact partner' {...props}>
      <div className='profile'>
        <Avatar src={photo} alt={name} size={200} />
        <h2>{name}</h2>
        <em>{title}</em>
        <div className='socials'>
          {linkedin && <a href={linkedin}><LinkedinFilled /></a>}
          {github && <a href={github}><GithubFilled /></a>}
          {email && <a href={`mailto:${email}`}><MailOutlined /></a>}
          {phone && <a href={`tel:${phone}`}><PhoneOutlined /></a>}
        </div>
      </div>
      <>
        {children}
      </>
    </ContentBlock>
  )
}

export function SmallPartner({ children, name, photo, flipped, title, linkedin, github, email, phone, ...props }) {
  return (
    <>
        <div className='profile small-partner'>
          <Avatar src={photo} alt={name} size={200} />
          <h2>{name}</h2>
          <em>{title}</em>
          <div className='socials'>
            {linkedin && <a href={linkedin}><LinkedinFilled /></a>}
            {github && <a href={github}><GithubFilled /></a>}
            {email && <a href={`mailto:${email}`}><MailOutlined /></a>}
            {phone && <a href={`tel:${phone}`}><PhoneOutlined /></a>}
          </div>
        </div>
    </>
  )
}

export function SectionLabel({ children, ...props }) {
  return (
    <div className='section-header' {...props}>
      <div className='container'>
        <h1>{children}</h1>
      </div>
    </div>
  )
}

export function SectionSubLabel({ children, ...props }) {
  return (
    <div className='section-subheader' {...props}>
      <div className='container'>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export function Project({ children, src, ...props }) {
  return (
    <div className='project' {...props}>
      <div style={{ backgroundImage: `url(${src})` }} className='project-background' />
      <div className='project-info'>
        <div className='container'>
          {children}
        </div>
      </div>
    </div>
  )
}

export function Logo({ src, ...props }) {
  return (
    <a className='logocell' {...props}>
      <img src={src} className='logo-background' alt={src} />
    </a>
  )
}

export function ProjectCarousel({ children, ...props }) {
  return (
    <Carousel
      autoplay={true} autoplaySpeed={5000} pauseOnDotsHover={true} pauseOnFocus={true} pauseOnHover={true}
      arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}
      {...props}>
      {children}
    </Carousel>
  )
}
