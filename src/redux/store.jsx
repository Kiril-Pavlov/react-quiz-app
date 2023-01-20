import { configureStore, combineReducers } from '@reduxjs/toolkit'

//call reducers
import { questionReducer } from './questionReduser'
import { resultReducer } from './resultReducer'
const rootReducer =  combineReducers({
    questions: questionReducer,
    results: resultReducer
})