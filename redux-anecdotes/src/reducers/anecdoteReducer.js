const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
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
  return{
    type: 'ADD_NEW',
    data: {
      content: content
    }
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch(action.type){
    case 'ADD_VOTE':
      const id = action.data.id
      const anecdote = state.find(item => item.id === id)
      const newNote = {...anecdote, votes: anecdote.votes + 1}
      console.log("uus vote: ", newNote.votes)
      return state.map(n => n.id !== id ? n : newNote).sort((start, end) => end.votes - start.votes)
    case 'ADD_NEW':
      const newAnecdote = asObject(action.data.content)
      return state.concat(newAnecdote)
    default: return state 
  }
}

export default reducer