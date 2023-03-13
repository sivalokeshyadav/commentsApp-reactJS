import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', description: '', commentsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, like: !each.like}
        }
        return each
      }),
    }))
  }

  onAddDetails = event => {
    event.preventDefault()
    const {name, description} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      description,
      postTime: new Date(),
      like: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      description: '',
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: filteredComments,
    }))
  }

  render() {
    const {description, name, commentsList} = this.state
    const commentCount = commentsList.length
    return (
      <div className="app-container">
        <div className="text-container">
          <form className="body-container">
            <div>
              <h1 className="heading">Comments</h1>
            </div>
            <p className="para-heading">Say something about 4.0 Technologies</p>
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              onChange={this.onChangeName}
              value={name}
            />
            <textarea
              className="textarea"
              placeholder="Your Comment"
              onChange={this.onChangeDescription}
              value={description}
            >
              {description}
            </textarea>

            <button
              type="submit"
              className="button"
              onClick={this.onAddDetails}
            >
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="h-line" />

        <div className="comments-container">
          <p className="comments-count">{commentCount}</p>
          <p className="comment">Comments</p>
        </div>
        <ul className="list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLiked={this.toggleIsLiked}
              deleteComment={this.deleteComment}
              classNames={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
