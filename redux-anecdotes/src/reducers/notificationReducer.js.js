const firstNotification = 'It is notification'

export const notificationNote = (note) => {
  return {
    type: 'FIRST_NOTIFICATION',
    data: {
      content: note
    }
  }
}

const notificationReducer = (state = firstNotification, action) => {
  switch (action.type) {
    case 'FIRST_NOTIFICATION':
      return action.data.note
    default: 
      return state
  }
}

export default notificationReducer