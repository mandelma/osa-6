import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const filter = props.filter
  const anecdotes = filter === null 
  ? props.anecdotes
  :
  props.anecdotes.filter(obj => obj.content.toLowerCase().includes(filter))
  
  const voteMessage = (votedAnecdoteId) => {
    
    const votedAnecdote = anecdotes.filter(item => item.id === votedAnecdoteId)[0].content

    props.createNotification(`You voted '${votedAnecdote}'`, 3)
  }
  
  const addVote = (voteId) => {
    props.vote(voteId, anecdotes)
    voteMessage(voteId)
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

const mapStateToProps = (state) => {
  console.log('State', state)
  return{
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  vote,
  createNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)