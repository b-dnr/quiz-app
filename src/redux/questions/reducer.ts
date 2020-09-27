import { ADD_NEW_ANSWER } from './constants';
const INIT_STATE = {
    data: [
        {
            question1: 'Столица КР?',
            answer1: 'Бишкек'
        },
        {
            question2: 'День независимости КР?',
            answer2: '31 августа'
        },
        {
            question3: 'Самое большое озеро в КР',
            answer3: 'Иссык-Куль'
        }
    ]
}

const QuestionReducer = (state = INIT_STATE, action)=>{
    switch (action.type) {
        case ADD_NEW_ANSWER:
            const arr = [...state.data];
            arr.push(action.payload);
            return{
                ...state, 
                data: arr
            }
        default:
            return state 
    }
}

export default QuestionReducer;