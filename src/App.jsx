import React, { useReducer } from 'react';

import Header from './Header'
import Detail from './Detail'

import { Context, ActionCreators, DefaultData, Reducer } from './hooks'

const App = () => {
  const [data, dispatch] = useReducer(Reducer, DefaultData)

  const actions = {
    addItem: (item) => dispatch(ActionCreators.add(item)),
    delItem: (index) => dispatch(ActionCreators.del(index)),
    clearAll: () => dispatch(ActionCreators.clear())
  }

  const clearAll = () => { actions.clearAll() }

  return (
    <Context.Provider value={{ data, actions }}>
      <section className="App">
        <div style={{ marginBottom: "15px" }}>
          <b>hooks-demo</b>
          <button onClick={clearAll}>clear</button>
        </div>

        <Header />
        <Detail />
      </section>
    </Context.Provider>
  )
}

export default App;