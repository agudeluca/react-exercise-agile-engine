import {ActionsConstants} from './actions'
const initialState = {
similarWords: []
}
export default function(state = initialState, action) {
  switch (action.type) {
    case ActionsConstants.request:
    return {
      ...state,
      selectedWord: action.word
    }
    case ActionsConstants.setDataSuccess: {
      return {
        ...state,
        similarWords: action.data.map(each => each.word)
      }
    }
    default:
      return state;
  }
}
