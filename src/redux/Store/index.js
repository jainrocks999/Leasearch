import { createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import menuSaga from '../Saga/Menu';
import Reducer from '../Reducers/Menu';

const sagamiddleware = createSagaMiddleware()
 const store=createStore(Reducer,applyMiddleware(sagamiddleware,logger))
  sagamiddleware.run(menuSaga)
    export default store;     