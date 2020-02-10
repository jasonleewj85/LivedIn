import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated, Easing} from 'react-native';

// home
// import Home from 'src/screens/home/main';

// Login Stack
import Main from 'src/screens/login/Main';
import Loading from 'src/screens/login/Loading';
import Login from 'src/screens/login/Login';
import SignUp from 'src/screens/login/SignUp';

// others
// import PdfView from 'src/components/pdfView';
// import SwipeableTab from 'src/routes/swipeableTab';

export const INITIAL_SCREEN_NAME = 'Home';
const defaultConfig = {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
    // containerStyle: {
    //   backgroundColor: 'transparent',
    // },
  }),
  headerMode: 'none',
  // cardStyle: {
  //   backgroundColor: 'transperent',
  // },
};
const Stack = createStackNavigator(
  {
    [INITIAL_SCREEN_NAME]: {
      screen: Login,
    },
    LoginStack: {
      screen: createStackNavigator(
        {
          LoginScreen: {
            screen: Login,
          },
          SignupScreen: {
            screen: SignUp,
          },
          MainScreen: {
            screen: Main,
          },
        },
        {
          headerMode: 'none',
        },
      ),
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(Stack);
