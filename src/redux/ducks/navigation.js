import { getStore } from 'src/redux/configStore';
// import { firebaseService } from 'services';

export const NAMESPACE = 'navigation';
export const SET_ACTIVE_SCREEN = `${NAMESPACE}/SET_ACTIVE_SCREEN`;
export const SET_SCREEN_STATE = `${NAMESPACE}/SET_SCREEN_STATE`;

const initialState = {
  activeScreen: '',
  screenState: {},
};

export const setActiveScreen = (data) => {
  const redux = getStore();
  const reduxState = redux.getState();
  // const { id } = reduxState.persist.profile;
  // firebaseService.setCurrentScreen({ name: data });
  // firebaseService.logGoogleAnalyticsScreen({ name: data, userId: id ? 'GUEST' : id });

  getStore().dispatch({ type: SET_ACTIVE_SCREEN, data });
};
export const setScreenState = data => getStore().dispatch({ type: SET_SCREEN_STATE, data });

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_SCREEN:
      return { ...state, activeScreen: action.data };
    case SET_SCREEN_STATE:
      return { ...state, screenState: action.data };
    default:
      return state;
  }
};
