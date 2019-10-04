import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { voteMsg, clearNotification } from '../reducers/notificationReducer.js'

const AnecdoteList = (props) => {
  const filter = props.store.getState().filter
  const anecdotes = filter === null 
  ? props.store.getState().anecdotes
  :
  props.store.getState().anecdotes.filter(obj => obj.content.toLowerCase().includes(filter))
  
  const voteMessage = (votedAnecdoteId) => {
    
    const votedAnecdote = anecdotes.filter(item => item.id === votedAnecdoteId)[0].content
    props.store.dispatch(voteMsg(votedAnecdote))
    setTimeout(() => {
      props.store.dispatch(clearNotification())
    }, 5000)
  }
  
  const addVote = (voteId) => {
    console.log('added now')
    props.store.dispatch(
      vote(voteId),
      voteMessage(voteId)
    )
  }

  return(
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList