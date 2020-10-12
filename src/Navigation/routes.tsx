import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from '../screens/Loading';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

function Routes() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => { setLoading(false) }, 3500)

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;