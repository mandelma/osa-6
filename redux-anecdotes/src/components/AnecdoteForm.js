import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer.js'

const AnecdoteForm = (props) => {
  const addNew = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    props.createNew(content)
    props.createNotification(`You added new anecdote '${content}'`, 3)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit = {addNew}>
        <div><input name = 'anecdoteInput' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createNew,
  createNotification
}

export default connect(
  0,
  mapDispatchToProps
)(AnecdoteForm)