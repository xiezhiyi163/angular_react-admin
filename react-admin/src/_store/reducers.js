/*
 * 
 *@reducers
 *  
 */

import { combineReducers } from 'redux'
import defaultState from './state.js'

function setLog_s(state = defaultState.setLog_s,action){
    switch(action.type){
        case 'log':
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    setLog_s,
})