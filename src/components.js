
import * as React from 'react'

export function MailtoLink () {
  const EMAIL_ADDRESS = 'lambda@example.com'
  return <a href={`mailto:${EMAIL_ADDRESS}`}>
    {EMAIL_ADDRESS}
  </a>
}

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
