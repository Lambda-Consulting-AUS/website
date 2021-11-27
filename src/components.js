
import * as React from 'react'
import { Row, Col } from 'antd'

export function MailtoLink () {
  const EMAIL_ADDRESS = 'lambda@example.com'
  return <a href={`mailto:${EMAIL_ADDRESS}`}>
    {EMAIL_ADDRESS}
  </a>
}

// Like <a> except for #anchor links it smoothly scrolls to the element
export function Link ({ href, onClick, children, ...props }) {
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
}

// ContentBlock has two children and arranges them left to right on desktop
// and top to bottom on mobile (screen width <= 576px)
// If flipped is set, it will make it right to left on desktop without changing mobile
export function ContentBlock ({ children, flipped }) {
  children = flipped ? children.reverse() : children
  const cl = 'content-section ' + (flipped ? 'flipped' : '')
  return (
    <div className='container'>
      <Row justify='space-between' align='middle' className={cl}>
        {children.map(child => (
          <Col lg={11} md={11} sm={11} xs={24}>
            {child}
          </Col>
        ))}
      </Row>
    </div>
  )
}
