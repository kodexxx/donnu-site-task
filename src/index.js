import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"
import nprogress from 'nprogress'


import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import HomePage from "./components/home";
import ServicesSections from "./components/services";
import NewsSection from "./components/news";
import FooterSection from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import NewsViewer from "./components/newsViewer"


import './scss/nprogress.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'ua')
    }

    this.state = {
      lang: localStorage.getItem('lang')
    }
  }

  componentWillMount() {
    nprogress.start();
    nprogress.done();
  }

  setLanguage(lang) {
    this.setState({ lang: lang })
    localStorage.setItem('lang', lang)
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div className="language">
            <button onClick={() => this.setLanguage('en')} className={this.state.lang === 'en' ? 'language-active' : null}>
              <img src="./img/gb.png" alt="EN"></img>
            </button>
            <button onClick={() => this.setLanguage('ua')} className={this.state.lang === 'ua' ? 'language-active' : null}>
              <img src="./img/ua.png" alt="UA"></img>
            </button>
          </div>

          <Sidebar />
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/news" component={NewsSection} />
          <Route path="/news/:id" component={NewsViewer} />
          <Route exact path="/opportunities" component={ServicesSections} />

          <FooterSection />
          <ScrollToTop />
        </div>
      </HashRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
