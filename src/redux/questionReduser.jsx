import { createSlice } from '@reduxjs/toolkit'

export const questionReducer = createSlice({
    name:'questions'
    initialState : {
        queue:[],
        answers : [],
        questionNumber : 0
    },
    reducers : {
        startQuizAction : (state, action) => {
            return {
                ...state,
                queue: action.payload
            }
        }
    }
})

export const {startQuizAction} = questionReducer.actions

export default questionReducer.reducer