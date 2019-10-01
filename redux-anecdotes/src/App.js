import React from 'react';
import { vote } from './reducers/anecdoteReducer'
import { createNew } from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()

  const addVote = (voteId) => {
    props.store.dispatch(
      vote(voteId)
    )
  }

  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    console.log("content on: ", content)
    props.store.dispatch(
      createNew(content)
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
      <h2>create new</h2>
      <form onSubmit = {addNew}>
        <div><input name = 'anecdoteInput' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App