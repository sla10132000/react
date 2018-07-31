import {
  // 名前が被ってしまうので別名でimportする
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-redux';
import logger from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/redux-logger';
import tasksReducer from '../reducers/tasks';
//import testsReducer from '../reducers/tests';
//
// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
//      tests: testsReducer,
      // react-router-reduxのReducer
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      // react-router-reduxのRedux Middleware
      routerMiddleware(history)
    )
  );
}
