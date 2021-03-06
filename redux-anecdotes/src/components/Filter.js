import React from 'react'
import { connect } from 'react-redux'
import { createFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    event.preventDefault()
    const part = event.target.filter.value
    event.target.filter.value = ''
    props.createFilter(part)
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

const mapStateToProps = (state) => {
  console.log(state)
  return{
    filter: state.filter,
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  createFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)