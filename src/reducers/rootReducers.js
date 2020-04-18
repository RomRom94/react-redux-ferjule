import { FLIP_CARD } from "../actions/flip";

const initialState = {
  cards: [
    {
      id: "1",
      question: "Question 1",
      answer: "Réponse question 1"
    },
    {
      id: "2",
      question: "Question 2",
      answer: "Réponse question 2"
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === FLIP_CARD) {
    if (state.flip) {
      return Object.assign({}, state, {
        text: state.cards.question
      });
    } else {
      return Object.assign({}, state, {
        text: state.cards.answer
      });
    }
  }
  return state;
};

export default rootReducer;
