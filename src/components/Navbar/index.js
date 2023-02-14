// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      return isDarkTheme ? (
        <div className="dark-container">
          <Link className="dark-link" to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="link-container">
            <Link className="dark-link" to="/">
              <li>Home</li>
            </Link>
            <Link className="dark-link" to="/about">
              <li>About</li>
            </Link>
          </ul>
          <img
            src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            alt="theme"
            onClick={onClickTheme}
          />
        </div>
      ) : (
        <div className="light-container">
          <Link className="dark-link" to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="link-container">
            <Link className="light-link" to="/">
              <li>Home</li>
            </Link>
            <Link className="light-link" to="/about">
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={onClickTheme}
            className="theme-button"
            data-testid="theme"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
