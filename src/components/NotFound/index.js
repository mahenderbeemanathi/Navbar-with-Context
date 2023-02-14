// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const cName = isDarkTheme ? 'dark' : 'light'
        return (
          <div className={`${cName}-not-container`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="img"
            />
            <h1 className={`${cName}-heading`}>Lost Your Way</h1>
            <p className={`${cName}-desc`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)
export default NotFound
