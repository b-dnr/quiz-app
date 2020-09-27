import { Action } from '../../types';//? Импортируем нужные типы
import { ADD_NEW_ANSWER } from './constants';

export type QuestionsType = {
  question: string,
  answer: string,
}

export type StateType = {
  data: Array<QuestionsType>//? Массив из QuestionsType
}

const INIT_STATE = {
  data: [
    {
      // question1: 'Столица КР?',//? Свойства всех объектов в массиве должны быть одинаковы!!
      question: 'Столица КР?',
      // answer1: 'Бишкек'
      answer: 'Бишкек'
    },
    {
      question: 'День независимости КР?',
      answer: '31 августа'
    },
    {
      question: 'Самое большое озеро в КР',
      answer: 'Иссык-Куль'
    }
  ]
}

//TODO Запись ниже озночает что функция должна вернуть строку
// ():string=>{
//   return "HELLO WORLD"
// }

const QuestionReducer = (state: StateType = INIT_STATE, action: Action): StateType => {
  switch (action.type) {
    case ADD_NEW_ANSWER:
      const arr = [...state.data];
      arr.push(action.payload);
      return {
        ...state,
        data: arr
      }
    default:
      return state
  }
}

export default QuestionReducer;