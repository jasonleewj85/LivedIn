import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import createStorage from 'redux-persist-encrypted-async-storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createLogger } from 'redux-logger';
// import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
// import { APP } from 'constants';

// import Reactotron from '../ReactotronConfig';

import reducers from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage: createStorage({ service: APP.appBundleId }),
//   whitelist: ['persist'],
//   stateReconciler: autoMergeLevel2,
// };

// const pReducer = persistReducer(persistConfig, reducers);

const logger = createLogger({
  collapsed: true,
});
const store = __DEV__
  ? createStore(reducers, compose(applyMiddleware(thunk, logger)))
  : createStore(reducers, applyMiddleware(thunk));
export default () => store;
export const getStore = () => store;
// export const persistor = persistStore(store);
