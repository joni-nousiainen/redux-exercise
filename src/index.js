import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { addText } from './actions'

import App from './App'
import app from './reducers'

const initialState = {
    texts: [
        { text: 'First example text' },
        { text: 'Seconds example text' }
    ]
}

let store = createStore(app, initialState)

render (
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('app')
)
