import React from "react"

import axios from 'axios'
import marked from 'marked'
import * as Scroll from 'react-scroll'

import nprogress from 'nprogress'

import locale from '../locales'

let scroll = Scroll.animateScroll

class newsViewer extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.state = {
      content: '',
      lang: localStorage.getItem('lang')
    }
    document.title = locale.menu.news[this.state.lang]
  }
  loadPost(id, lang) {
    axios.get(`./data/news/${id}_${lang}.md`)
      .then(resp => {
        this.setState({ content: marked(resp.data) })
        nprogress.done()
      })
  }
  componentDidMount() {
    this.loadPost(this.id, this.state.lang)
    nprogress.start()
    scroll.scrollTo(this.divRef.offsetTop)
  }

  render() {
    if (this.state.lang !== localStorage.getItem('lang')) {
      this.setState({ lang: localStorage.getItem('lang') })
      this.loadPost(this.id, localStorage.getItem('lang'))
      document.title = locale.menu.news[localStorage.getItem('lang')]
    }
    return (
      <div ref={element => this.divRef = element}>
        <section className="content-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <p className="lead mb-5" dangerouslySetInnerHTML={{ __html: this.state.content }}>
                </p>

              </div>
            </div>
          </div>
        </section>

      </div>)
  }
}


export default newsViewer;
