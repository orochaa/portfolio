import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './global.css'
import './lib/i18n'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
