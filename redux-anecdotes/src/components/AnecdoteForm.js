import React from 'react'
import { createNew } from '../reducers/anecdoteReducer'
import { createMsg, clearNotification } from '../reducers/notificationReducer.js'

const AnecdoteForm = (props) => {
  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    console.log("content on: ", content)
    props.store.dispatch(
      createNew(content)
    )
    props.store.dispatch(createMsg(content))
    setTimeout(() => {
      props.store.dispatch(clearNotification())
    }, 5000)
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

export default AnecdoteForm