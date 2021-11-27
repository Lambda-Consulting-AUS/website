
import * as React from 'react'

export const scrollTo = id => {
  const element = document.getElementById(id)
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
    })
}

// <AnchorLink href="about" /> is like <a href="#about" /> but with smooth scrolling
// Clicking will smooth scroll to the element with id="about"
// Only supports local # links
export function AnchorLink ({ href, onClick, children, className, ...props }) {
  const click = e => {
    onClick(e)
    scrollTo(href)
  }
  className = className ? className + ' anchor-link' : 'anchor-link'
  // tabindex='0' makes it Tab key accessible
  return <a {...props} className={className} onClick={click} tabIndex='0'>{children}</a>
}

export function MailtoLink () {
  const EMAIL_ADDRESS = 'example@example.com'
  return <a href={`mailto:${EMAIL_ADDRESS}`}>
    {EMAIL_ADDRESS}
  </a>
}

export function Link ({ href, onClick, children, ...props }) {
  const click = e => {
    e.preventDefault()
    if (onClick) onClick()
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  }
  return <a onClick={click} href={href} {...props}>{children}</a>
}
