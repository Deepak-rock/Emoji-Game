// Write your code here.
import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickResetGame, score} = props
  const imageUrl = isWon ? winImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score">{score}</p>

        <button
          className="play-again-button"
          type="button"
          onClick={onClickResetGame}
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
