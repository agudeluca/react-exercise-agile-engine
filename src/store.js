import rootReducer from 'redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import saga from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, /* preloadedState, */
  composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(saga);
export default store;

