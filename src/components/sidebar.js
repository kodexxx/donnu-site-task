import React from "react";

import {Link} from 'react-router-dom'

import locale from '../locales'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }
  render() {
    let lang = localStorage.getItem('lang')
    const siteNav = [
      {
        title: locale.menu.home[lang],
        url: "/"
      },
      {
        title: locale.menu.news[lang],
        url: "/news"
      },
      {
        title: locale.menu.opportunities[lang],
        url: "/opportunities"
      }
    ];
    return [
      <a
        key={"nav-menu-button"}
        className="menu-toggle rounded"
        onClick={() => this.onMenuClick()}
      >
        <i
          className={`fas ${this.state.sidebarOpen ? "fa-times" : "fa-bars"}`}
        />
      </a>,
      <nav
        key={"nav-menu"}
        id="sidebar-wrapper"
        className={this.state.sidebarOpen ? "active" : ""}
      >
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a className="js-scroll-trigger">
              {locale.header[lang]}
            </a>
          </li>
          {siteNav.map(link => (
            <li
              key={link.url}
              className="sidebar-nav-item"
              onClick={() => this.onMenuItemClick()}
            >
              <Link className="js-scroll-trigger" to={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    ];
  }
  onMenuItemClick() {
    this.setState({ sidebarOpen: false });
  }
  onMenuClick() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }
}
export default Sidebar;
