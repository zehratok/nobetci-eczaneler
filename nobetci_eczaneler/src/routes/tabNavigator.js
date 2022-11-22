import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { About, Home, Map } from '../screens'
import Ionicons from 'react-native-vector-icons/Ionicons';
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
                } else if (route.name === 'Harita') {
                    iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'Hakkında') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
                backgroundColor: red,
                height: height * 0.075,
            },
            tabBarActiveTintColor: white,
            tabBarInactiveTintColor: transparent,
            tabBarLabelStyle: { fontSize: SfontSize, fontWeight: 'bold', fontFamily: 'Ant-Design' },
        })}
        >
            <Tab.Screen name="Ana Sayfa" component={Home} />
            <Tab.Screen name="Harita" component={Map} />
            <Tab.Screen name="Hakkında" component={About} />
        </Tab.Navigator>
    )
}
export default TabNavigator