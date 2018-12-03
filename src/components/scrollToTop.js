import React from "react"

import * as Scroll from 'react-scroll'

let scroll = Scroll.animateScroll

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      scrollPosition: 0
    }
  }
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(event) {
    this.setState({ scrollPosition: window.pageYOffset })
  }
  render() {
    return (
      <a
        style={{ color: '#fff', cursor: 'pointer' }}
        className={`${
          this.state.scrollPosition > 100 ? "fadeIn" : ""
          } scroll-to-top rounded`}
        onClick={() => scroll.scrollToTop()}
      >
        <i className="fas fa-angle-up" />
      </a>
    );
  }

}

export default ScrollToTop;
