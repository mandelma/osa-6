import React from 'react'
import { createFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    event.preventDefault()
    const part = event.target.filter.value
    props.store.dispatch(createFilter(part))
  }

  const style = {
    marginBottom: 10
  }

  return(
    <div style = {style}>
      <form onSubmit = {handleChange}>
        Filter: <input name = 'filter'></input>
        <button>Filter</button>
      </form>
      
    </div>
  )
}

export default Filter