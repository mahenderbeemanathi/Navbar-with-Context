// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="dark-about-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
            />
            <h1 className="dark-about">About</h1>
          </div>
        ) : (
          <div className="light-about-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
            />
            <h1 className="light-about">About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default About
