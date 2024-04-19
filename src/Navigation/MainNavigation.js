import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation