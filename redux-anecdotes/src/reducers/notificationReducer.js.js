
export const voteMsg = (voteMessage) => {
  return {
    type: 'VOTE_MESSAGE',
    data: voteMessage
  }
}

export const createMsg = (content) => {
  return {
    type: 'CREATE_MESSAGE',
    data: content
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'VOTE_MESSAGE':
      return 'Anecdote ' + action.data + ' has voted!'
    case 'CREATE_MESSAGE':
      return `A new anecdote '${action.data}' was creates succesfully!`
    case 'CLEAR':
      return null
    default: 
      return state
  }
}

export default notificationReducer