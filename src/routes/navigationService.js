import {NavigationActions} from 'react-navigation';
import {Keyboard} from 'react-native';

let instance = null;

/**
 * Wrapper class for react-navigation to provide navigation functionality within another service
 * @class
 */
class NavigationService {
  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;

    this.navigator = null;
  }

  /**
   * Set the navigation configuration
   *
   * @param   { Object }    nav       Contains the state navigation
   * @param   { Object }    dispatch  Handle the triggering of navigation action
   * @returns { void }
   */
  setNavigator(nav) {
    this.navigator = nav;
  }

  /**
   * Navigates to the specified screen
   *
   * @param   { string }    routeName   Specific name of the screen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  navigate(routeName, params) {
    if (this.navigator) {
      this.navigator.dispatch(
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      );
    }
  }

  /**
   * Replace current state with a new state
   *
   * @param   { string }    routeName   Specific name of the screen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  reset(routeName, params) {
    if (this.navigator) {
      this.navigator.dispatch(
        NavigationActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({
              type: 'Navigation/NAVIGATE',
              routeName,
              params,
            }),
          ],
        }),
      );
    }
  }

  /**
   * Go back to previous state of the navigation
   *
   * @returns { void }
   */
  goBack() {
    if (this.navigator) {
      this.navigator.dispatch(NavigationActions.back({}));
    }
  }

  /**
   * Navigates to open side menu
   *
   * @returns { void }
   */
  openMenu() {
    Keyboard.dismiss();

    if (this.navigator) {
      this.navigator.dispatch(
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: 'DrawerOpen',
          params: '',
        }),
      );
    }
  }

  closeMenu() {
    Keyboard.dismiss();

    if (this.navigator) {
      this.navigator.dispatch(
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: 'DrawerClose',
          params: '',
        }),
      );
    }
  }
}

export default new NavigationService();
