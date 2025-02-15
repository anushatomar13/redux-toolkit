import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)


// see : https://youtu.be/1i04-A7kfFI?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&t=3662
