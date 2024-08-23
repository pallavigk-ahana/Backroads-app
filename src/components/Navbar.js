import React from 'react'
import logo from '../images/logo.svg'
import { PageLinks, SocialLinks } from '../data'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links">
          {PageLinks.map((link) => {
            return (
              <li id={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map((link) => {
            return (
              <li id={link.id}>
                <a
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
