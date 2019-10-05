import anecdoteService from '../services/anecdotes'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

export const vote = (id) => {
  console.log('vote', id)
  return{
    type: 'ADD_VOTE',
    data: {id}
  }
}

export const createNew = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD_NEW',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch(action.type){
    case 'ADD_VOTE':
      const id = action.data.id
      const anecdote = state.find(item => item.id === id)
      const newNote = {...anecdote, votes: anecdote.votes + 1}
      return state.map(n => n.id !== id ? n : newNote).sort((start, end) => end.votes - start.votes)
    case 'ADD_NEW':
      const anecdoteObj = asObject(action.data.content)
      return state.concat(anecdoteObj)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state 
  }
}

export default reducer