// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment, classNames} = props
  const {
    name,
    description,
    postTime,
    like,
    id,
    initialClassName,
  } = commentDetails

  const firstLetter = name.slice(0, 1).toUpperCase()
  const sincePost = formatDistanceToNow(postTime)

  const likeTextClassName = like ? 'button active' : 'button'

  const onClickIsLiked = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const likeImage = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-items-container">
      <div className="header">
        <div className={initialClassName}>
          <p className="char">{firstLetter}</p>
        </div>
        <div>
          <p className="name">{name}</p>
          <p className="time">{sincePost}</p>
        </div>

        <div className="comment-para">
          <p>{description}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={likeImage} alt="like" className="like-btn" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickIsLiked}
          >
            Like
          </button>
        </div>
        <button
          className="delete-container"
          type="button"
          data-testId="delete"
          onClick={onDeleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="h-line" />
    </li>
  )
}

export default CommentItem
