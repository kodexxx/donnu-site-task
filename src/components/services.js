import React from "react";

import locales from '../locales'

const ServicesSections = () => {
  let lang = localStorage.getItem('lang')
  document.title = locales.menu.opportunities[lang]
  return (
    <div id="services">
      <section className="content-section bg-primary text-white text-center">
        <div className="container">
          <div className="content-section-heading">
            <h2 className="mb-5">{locales.menu.opportunities[lang]}</h2>
          </div>
          <div className="row">
            {locales.services.map((service, index) => (
              <div
                className="col-lg-3 col-md-6 mb-5 mb-lg-0"
                key={`service_${index}`}
              >
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className={service.icon} />
                </span>
                <h4>
                  <strong>{service.title[lang]}</strong>
                </h4>
                <p className="text-faded mb-0">{service.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default ServicesSections;
