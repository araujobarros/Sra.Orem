import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faBug, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import ChefHat from './ChefHat';
import logo from './imgs/logo_cortado_2.png'


// import PropTypes from 'prop-types';
class Navbar extends React.Component {
  constructor () {
    super ();
    this.state = {
      isActive: false,
      classBurger: "navbar-burger",
      classMenu: "navbar-menu"
    }
  }

ativate = () => {
  (this.state.isActive) ?
  this.setState ({
    isActive: false,
    classBurger: "navbar-burger",
    classMenu: "navbar-menu",
  }) :
  this.setState ({
    isActive: true,
    classBurger: "navbar-burger is-active",
    classMenu: "navbar-menu is-active",
  })
}

  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link
                    to={ {
                      pathname: "/",
                    } }
                  >
                    <img
                    src={logo}
                    alt="logo Sra Orem"
                    width="150"
                    height="40" />
                </Link>
                <a role="button" className={this.state.classBurger} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                onClick={this.ativate}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

        <div id="navbarBasicExample" className={this.state.classMenu}>
            <div className="navbar-start">
            <Link
              className="navbar-item"
                to={ {
                  pathname: "/",
                } }
              >
                <span class="icon-text">
                    <span class="icon">
                    <FontAwesomeIcon icon={faHome} />
                    </span>
                    <span> Home</span>
                  </span>
            </Link>
            <Link
                className="navbar-item"
                  to={ {
                    pathname: "/Cardapio",
                  } }
                >
                  <span class="icon-text">
                    <span class="icon">
                    <FontAwesomeIcon icon={faCoffee} />
                    </span>
                    <span> Cardápio</span>
                  </span>
              </Link>

            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                Mais
                </a>
                <div className="navbar-dropdown">
                    <Link
                        className="navbar-item"
                            to={ {
                            pathname: "/Sobre",
                            } }
                        >
                           <span class="icon-text">
                            <span class="icon">
                              <ChefHat />
                            </span>
                            <span>Sobre</span>
                          </span>
                    </Link>
                    <Link
                        className="navbar-item"
                            to={ {
                            pathname: "/Contatos",
                            } }
                        >
                          <span class="icon-text">
                            <span class="icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span> Contatos</span>
                          </span>
                    </Link>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      <span class="icon-text">
                        <span class="icon">
                          <FontAwesomeIcon icon={faBug} />
                        </span>
                      <span> Reporte um erro</span>
                  </span>
                    </a>
                </div>
            </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <span class="buttons">
                  <FontAwesomeIcon class="button is-primary" icon={faInstagramSquare} size="3x"/>
                  <FontAwesomeIcon class="button is-primary" icon={faFacebookSquare} size="3x"/>
                  <FontAwesomeIcon class="button is-primary" icon={faWhatsappSquare} size="3x"/>
                </span>
              </div>
            {/* <div className="navbar-item">
                <div className="buttons">
                <a className="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                    Log in
                </a>
                </div>
            </div> */}
            </div>
        </div>
        </nav>
      </header>
    );
  }
}
// Navbar.propTypes = {
// };

export default Navbar;