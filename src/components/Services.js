import React from 'react'
import { Title } from './Title'
import { ServicesData } from '../data'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {ServicesData.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className="service" id={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
