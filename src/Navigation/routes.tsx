import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from '../screens/Loading';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

function Routes() {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;