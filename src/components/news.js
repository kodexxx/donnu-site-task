import React from "react";
import locale from '../locales'
import axios from 'axios';

import nprogress from 'nprogress'

import { Link } from 'react-router-dom'

class PortfolioSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  componentWillMount() {
    axios.get('./data/news/index.json')
      .then(res => {
        this.setState({ news: res.data })
        nprogress.done()
      })
    nprogress.start()
  }

  render() {
    const lang = localStorage.getItem('lang')
    document.title = locale.menu.news[lang]
    return (
      <div id="portfolio">
        <section className="content-section">
          <div className="container">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">{locale.news_h[lang]}</h3>
              <h2 className="mb-5">{locale.news_b[lang]}</h2>
            </div>
            <div className="row no-gutters">
              {this.state.news.map((newsItem, index) => (
                <div className="col-lg-6" key={`portfolio_item_${index}`}>
                  <Link className="portfolio-item" to={'/news/' + newsItem.id}>
                    <span className="caption">
                      <span className="caption-content">
                        <h2>{newsItem.heading[lang]}</h2>
                        <p className="mb-0">{newsItem.description[lang]}</p>
                      </span>
                    </span>
                    <img className="img-fluid" src={newsItem.imgSrc} alt="" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PortfolioSection;
