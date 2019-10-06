
export const createNotification = (msg, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_TEXT',
      data: msg
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
        data: null
      })
    }, time * 1000)
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return action.data
    case 'CLEAR':
      return action.data
    default: 
      return state
  }
}

export default notificationReducer