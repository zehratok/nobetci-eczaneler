import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import StackNavigator from './routes/stackNavigator';
import store from './config/store';

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default Router