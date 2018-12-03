import React from "react";

import { animateScroll as scroll } from 'react-scroll'

import locale from '../locales'

class AboutSection extends React.Component {

  componentWillMount() {
    scroll.scrollToTop()
  }
  render() {
    let lang = localStorage.getItem('lang')
    document.title = locale.menu.home[lang]
    return (
      <div id="about">
        <section className="content-section bg-light">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>{locale.homepage.header[lang]}</h2>
                <p className="lead mb-5">{locale.homepage.description[lang]}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AboutSection;
