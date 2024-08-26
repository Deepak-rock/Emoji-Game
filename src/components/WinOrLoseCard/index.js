// Write your code here.
import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? winImage : loseImage
  const gameStaus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStaus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
        <div className="img-container">
          <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard
