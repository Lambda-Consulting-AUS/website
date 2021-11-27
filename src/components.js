
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
  return <a {...props} className={className} onClick={click} tabindex='0'>{children}</a>
}
