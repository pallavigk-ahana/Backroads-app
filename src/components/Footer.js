import React from 'react'
import { PageLinks, SocialLinks } from '../data'

export const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {PageLinks.map((links) => {
          const { id, href, text } = links
          return (
            <li id={id}>
              <a href={href} class="footer-link" rel="noreferrer">
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul class="footer-icons">
        {SocialLinks.map((links) => {
          const { id, href, icon } = links
          return (
            <li id={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                class="footer-icon"
              >
                <i class={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
