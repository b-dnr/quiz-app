import { ADD_NEW_ANSWER } from './constants';


export const addNewAnswer = (newAnswer)=>({
    type: ADD_NEW_ANSWER,
    payload: newAnswer
})