import React from 'react';
import {connect} from 'react-redux';
import {Keyboard} from 'react-native';
// import { firebaseService } from 'services';

import {setActiveScreen, setScreenState} from 'src/redux/ducks/navigation';
// import {setCurrentAppVersion} from 'src/redux/ducks/persist/appVersion';
// import Splashscreen from 'src/screens/splashscreen/splashscreen';
// import Maintenance from 'src/screens/maintenance/main';
import NavigationService from './navigationService';
// import Tutorial from '../screens/tutorial/main';
import Stack from './stack';

export default connect(s => ({
  // profile: s.persist.profile,
  // isTutorialShow: s.persist.tutorial.isTutorialShow,
  // app: s.app,
}))(props => {
  //   if (props.app.isAnimateSplashscreenVisible) {
  //     return <Splashscreen />;
  //   }
  //   if (props.profile.token) {
  //     firebaseService.setCurrentScreen({
  //       name: 'HomeScreen',
  //       userId: props.profile.id ? 'GUEST' : props.profile.id,
  //     });
  //     firebaseService.logGoogleAnalyticsScreen({
  //       name: 'HomeScreen',
  //       userId: props.profile.id ? 'GUEST' : props.profile.id,
  //     });
  //   } else {
  //     firebaseService.setCurrentScreen({
  //       name: 'LoginScreen',
  //       userId: props.profile.id ? 'GUEST' : props.profile.id,
  //     });
  //     firebaseService.logGoogleAnalyticsScreen({
  //       name: 'LoginScreen',
  //       userId: props.profile.id ? 'GUEST' : props.profile.id,
  //     });
  //   }
  //   if (props.app.isRehydrated) {
  //     setCurrentAppVersion();
  //   }

  // eslint-disable-next-line no-nested-ternary
  //   return props.isTutorialShow ? (
  //     <Tutorial
  //       ref={c => NavigationService.setNavigator(c)}
  //       onNavigationStateChange={onNavigationStateChange}
  //     />
  //   ) : props.app.maintenance ? (
  //     <Maintenance
  //       ref={c => NavigationService.setNavigator(c)}
  //       onNavigationStateChange={onNavigationStateChange}
  //     />
  //   ) : (
  //     <Stack
  //       ref={c => NavigationService.setNavigator(c)}
  //       onNavigationStateChange={onNavigationStateChange}
  //     />
  //   );

  return (
    <Stack
      ref={c => NavigationService.setNavigator(c)}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
});

function onNavigationStateChange(prevState, currentState) {
  Keyboard.dismiss();
  const currentScreen = getActiveRouteName(currentState);
  setScreenState(currentState);
  const prevScreen = getActiveRouteName(prevState);

  if (prevScreen !== currentScreen) {
    setActiveScreen(currentScreen);
    // the line below uses the Google Analytics tracker
    // change the tracker here to use other Mobile analytics SDK.
    // tracker.trackScreenView(currentScreen);
  }
}

export const getActiveRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};
