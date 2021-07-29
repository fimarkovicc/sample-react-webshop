import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import CartContextProvider from './context/CartContext'

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById('root')
)