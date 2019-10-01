import React from 'react';

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch({
      type: 'ADD_VOTE',
      data: {id}
    })
  }

  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    console.log("content on: ", content)
    props.store.dispatch({
      type: 'ADD_NEW',
      data: {
        content: event.target.anecdoteInput.value
      }
    })
    
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
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