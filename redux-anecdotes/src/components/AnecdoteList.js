import React from 'react'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes
  const addVote = (voteId) => {
    props.store.dispatch(
      vote(voteId)
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