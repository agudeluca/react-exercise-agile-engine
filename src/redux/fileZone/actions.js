export const ActionsConstants = {
  request: 'fileZone/REQUEST_SIMILAR_WORLDS',
  setDataSuccess: 'fileZone/SUCCESS_SIMILAR_WORLDS'
};

export default {
  request: (word) => ({
    word,
    type: ActionsConstants.request,
  }),
  setDataSuccess: (data) => ({
    data,
    type: ActionsConstants.setDataSuccess,
  })
};

