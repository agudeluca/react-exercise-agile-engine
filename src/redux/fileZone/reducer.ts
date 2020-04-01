import { setDataSuccess, request, ActionsTypes } from './actions';
interface FileZone{
  selectedWord?: string,
  similarWords: string[],
}
const initialState: FileZone = {
  selectedWord: undefined,
  similarWords: [],

}
export default function (state = initialState, action: ActionsTypes): FileZone {
  switch (action.type) {
  case request:
    return {
      ...state,
      selectedWord: action.word
    };
  case setDataSuccess: {
    return {
      ...state,
      similarWords: action.data.map((each: any) => each.word)
    };
  }
  default:
    return state;
  };
};
