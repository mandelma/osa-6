
export const createFilter = (content) => {
  return {
    type: 'FILTER',
    data: content
  }
}

const filterReducer = (state = null, action) => {
  switch(action.type){
    case 'FILTER':
      return action.data
    default:
      return state
  }
}

export default filterReducer