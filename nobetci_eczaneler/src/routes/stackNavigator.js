import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import { Home } from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
export default StackNavigator