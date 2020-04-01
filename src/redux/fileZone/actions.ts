
export const setDataSuccess = 'fileZone/SUCCESS_SIMILAR_WORLDS';
export const request =  'fileZone/REQUEST_SIMILAR_WORLDS';

interface Request {
  word: string,
  type: typeof request
}
interface SetDataSuccess {
  type: typeof setDataSuccess,
  data: any
}

export type  ActionsTypes = Request | SetDataSuccess;

export default {
  request:  (word: string): Request => ({
    word,
    type: request,
  }),
  setDataSuccess: (data: string[]): SetDataSuccess => ({
    data,
    type: setDataSuccess,
  })
};
