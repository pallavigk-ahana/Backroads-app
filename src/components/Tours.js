import React from 'react'
import { Title } from './Title'
import { ToursData } from '../data'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {ToursData.map((tours) => {
          const { id, img, date, title, text, location, days, cost } = tours
          return (
            <article className="tour-card" id={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{days}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
