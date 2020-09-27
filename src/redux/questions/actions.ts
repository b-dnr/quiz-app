import { ADD_NEW_ANSWER } from './constants';

//TODO
export const addNewAnswer = (newAnswer: string)=>({ //? Надо указать какой тип данных вам приходит. Typescript нужен как раз для этого
    type: ADD_NEW_ANSWER,
    payload: newAnswer
})