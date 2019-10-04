import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { createMsg, clearNotification } from '../reducers/notificationReducer.js'

const AnecdoteForm = (props) => {
  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    props.createNew(content)
    event.target.anecdoteInput.value = ''
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

const mapStateToProps = (state) => {
  return{
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  createNew,
  createMsg,
  clearNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)