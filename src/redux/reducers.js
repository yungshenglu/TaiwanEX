import { combineReducers } from 'redux'
import Immutable from 'immutable'

import { initialState } from '../index.js'

export default function(state = initialState, action) {
    switch (action.type) {
        case 'EXAMPLE':
            console.log('Ran Example Reducer');
            return state;
        default:
            return state;
    }
}