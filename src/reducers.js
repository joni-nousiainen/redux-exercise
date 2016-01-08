import { combineReducers } from 'redux'
import { ADD_TEXT } from './actions'

function texts(state = [], action) {
    switch (action.type) {
        case ADD_TEXT:
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        default:
            return state
    }
}

const app = combineReducers({
    texts
})

export default app