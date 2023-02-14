// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="dark-home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
            <h1 className="dark-home">Home</h1>
          </div>
        ) : (
          <div className="light-home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
            />
            <h1 className="light-home">Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default Home
