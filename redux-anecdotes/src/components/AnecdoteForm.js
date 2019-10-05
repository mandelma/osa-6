import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { createMsg, clearNotification } from '../reducers/notificationReducer.js'

const AnecdoteForm = (props) => {
  const addNew = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    props.createNew(content)
    props.createMsg(content)
    
    setTimeout(() => {
      props.clearNotification()
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

const mapDispatchToProps = {
  createNew,
  createMsg,
  clearNotification
}

export default connect(
  0,
  mapDispatchToProps
)(AnecdoteForm)