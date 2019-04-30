import React from 'react'
import { Link } from 'gatsby'

import logo from "../img/logo.kyle.png";
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from "../img/github-icon.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kyle Engibous"
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="#aboutme" className="navbar-item">
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="#interests">
                        Interests
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/Blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>                    
                    <li>
                      <Link className="navbar-item" to="#projects">
                        Projects
                      </Link>
                    </li>
                    
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com/kyle.engibous">
                  <img
                    src={facebook}
                    alt="Facebook"
                    target="_blank"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/kengibous">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    target="_blank"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/kengibous">
                  <img
                    src={instagram}
                    alt="Instagram"
                    target="_blank"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href="https://github.com/kengibous">
                  <img
                    src={github}
                    alt="Github"
                    target="_blank"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
