import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import Statistics from './Statistics'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const all = store.getState().good + store.getState().ok + store.getState().bad
  const average = all > 0 ? ((store.getState().good - store.getState().bad) / all) : 0
  const positive = all > 0 ? ((store.getState().good / all) * 100) : 0

  return (
    <div>
      <button onClick={() => good()}>hyvä</button> 
      <button onClick={() => ok()}>neutraali</button> 
      <button onClick={() => bad()}>huono</button>
      <button onClick={() => zero()}>nollaa tilastot</button>

      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>

      <Statistics 
        all = {all}
        average = {average}
        positive = {positive}
      />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
