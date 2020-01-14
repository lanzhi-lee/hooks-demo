import React from 'react';
import './App.css';

import Header from './Header'
import Detail from './Detail'

const App = () => {
  return (
    <section className="App">
      <div style={{ marginBottom: "15px" }}>
        <b>hooks-demo</b>
        <button>clear</button>
      </div>

      <Header />
      <Detail />
    </section>
  )
}

export default App;