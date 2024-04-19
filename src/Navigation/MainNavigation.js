import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import Onboarding2 from '../Screens/Onboarding2';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} options={{ animation: "fade" }}/>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Onboarding2" component={Onboarding2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation