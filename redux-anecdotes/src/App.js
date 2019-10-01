import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import { vote } from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()

  const addVote = (voteId) => {
    props.store.dispatch(
      vote(voteId)
    )
  }

  return (
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
      <AnecdoteForm 
        store = {props.store}
      />
    </div>
  )
}

export default App