// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojis = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onClickEmojis}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
