
import {createSelector} from 'reselect';

export const getFileZoneState = (state) => state.fileZone;

export const getSimilarWorldsSelector = createSelector(
  getFileZoneState,
  fileZone => fileZone.similarWords
);
