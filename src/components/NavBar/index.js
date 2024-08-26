// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameProgress, topScore} = props
  return (
    <nav className="navbar">
      <div className="logo-wirh-score-container">
        <div className="logo-and-title-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
        {isGameProgress && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
