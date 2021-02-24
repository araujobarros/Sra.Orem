import React from 'react';
import { Link } from 'react-router-dom';
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
    classMenu: "navbar-menu"
  }) :
  this.setState ({
    isActive: true,
    classBurger: "navbar-burger is-active",
    classMenu: "navbar-menu is-active"
  })
}

  render() {
    return (
      <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <h1 className="navbar-item">Sra. Orem</h1>
            {/* Aqui eu posso colocar o caminho do Home no logo */}
            {/* <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a> */}
 
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
              >Home
            </Link>
            <Link
                className="navbar-item"
                  to={ {
                    pathname: "/Cardapio",
                  } }
                >Cardapio
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
                        >Sobre
                    </Link>
                    <Link
                        className="navbar-item"
                            to={ {
                            pathname: "/Contatos",
                            } }
                        >Contatos
                    </Link>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                        Report an issue
                    </a>
                </div>
            </div>
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <a className="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                    Log in
                </a>
                </div>
            </div>
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