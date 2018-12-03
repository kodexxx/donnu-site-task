import React from "react";
import Modal from 'react-awesome-modal'

import locale from '../locales'



class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    let lang = localStorage.getItem('lang')

    return <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{locale.header[lang]}</h1>
        <h3 className="mb-5">
          <em>{locale.blog_descr[lang]}</em>
        </h3>
        <button className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => this.openModal()}>
          {locale.about[lang]}
        </button>
      </div>
      <Modal visible={this.state.visible} width="500"  effect="fadeInUp" onClickAway={() => this.closeModal()}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>{locale.about[lang]}</h2>
          <p>{locale.about_descr[lang]}</p>
          <button className="btn btn-primary btn-l js-scroll-trigger" onClick={() => this.closeModal()}>
            {locale.close[lang]}
          </button>

        </div>
      </Modal>

    </header>
  }
}

export default Header;
