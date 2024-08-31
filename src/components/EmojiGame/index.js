import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// Write your code here.
class EmojiGame extends Component {
  state = {
    clickedEmojislist: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojislist: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojislist} = this.state
    const isWon = clickedEmojislist.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickResetGame={this.resetGame}
        score={clickedEmojislist.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (topScore < currentScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojislist} = this.state
    const isEmojiPresent = clickedEmojislist.includes(id)
    const clickedEmojiLength = clickedEmojislist.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojislist: [...prevState.clickedEmojislist, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list">
        {shuffledEmojisList.map(emojiDetail => (
          <EmojiCard
            key={emojiDetail.id}
            emojiDetail={emojiDetail}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojislist, topScore, isGameInProgress} = this.state
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojislist.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="game-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
