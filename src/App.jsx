import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Bank from './Components/Bank'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Bank />
      </div>
    </Provider>
  )
}

export default App
