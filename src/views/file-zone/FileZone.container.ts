import { connect } from 'react-redux';
import FileZone from './FileZone';
import Actions from 'redux/fileZone/actions';
import { getSimilarWorldsSelector } from 'redux/fileZone/selectors';
const mapStateToProps = (state: any) => {
  return {
    similarWords: getSimilarWorldsSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getSimilarWorlds: (word: string) => dispatch(Actions.request(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileZone);

