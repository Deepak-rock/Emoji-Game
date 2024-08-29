// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetail, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetail

  const onClickEmoji = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emojis-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
