import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './assets/css/style.css'
import './assets/css/plugins.css'
import './assets/css/colors/purple.css'
import './assets/css/fonts/thicccboi.css'
// import './assets/js/theme'
// import './assets/js/plugins'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
