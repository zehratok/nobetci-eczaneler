import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings } from '../screens'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './tabBar.style';
import { red, transparent, white } from "../style/colors";
import { height, width, SfontSize, MfontSize, LfontSize, XLfontSize } from '../style/dimensions';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Ana Sayfa') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Ayarlar') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
                backgroundColor: red,
            },
            tabBarActiveTintColor: white,
            tabBarInactiveTintColor: transparent,
            tabBarLabelStyle: { fontSize: SfontSize, fontWeight: 'bold', fontFamily: 'Ant-Design' },
        })}
        >
            <Tab.Screen name="Ana Sayfa" component={Home} />
            <Tab.Screen name="Ayarlar" component={Settings} />
        </Tab.Navigator>
    )
}
export default TabNavigator