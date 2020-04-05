import { combineReducers } from 'redux'
import expense from './ExpenseReducer'
import common from './CommonReducer'
export default combineReducers({
    expense,
    common
})